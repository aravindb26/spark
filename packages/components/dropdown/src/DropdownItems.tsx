import { ReactNode } from 'react'

import { useDropdownContext } from './DropdownContext'

interface ItemsProps {
  children: ReactNode
}

export const Items = ({ children }: ItemsProps) => {
  const { isOpen, getMenuProps } = useDropdownContext()

  return (
    <ul
      {...getMenuProps()}
      className={`flex max-h-sz-320 flex-col overflow-auto ${
        isOpen ? 'block' : 'pointer-events-none opacity-0'
      }`}
    >
      {children}
    </ul>
  )
}

Items.id = 'Items'
Items.displayName = 'Dropdown.Items'