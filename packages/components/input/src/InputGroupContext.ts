import { createContext, useContext } from 'react'

import { InputGroupProps } from './InputGroup'

export interface InputGroupContext extends Pick<InputGroupProps, 'intent'> {
  isHovered: boolean
  isFocused: boolean
  isLeftAddonVisible: boolean
  isRightAddonVisible: boolean
  onFocus: () => void
  onBlur: () => void
}

export const InputGroupContext = createContext<Partial<InputGroupContext>>({})

export const useInputGroup = () => {
  return useContext(InputGroupContext)
}
