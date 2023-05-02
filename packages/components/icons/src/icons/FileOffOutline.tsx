import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FileOffOutline = React.forwardRef(
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
          '<path d="M6.93068 4.19904C6.98229 4.25038 7.0597 4.27605 7.12851 4.27605C7.19732 4.27605 7.27473 4.23327 7.31773 4.17337C7.31773 4.16482 7.33494 4.15626 7.34354 4.1477C7.40375 4.08781 7.47256 4.06214 7.55857 4.06214H13.7945L19.8498 10.086V16.9484C19.8498 17.0168 19.8756 17.0853 19.9272 17.128L21.4754 18.6682C21.5528 18.7452 21.6561 18.7624 21.7593 18.7281C21.8539 18.6853 21.9227 18.5912 21.9227 18.4885V9.65814C21.9227 9.38433 21.8109 9.12764 21.6216 8.93083L14.9471 2.29948C14.7492 2.10268 14.4912 2 14.216 2H7.54997C6.92208 2 6.31999 2.24814 5.88132 2.69308C5.86412 2.7102 5.83832 2.73587 5.82111 2.75298C5.7265 2.85566 5.7265 3.00968 5.82111 3.11236L6.92208 4.2076L6.93068 4.19904ZM7.1113 4.01935L6.90487 3.86534C6.90487 3.86534 6.92208 3.84822 6.93068 3.83967L7.1113 4.01935C7.1113 4.01935 7.14571 3.98513 7.16291 3.96801L7.1113 4.01935Z"/><path d="M14.6718 11.5406 16.2201 13.0808H16.8823C17.3124 13.0808 17.6565 12.7385 17.6565 12.3107 17.6565 11.8829 17.3124 11.5406 16.8823 11.5406H14.6718ZM22.6882 21.2438 3.76541 2.41927C3.36115 2.02567 2.70745 2.02567 2.30319 2.41927 1.89894 2.82143 1.89894 3.47173 2.30319 3.87389L5.18462 6.74035V18.9335C5.18462 19.5581 5.43406 20.1571 5.88132 20.5935 6.32859 21.0384 6.92208 21.2865 7.54997 21.2865H19.5487C19.6262 21.2865 19.7036 21.2694 19.7896 21.2609L21.2346 22.6984C21.6389 23.1005 22.2925 23.1005 22.6968 22.6984 23.1011 22.2962 23.1011 21.6459 22.6968 21.2438H22.6882ZM10.225 13.0722H11.5582L14.0095 15.5108H10.225C9.7949 15.5108 9.45085 15.8531 9.45085 16.2809 9.45085 16.7088 9.7949 17.051 10.225 17.051H15.5578L17.7511 19.233H7.54997C7.47256 19.233 7.39515 19.1987 7.33494 19.1474 7.27473 19.0875 7.24892 19.019 7.24892 18.9335V8.80249L10.0357 11.5748C9.70029 11.6604 9.44225 11.9428 9.44225 12.3107 9.44225 12.7385 9.7863 13.0808 10.2164 13.0808L10.225 13.0722ZM10.6722 7.56178 12.2205 9.10197H12.8828C13.3128 9.10197 13.6569 8.7597 13.6569 8.33187 13.6569 7.90404 13.3128 7.56178 12.8828 7.56178H10.6722Z"/>',
      }}
    />
  )
)

FileOffOutline.displayName = 'FileOffOutline'

export const tags = ['file-off-outline', 'account']
