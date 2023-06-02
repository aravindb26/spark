import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlashOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1975 2.55618C14.0533 1.42281 15.8275 2.15151 15.6765 3.57438L15.1338 8.69058H18.6095C19.7618 8.69058 20.4123 10.0417 19.7086 10.9735L11.8025 21.4438C10.9467 22.5772 9.17254 21.8485 9.32349 20.4256L9.86622 15.3094H6.39051C5.2382 15.3094 4.58773 13.9583 5.29139 13.0265L13.1975 2.55618ZM13.5099 5.41943L7.55291 13.3084H10.503C11.3287 13.3084 11.9718 14.0401 11.8829 14.8784L11.4901 18.5806L17.4471 10.6916H14.497C13.6713 10.6916 13.0282 9.95989 13.1171 9.12156L13.5099 5.41943Z"/>',
      }}
    />
  )
)

FlashOutline.displayName = 'FlashOutline'

export const tags = ['FlashOutline', '']