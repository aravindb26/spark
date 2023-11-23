import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ParkAssist = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="ParkAssist"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m9.86,4.91c1.76,0,3.22,1.51,3.36,3.49v.26c0,2.07-1.5,3.75-3.36,3.75h-2.85v3.74c0,.42-.35.76-.78.76-.38,0-.7-.27-.76-.63v-.14s-.01-10.47-.01-10.47c0-.11.02-.21.06-.31.11-.27.36-.46.64-.46h3.69Zm0,1.58h-2.85s0,4.35,0,4.35h2.85c1.02,0,1.85-.86,1.94-1.94v-.2s0-.2,0-.2c-.08-1.13-.93-2-1.95-2Z"/><path d="m16.33,15.45c1.05-1.45,1.45-3.15,1.15-4.91h0c-.05-.25.14-.49.4-.54.26-.05.52.12.56.4.34,2.02-.12,3.96-1.32,5.63-1.21,1.66-2.93,2.72-4.98,3.06-.26.05-.52-.12-.56-.4-.05-.27.13-.52.41-.57,1.79-.3,3.3-1.22,4.35-2.67Z"/><path d="m15.64,10.74c.26-.05.52.12.56.4.22,1.23-.09,2.44-.81,3.44-.72,1-1.83,1.69-3.05,1.89-.26.05-.52-.12-.56-.4-.05-.27.13-.52.41-.57.96-.15,1.81-.66,2.41-1.48s.81-1.74.64-2.72c-.05-.26.14-.5.4-.55Z"/>',
      }}
    />
  )
)

ParkAssist.displayName = 'ParkAssist'

export const tags = ['ParkAssist', '']
