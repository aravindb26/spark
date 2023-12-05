import { useId } from '@radix-ui/react-id'
import { useFormFieldControl } from '@spark-ui/form-field'
import { Popover } from '@spark-ui/popover'
import { useMultipleSelection, useSelect, UseSelectState } from 'downshift'
import {
  createContext,
  Dispatch,
  Fragment,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

import { type DownshiftState, type DropdownItem, type ItemsMap } from './types'
import { getElementByIndex, getItemsFromChildren } from './utils'
export interface DropdownContextState extends DownshiftState {
  computedItems: ItemsMap
  highlightedItem: DropdownItem | undefined
  hasPopover: boolean
  setHasPopover: Dispatch<SetStateAction<boolean>>
  multiple: boolean
}

export type DropdownContextCommonProps = PropsWithChildren<{
  /**
   * The controlled open state of the select. Must be used in conjunction with `onOpenChange`.
   */
  open?: boolean
  /**
   * Event handler called when the open state of the select changes.
   */
  onOpenChange?: (isOpen: boolean) => void
  /**
   * The open state of the select when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean
}>

interface DropdownPropsSingle {
  /**
   * Prop 'multiple' indicating whether multiple values are allowed.
   */
  multiple?: false
  /**
   * The value of the select when initially rendered. Use when you do not need to control the state of the select.
   */
  defaultValue?: string
  /**
   * The controlled value of the select. Should be used in conjunction with `onValueChange`.
   */
  value?: string
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void
}

interface DropdownPropsMultiple {
  /**
   * Prop 'multiple' indicating whether multiple values are allowed.
   */
  multiple: true
  /**
   * The value of the select when initially rendered. Use when you do not need to control the state of the select.
   */
  defaultValue?: string[]
  /**
   * The controlled value of the select. Should be used in conjunction with `onValueChange`.
   */
  value?: string[]
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string[]) => void
}

type OnChangeValueType = string & string[]

export type DropdownContextProps = DropdownContextCommonProps &
  (DropdownPropsSingle | DropdownPropsMultiple)

const DropdownContext = createContext<DropdownContextState | null>(null)

export const DropdownProvider = ({
  children,
  defaultValue,
  value,
  onValueChange,
  open,
  onOpenChange,
  defaultOpen,
  multiple = false,
}: DropdownContextProps) => {
  const [computedItems, setComputedItems] = useState<ItemsMap>(getItemsFromChildren(children))
  const [hasPopover, setHasPopover] = useState<boolean>(false)

  const field = useFormFieldControl()

  const id = useId(field.id)
  const labelId = useId(field.labelId)

  const controlledDefaultOpen = defaultOpen ?? false

  const downshiftMultipleSelection = useMultipleSelection<DropdownItem>({
    // initialSelectedItems: [controlledDefaultSelectedItem as DropdownItem],
    // selectedItems
    // initialSelectedItems
    onSelectedItemsChange: ({ selectedItems }) => {
      if (selectedItems?.length && multiple) {
        onValueChange?.(selectedItems.map(item => item.value) as OnChangeValueType)
      }
    },
  })

  const downshift = useSelect({
    items: Array.from(computedItems.values()),
    isItemDisabled: item => item.disabled,
    itemToString: item => (item ? item.text : ''),
    // a11y attributes
    id,
    labelId,
    // Controlled open state
    isOpen: open,
    onIsOpenChange: ({ isOpen }) => {
      if (isOpen != null) {
        onOpenChange?.(isOpen)
      }
    },
    initialIsOpen: controlledDefaultOpen,
    ...(multiple
      ? {
          stateReducer: (state: UseSelectState<DropdownItem>, { changes, type }) => {
            switch (type) {
              case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
              case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
              case useSelect.stateChangeTypes.ItemClick:
                if (changes.selectedItem != null) {
                  const isAlreadySelected = downshiftMultipleSelection.selectedItems.some(
                    selectedItem => selectedItem.value === changes.selectedItem?.value
                  )

                  if (isAlreadySelected) {
                    downshiftMultipleSelection.removeSelectedItem(changes.selectedItem)
                  } else {
                    downshiftMultipleSelection.addSelectedItem(changes.selectedItem)
                  }
                }

                return {
                  ...changes,
                  isOpen: true, // keep the menu open after selection.
                  highlightedIndex: state.highlightedIndex, // preserve highlighted index position
                }
              default:
                return changes
            }
          },
        }
      : {
          // Controlled mode - single selection
          selectedItem: value ? computedItems.get(value as string) : undefined,
          initialSelectedItem: defaultValue ? computedItems.get(defaultValue as string) : undefined,
          onSelectedItemChange: ({ selectedItem }) => {
            if (selectedItem?.value && !multiple) {
              onValueChange?.(selectedItem?.value as OnChangeValueType)
            }
          },
        }),
  })

  /**
   * Indices in a Map are set when an element is added to the Map.
   * If for some reason, in the Dropdown:
   * - children order changes
   * - children are added
   * - children are removed
   *
   * The Map must be rebuilt from the new children in order to preserve logical indices.
   *
   * Downshift is heavily indices based for keyboard navigation, so it it important.
   */
  useEffect(() => {
    const newMap = getItemsFromChildren(children)

    setComputedItems(newMap)
  }, [children])

  /**
   * Warning:
   * Downshift is expecting the items list to always be rendered, as per a11y guidelines.
   * This is why the `Popover` is always opened in this component, but visually hidden instead from Dropdown.Popover.
   */
  const [WrapperComponent, wrapperProps] = hasPopover ? [Popover, { open: true }] : [Fragment, {}]

  return (
    <DropdownContext.Provider
      value={{
        multiple,
        ...downshift,
        ...downshiftMultipleSelection,
        computedItems,
        highlightedItem: getElementByIndex(computedItems, downshift.highlightedIndex),
        hasPopover,
        setHasPopover,
      }}
    >
      <WrapperComponent {...wrapperProps}>{children}</WrapperComponent>
    </DropdownContext.Provider>
  )
}

export const useDropdownContext = () => {
  const context = useContext(DropdownContext)

  if (!context) {
    throw Error('useDropdownContext must be used within a Dropdown provider')
  }

  return context
}
