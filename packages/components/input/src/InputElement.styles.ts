import { cva, VariantProps } from 'class-variance-authority'

export const inputElementStyles = cva([
  'pointer-events-none absolute top-[calc(var(--sz-44)/2)] -translate-y-1/2 text-neutral peer-focus:text-outline-high',
])

export type InputElementStylesProps = VariantProps<typeof inputElementStyles>
