import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Parking = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1865 0.317908C11.646 -0.105969 12.354 -0.105969 12.8136 0.317908L23.0843 9.79088C23.3756 10.061 23.6074 10.3887 23.765 10.7533C23.9221 11.1165 24.0021 11.5083 24 11.904V21.1385C24 21.8974 23.6986 22.6252 23.1619 23.1619C22.6253 23.6985 21.8974 24 21.1385 24H2.86158C2.10265 24 1.3748 23.6985 0.838163 23.1619C0.301521 22.6252 3.79818e-05 21.8974 3.79818e-05 21.1385V11.9038C-0.00200026 11.5082 0.0780168 11.1164 0.235055 10.7533C0.392705 10.3887 0.624524 10.061 0.915758 9.79089L0.91815 9.78868L11.1865 0.317908ZM2.5477 11.5506L2.54688 11.5514C2.50029 11.5948 2.46319 11.6474 2.43791 11.7059C2.41249 11.7647 2.39958 11.8281 2.40001 11.8922L2.40007 11.9003L2.40004 21.1385C2.40004 21.2609 2.44866 21.3783 2.53522 21.4648C2.62178 21.5514 2.73917 21.6 2.86158 21.6H5.92281L5.92281 13.9384C5.92281 13.2757 6.46007 12.7384 7.12281 12.7384L16.8151 12.7384C17.1334 12.7384 17.4386 12.8649 17.6637 13.0899C17.8887 13.3149 18.0151 13.6202 18.0151 13.9384V21.6H21.1385C21.2609 21.6 21.3783 21.5514 21.4649 21.4648C21.5514 21.3783 21.6 21.2609 21.6 21.1385V11.8922C21.6005 11.8281 21.5876 11.7647 21.5622 11.7059C21.5369 11.6474 21.4997 11.5947 21.4531 11.5513L12 2.83248L2.5477 11.5506ZM15.6151 21.6V15.1384L8.32281 15.1384L8.32281 21.6H15.6151ZM16.8151 12.2307L7.12281 12.2307C6.46007 12.2307 5.92281 11.6935 5.92281 11.0307C5.92281 10.368 6.46007 9.83074 7.12281 9.83074L16.8151 9.83073C17.4779 9.83073 18.0151 10.368 18.0151 11.0307C18.0151 11.6935 17.4779 12.2307 16.8151 12.2307Z"/>',
      }}
    />
  )
)

Parking.displayName = 'Parking'

export const tags = ['Parking', '']
