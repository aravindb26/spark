import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AlarmOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4359 4.22578C15.4871 4.5608 16.4535 5.14528 17.2472 5.94226C18.5496 7.25001 19.2805 9.02273 19.2805 10.8702C19.2805 13.6731 19.7548 15.2202 20.244 16.1186C20.6359 16.8383 20.826 17.7194 20.502 18.5102C20.1417 19.3896 19.2959 19.815 18.3492 19.815H15.4143L15.4131 19.8198C15.2356 20.5013 14.8368 21.1048 14.2793 21.5355C13.7218 21.9663 13.0371 22.2 12.3325 22.2C11.6279 22.2 10.9432 21.9663 10.3857 21.5355C9.82818 21.1048 9.42942 20.5013 9.25189 19.8198L9.25067 19.815H6.31546C5.36991 19.815 4.52363 19.3911 4.16376 18.5109C3.84052 17.7203 4.03198 16.8401 4.42314 16.1216C4.91152 15.2244 5.38518 13.6772 5.38518 10.8702C5.38518 9.02273 6.11606 7.25001 7.41849 5.94226C8.21216 5.14534 9.17849 4.56089 10.2296 4.22586C10.2705 3.10006 11.1964 2.19995 12.3327 2.19995C13.469 2.19995 14.3949 3.10002 14.4359 4.22578ZM12.3328 5.91819C13.6382 5.91819 14.891 6.4388 15.8154 7.36698C16.7399 8.29531 17.2601 9.55537 17.2601 10.8702C17.2601 13.8878 17.769 15.7977 18.4694 17.084C18.6935 17.4955 18.644 17.7165 18.6323 17.7449L18.6282 17.7476C18.6116 17.7573 18.5336 17.7956 18.3492 17.7956H6.31546C6.13065 17.7956 6.05282 17.7573 6.03657 17.7479L6.03372 17.7463C6.02212 17.7163 5.97489 17.4962 6.19779 17.0868C6.89768 15.8011 7.40555 13.8908 7.40555 10.8702C7.40555 9.55538 7.92578 8.29531 8.85034 7.36698C9.77474 6.4388 11.0275 5.91819 12.3328 5.91819Z"/>',
      }}
    />
  )
)

AlarmOutline.displayName = 'AlarmOutline'

export const tags = ['AlarmOutline', '']