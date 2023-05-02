import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const WorkFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.527 4.16667V6.25H17.0207V7C16.9378 7.41667 16.6058 7.75 16.1909 7.75H7.72614C7.3112 7.75 6.97925 7.41667 6.97925 7V6.25H8.39004V4.16667C8.39004 3.91667 8.47303 3.75 8.639 3.66667C8.72199 3.5 8.88797 3.41667 9.13693 3.41667H14.7801C15.029 3.41667 15.195 3.5 15.278 3.66667C15.444 3.83333 15.527 4 15.527 4.16667ZM6.97925 6.25V4.16667C6.97925 3.58333 7.22822 3.08333 7.64315 2.66667C7.9751 2.25 8.55602 2 9.13693 2H14.8631C15.444 2 15.9419 2.25 16.3568 2.66667C16.7718 3.08333 17.0207 3.58333 17.0207 4.16667V6.25H19.7593C20.9212 6.25 21.917 7.25 22 8.41667V19.8333C22 21 21.0041 22 19.8423 22H4.15768C2.99585 22 2 21 2 19.8333V8.41667C2 7.25 2.99585 6.25 4.15768 6.25H6.97925ZM6.97925 17H16.9378C17.3527 17 17.6846 16.6667 17.6846 16.25C17.6846 15.8333 17.3527 15.5 16.9378 15.5H6.97925C6.56432 15.5 6.23236 15.8333 6.23236 16.25C6.23236 16.6667 6.56432 17 6.97925 17ZM6.97925 12.75H16.9378C17.3527 12.75 17.6846 12.4167 17.6846 12C17.6846 11.5833 17.3527 11.25 16.9378 11.25H6.97925C6.56432 11.25 6.23236 11.5833 6.23236 12C6.23236 12.4167 6.56432 12.75 6.97925 12.75Z"/><path d="M7.72614 7.75H16.1909C16.6058 7.75 16.9378 7.41667 17.0207 7V6.25H15.527H8.39004H6.97925V7C6.97925 7.41667 7.3112 7.75 7.72614 7.75Z"/>',
      }}
    />
  )
)

WorkFill.displayName = 'WorkFill'

export const tags = ['work-fill', 'account']
