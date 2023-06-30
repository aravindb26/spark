import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Loader = React.forwardRef(
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
          '<path d="M19.7655 15.0344L17.3655 12.6344C17.2143 12.4832 17.0103 12.4 16.7999 12.4C16.7573 12.4 16.7146 12.4035 16.6717 12.4104C16.4178 12.4517 16.1991 12.6123 16.0842 12.8424C16.0399 12.9312 15.8612 13.3096 15.745 13.804C15.6069 13.6123 15.4789 13.4184 15.3591 13.2253C14.8639 12.4261 14.3522 11.6 12.7999 11.6C12.7999 11.5141 12.7861 11.4285 12.7589 11.3469L11.2431 6.8H11.5999C11.821 6.8 11.9999 6.62106 11.9999 6.4C11.9999 6.17894 11.821 6 11.5999 6H10.3999H7.99994H6.79994C6.57888 6 6.39994 6.17894 6.39994 6.4C6.39994 6.62106 6.57888 6.8 6.79994 6.8H7.19994V10H6.39994V8.4H5.59994V10H4.79994C4.35806 10 3.99994 10.3581 3.99994 10.8V14.8C3.99994 15.2419 4.35806 15.6 4.79994 15.6H4.84047C5.02634 16.5117 5.83406 17.2 6.79994 17.2C7.76581 17.2 8.57353 16.5117 8.75941 15.6H10.4405C10.6263 16.5117 11.4341 17.2 12.3999 17.2C13.4146 17.2 14.2461 16.4376 14.3738 15.4571C14.8309 15.7347 15.3757 15.9221 16.0021 15.9221C16.0136 15.9221 16.0184 15.9232 16.029 15.9232C16.0893 16.0067 16.1565 16.088 16.2341 16.1653C16.62 16.5512 17.1536 16.7552 17.7776 16.7552C18.6522 16.7552 19.4674 16.3602 19.5576 16.3152C19.7874 16.2002 19.9482 15.9816 19.9896 15.7277C20.0309 15.4744 19.9474 15.2162 19.7655 15.0344ZM7.99994 6.8H10.3999L11.9999 11.6H7.99994V6.8ZM4.84047 14.8H4.79994V10.8H7.19994V13.2405C7.07059 13.2141 6.937 13.2 6.79994 13.2C5.83406 13.2 5.02634 13.8882 4.84047 14.8ZM6.79994 16.4C6.13728 16.4 5.59994 15.8627 5.59994 15.2C5.59994 14.5373 6.13728 14 6.79994 14C7.46259 14 7.99994 14.5373 7.99994 15.2C7.99994 15.8627 7.46259 16.4 6.79994 16.4ZM10.4405 14.8H8.75941C8.66047 14.3149 8.381 13.8987 7.99994 13.6101V12.4H11.9999V13.2405C11.2175 13.4 10.5999 14.0176 10.4405 14.8ZM12.3999 16.4C11.7373 16.4 11.1999 15.8627 11.1999 15.2C11.1999 14.5373 11.7373 14 12.3999 14C13.0626 14 13.5999 14.5373 13.5999 15.2C13.5999 15.8627 13.0626 16.4 12.3999 16.4ZM14.1207 14.1984C13.8381 13.7149 13.3656 13.356 12.7999 13.2405V12.4C13.9069 12.4 14.2141 12.8957 14.6797 13.6464C14.925 14.0429 15.2167 14.4955 15.6583 14.9221C15.6644 14.9781 15.6757 15.0341 15.6858 15.0901C15.0079 14.9955 14.4711 14.6261 14.1207 14.1984ZM17.7778 15.9555C17.4221 15.9555 17.0666 15.8667 16.7999 15.6C15.9999 14.8 16.7999 13.2 16.7999 13.2L19.1999 15.6C19.1999 15.6 18.4887 15.9555 17.7778 15.9555Z"/><path d="M6.81352 15.6272C7.01434 15.6272 7.17714 15.4644 7.17714 15.2635 7.17714 15.0627 7.01434 14.8999 6.81352 14.8999 6.61269 14.8999 6.44989 15.0627 6.44989 15.2635 6.44989 15.4644 6.61269 15.6272 6.81352 15.6272ZM12.3636 15.6272C12.5644 15.6272 12.7272 15.4644 12.7272 15.2635 12.7272 15.0627 12.5644 14.8999 12.3636 14.8999 12.1627 14.8999 11.9999 15.0627 11.9999 15.2635 11.9999 15.4644 12.1627 15.6272 12.3636 15.6272Z"/>',
      }}
    />
  )
)

Loader.displayName = 'Loader'

export const tags = ['Loader', '']
