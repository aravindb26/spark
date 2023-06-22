import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ClockArrow = React.forwardRef(
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
          '<path d="M17.5418 3.68803C19.1923 4.78901 20.4785 6.35406 21.2378 8.1851V8.21847C21.9959 10.0478 22.1941 12.0604 21.8072 14.0021C21.4203 15.9438 20.4657 17.7275 19.0641 19.1279C17.6611 20.5043 15.8839 21.4386 13.9534 21.8146C12.0229 22.1907 10.0242 21.9919 8.20597 21.243C6.3877 20.4941 4.83001 19.2282 3.72662 17.6025C2.62324 15.9769 2.0228 14.0634 2 12.0998C2.00124 10.223 2.48486 8.37789 3.40458 6.74105L3.2123 6.78282C2.96174 6.84481 2.69677 6.80487 2.47569 6.67181C2.25462 6.53876 2.09556 6.32346 2.03348 6.0733C1.97139 5.82315 2.01134 5.55862 2.14462 5.3379C2.27789 5.11719 2.49354 4.95839 2.74411 4.89641L5.52821 4.19524H5.6369C5.70073 4.18694 5.76535 4.18694 5.82918 4.19524H6.00477L6.18868 4.26203H6.26395C6.29342 4.28221 6.32135 4.30455 6.34754 4.32882C6.37937 4.34638 6.41008 4.3659 6.43949 4.38726C6.45133 4.41279 6.46842 4.4355 6.48965 4.454C6.52871 4.50488 6.56499 4.55782 6.59834 4.61259C6.6296 4.66935 6.65754 4.7279 6.68198 4.78789V4.85468L7.37588 7.64253C7.43796 7.89268 7.39801 8.15721 7.26473 8.37793C7.13146 8.59864 6.91581 8.75749 6.66524 8.81947C6.41468 8.88146 6.14971 8.84152 5.92864 8.70846C5.70756 8.57541 5.54845 8.36011 5.48637 8.10995L5.27735 7.27526C4.39216 8.70793 3.92324 10.3581 3.92293 12.0414C3.92037 13.6376 4.39487 15.1982 5.28572 16.5237C6.17232 17.8513 7.43394 18.8862 8.91053 19.4969C10.3871 20.1077 12.0122 20.2669 13.5795 19.9542C14.748 19.7164 15.8492 19.2234 16.8044 18.5106C17.7596 17.7979 18.545 16.883 19.1043 15.8315C19.6637 14.7801 19.9831 13.6181 20.0397 12.4289C20.0964 11.2397 19.8888 10.0527 19.4319 8.953C18.8242 7.47387 17.7901 6.20827 16.4609 5.31666C15.1317 4.42504 13.5672 3.94758 11.9659 3.94485C11.7231 3.92237 11.4975 3.81019 11.3333 3.63031C11.1691 3.45043 11.078 3.21584 11.078 2.97245C11.078 2.72906 11.1691 2.49442 11.3333 2.31454C11.4975 2.13466 11.7231 2.02248 11.9659 2C13.9508 1.99958 15.8913 2.58705 17.5418 3.68803Z"/><path d="M15.1595 15.3885L11.531 13.5855C11.3641 13.5065 11.2224 13.3827 11.122 13.2279C11.0216 13.0732 10.9664 12.8935 10.9625 12.7091V7.15009C10.9499 7.01482 10.9657 6.87842 11.009 6.7496C11.0522 6.62079 11.1219 6.5024 11.2135 6.402C11.3052 6.3016 11.4169 6.22141 11.5413 6.16653C11.6658 6.11166 11.8004 6.08329 11.9365 6.08329C12.0725 6.08329 12.2071 6.11166 12.3316 6.16653C12.4561 6.22141 12.5677 6.3016 12.6594 6.402C12.7511 6.5024 12.8207 6.62079 12.864 6.7496C12.9072 6.87842 12.923 7.01482 12.9105 7.15009V12.1082L15.9955 13.6523C16.2002 13.7777 16.351 13.9744 16.4188 14.2043C16.4865 14.4343 16.4665 14.6811 16.3624 14.8971C16.2584 15.1131 16.0778 15.283 15.8556 15.3738C15.6334 15.4645 15.3853 15.4698 15.1595 15.3885Z"/>',
      }}
    />
  )
)

ClockArrow.displayName = 'ClockArrow'

export const tags = ['ClockArrow', '']
