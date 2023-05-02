import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const BankFill = React.forwardRef(
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
          '<path d="M17.8086 10.0488C17.5207 10.0488 17.2583 10.1463 17.055 10.3415 16.8603 10.5366 16.7587 10.7724 16.7587 11.0488V17.3252C16.7587 17.6098 16.8518 17.8537 17.055 18.0569 17.2583 18.252 17.5123 18.3496 17.8086 18.3496 18.105 18.3496 18.359 18.252 18.5622 18.0569 18.757 17.8618 18.8586 17.626 18.8586 17.3496V11.0732C18.8586 10.7886 18.7655 10.5447 18.5622 10.3415 18.359 10.1463 18.105 10.0488 17.8086 10.0488ZM20.84 8.45528C21.1533 8.45528 21.4242 8.34959 21.6528 8.13821 21.8815 7.92683 21.9915 7.65854 21.9915 7.34959 21.9915 7.12195 21.9407 6.91057 21.8307 6.71545 21.7206 6.52032 21.5597 6.36585 21.3649 6.25203L12.9568 2.21138C12.6605 2.07317 12.3387 2 12 2 11.6613 2 11.348 2.06504 11.0432 2.20325L2.68586 6.26829C2.68586 6.26829 2.68586 6.26829 2.69433 6.26829L2.78747 6.49593 2.66892 6.27642C2.44877 6.36585 2.27942 6.51219 2.16088 6.71545 2.0508 6.91057 2 7.12195 2 7.34959 2 7.65854 2.11008 7.92683 2.3387 8.13821 2.55885 8.34959 2.83827 8.45528 3.15157 8.45528H20.84ZM20.9754 19.9512H3.04996C2.76207 19.9512 2.49958 20.0488 2.30483 20.2439 2.10161 20.439 2.00847 20.6911 2.00847 20.9756 2.00847 21.2602 2.10161 21.5041 2.28789 21.6992 2.48264 21.9024 2.73666 22 3.03302 22H20.95C21.2379 22 21.5004 21.9024 21.7036 21.7073 21.9069 21.5122 22 21.2602 22 20.9756 22 20.6911 21.9069 20.4472 21.7206 20.252 21.5258 20.0488 21.2718 19.9512 20.9754 19.9512ZM5.44623 10.3415C5.25148 10.5366 5.14987 10.7724 5.14987 11.0488V17.3252C5.14987 17.6098 5.24301 17.8618 5.44623 18.0569 5.64945 18.252 5.90347 18.3496 6.19136 18.3496 6.47925 18.3496 6.74174 18.252 6.93649 18.0569 7.13124 17.8618 7.23285 17.626 7.23285 17.3496V11.0732C7.23285 10.7886 7.13971 10.5366 6.93649 10.3415 6.73328 10.1463 6.47925 10.0488 6.19136 10.0488 5.90347 10.0488 5.64098 10.1463 5.44623 10.3415ZM12 10.0488C11.7121 10.0488 11.4496 10.1463 11.2549 10.3415 11.0601 10.5366 10.9585 10.7724 10.9585 11.0488V17.3252C10.9585 17.6098 11.0517 17.8618 11.2549 18.0569 11.4581 18.252 11.7121 18.3496 12 18.3496 12.2879 18.3496 12.5504 18.252 12.7536 18.0569 12.9483 17.8618 13.05 17.626 13.05 17.3496V11.0732C13.05 10.7886 12.9568 10.5447 12.7536 10.3415 12.5504 10.1463 12.2964 10.0488 12 10.0488Z"/>',
      }}
    />
  )
)

BankFill.displayName = 'BankFill'

export const tags = ['bank-fill', 'account']
