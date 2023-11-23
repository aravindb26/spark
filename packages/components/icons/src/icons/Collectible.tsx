import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Collectible = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Collectible"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m14.5,9.5c0,.55-.45,1-1,1s-1-.45-1-1,.45-1,1-1,1,.45,1,1Zm-.75,0c0,.14-.11.25-.25.25s-.25-.11-.25-.25.11-.25.25-.25.25.11.25.25Z"/><path fill-rule="evenodd" d="m6.5,7.5c0-.55.45-1,1-1h9c.55,0,1,.45,1,1v9c0,.55-.45,1-1,1H7.5c-.55,0-1-.45-1-1V7.5Zm1-.25h9c.14,0,.25.11.25.25v4.59l-1.11-1.39c-.33-.41-.93-.44-1.3-.07l-1.86,1.86-2.35-1.96c-.37-.31-.92-.26-1.23.11l-1.64,1.97v-5.11c0-.14.11-.25.25-.25Zm9.21,5.98s.03.03.04.05v2.55l-3.68-2.87,1.8-1.8c.05-.05.14-.05.19.01l1.65,2.06Zm-4.45.05l4.39,3.41s-.09.05-.15.05H7.5c-.14,0-.25-.11-.25-.25v-2.72s.03-.03.04-.04l2.18-2.62c.04-.05.12-.06.18-.02l2.62,2.18Z"/><path fill-rule="evenodd" d="m4.5,6.5c0-1.1.9-2,2-2h11c1.1,0,2,.9,2,2v11c0,1.1-.9,2-2,2H6.5c-1.1,0-2-.9-2-2V6.5Zm2-1.25h11c.69,0,1.25.56,1.25,1.25v11c0,.69-.56,1.25-1.25,1.25H6.5c-.69,0-1.25-.56-1.25-1.25V6.5c0-.69.56-1.25,1.25-1.25Z"/>',
      }}
    />
  )
)

Collectible.displayName = 'Collectible'

export const tags = ['Collectible', '']
