import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DumpTruck = React.forwardRef(
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
          '<path d="M16.267 18.2857C15.3082 18.2857 14.473 17.604 14.2815 16.6645L14.264 16.5792H9.73706L9.71957 16.6645C9.52802 17.604 8.69311 18.2857 7.73426 18.2857C6.77542 18.2857 5.9403 17.604 5.74896 16.6645L5.73146 16.5792H4.39932C4.17918 16.5792 4 16.4 4 16.1799V14.6317C4 14.4115 4.17918 14.2323 4.39932 14.2323H13.3873V9.85939C13.3873 9.4477 13.7222 9.11279 14.1339 9.11279H17.5469C17.7971 9.11279 18.0294 9.23716 18.1681 9.44514L19.8746 12.0053C19.9567 12.1284 20 12.2715 20 12.4194V15.8322C20 16.2439 19.6651 16.5788 19.2534 16.5788H18.2698L18.2523 16.6641C18.0608 17.6035 17.2259 18.2853 16.267 18.2853V18.2857ZM16.267 14.8727C15.5025 14.8727 14.8805 15.4947 14.8805 16.2592C14.8805 17.0238 15.5025 17.6458 16.267 17.6458C17.0315 17.6458 17.6536 17.0238 17.6536 16.2592C17.6536 15.4947 17.0315 14.8727 16.267 14.8727ZM7.73448 14.8727C6.96996 14.8727 6.34794 15.4947 6.34794 16.2592C6.34794 17.0238 6.96996 17.6458 7.73448 17.6458C8.49899 17.6458 9.12102 17.0238 9.12102 16.2592C9.12102 15.4947 8.49899 14.8727 7.73448 14.8727ZM19.3601 15.9393V14.4461H18.5068V13.8061H19.3601V12.7398L14.0272 12.7393V15.9391H14.2642L14.2817 15.8537C14.4733 14.9143 15.3082 14.2325 16.2672 14.2325C17.2263 14.2325 18.0612 14.9143 18.2525 15.8537L18.27 15.9391H19.3603L19.3601 15.9393ZM5.73168 15.9393L5.74896 15.8539C5.80719 15.5679 5.93326 15.2953 6.12375 15.0438L6.25323 14.8727H4.64015V15.9393H5.73168ZM13.3873 15.9393V14.8727H9.21573L9.34521 15.0438C9.5357 15.2955 9.66176 15.5679 9.72 15.8539L9.73728 15.9393H13.3873ZM19.1683 12.1L17.6041 9.75337H14.0272V12.0998L19.1683 12.1003V12.1Z"/><path d="M5.38816 14.8099C5.24182 14.8099 5.09698 14.7687 4.96964 14.6908 4.74736 14.555 4.60807 14.328 4.58738 14.0684L4.30516 10.5361C4.26335 10.0124 4.56135 9.52523 5.04664 9.32386L13.0052 6.02304C13.0348 6.01067 13.0659 6.0032 13.0979 6.00085 13.1054 6.00021 13.1129 6 13.1203 6 13.2419 6 13.3505 6.07274 13.3972 6.18516 13.4606 6.3381 13.3878 6.51387 13.2351 6.57723L12.0188 7.08171 12.3349 11.149C12.3729 11.6392 12.0934 12.0952 11.6391 12.2836L11.1839 12.4724 12.4104 14.3111C12.4674 14.3969 12.4465 14.5181 12.3582 14.6128 12.3379 14.6343 12.3149 14.6539 12.2895 14.6708 12.2289 14.7107 12.1604 14.732 12.0958 14.732 12.0158 14.732 11.9482 14.6994 11.9104 14.6426L10.6192 12.7068 10.2502 12.86 11.2285 14.3207C11.2771 14.3937 11.2477 14.5033 11.1551 14.5938 11.1346 14.6138 11.1116 14.6324 11.0866 14.6488 11.0171 14.6945 10.9422 14.7192 10.8746 14.7192 10.807 14.7192 10.757 14.6953 10.728 14.652L9.68493 13.0944 5.69831 14.748C5.61768 14.7815 5.53342 14.8015 5.44767 14.8079 5.42805 14.8094 5.40821 14.8101 5.38858 14.8101L5.38816 14.8099ZM5.27659 9.87805C5.03235 9.97937 4.88239 10.2247 4.90329 10.4881L5.18551 14.0206C5.19084 14.0865 5.22625 14.1443 5.28278 14.1791 5.3152 14.1989 5.35189 14.2094 5.3888 14.2094 5.3937 14.2094 5.39861 14.2094 5.40351 14.2087 5.42527 14.207 5.44703 14.2019 5.46772 14.1932L11.4087 11.729C11.6225 11.6402 11.7541 11.4256 11.7362 11.195L11.4354 7.3234 5.27659 9.87805ZM6.21219 13.6759C6.05689 13.6759 5.92549 13.5545 5.91312 13.3999L5.64008 9.98257C5.63368 9.90279 5.65885 9.82515 5.71069 9.76414 5.76273 9.70313 5.83526 9.66601 5.91525 9.65961 5.92315 9.65897 5.93061 9.65876 5.93808 9.65876 6.09401 9.65876 6.22562 9.77992 6.238 9.93479L6.51104 13.3523C6.52149 13.4824 6.44747 13.6034 6.32695 13.6533 6.29794 13.6652 6.26743 13.6727 6.23586 13.675 6.22669 13.6757 6.21923 13.6759 6.21197 13.6759H6.21219ZM7.6849 13.065C7.52961 13.065 7.39821 12.9436 7.38584 12.7889L7.11279 9.37143C7.1064 9.29165 7.13157 9.214 7.1834 9.15299 7.23545 9.09199 7.30798 9.05487 7.38797 9.04847 7.39586 9.04783 7.40333 9.04762 7.41079 9.04762 7.56673 9.04762 7.69834 9.16878 7.71071 9.32364L7.98375 12.7411C7.99421 12.8713 7.92019 12.9922 7.79966 13.0421 7.77065 13.0541 7.74015 13.0615 7.70858 13.0639 7.69941 13.0645 7.69194 13.0647 7.68469 13.0647L7.6849 13.065ZM9.15762 12.454C9.00233 12.454 8.87092 12.3327 8.85855 12.178L8.58551 8.7605C8.57911 8.6805 8.60428 8.60307 8.65633 8.54185 8.70838 8.48063 8.78091 8.44372 8.8609 8.43754 8.86879 8.4369 8.87626 8.43669 8.88372 8.43669 9.03966 8.43669 9.17127 8.55785 9.18364 8.71271L9.45668 12.1302C9.46714 12.2603 9.39312 12.3813 9.27259 12.4312 9.2438 12.4431 9.21308 12.4506 9.18151 12.4532 9.17234 12.4538 9.16487 12.454 9.15762 12.454ZM10.6303 11.8431C10.475 11.8431 10.3436 11.7217 10.3315 11.5671L10.0584 8.14956C10.052 8.06978 10.077 7.99214 10.129 7.93113 10.1811 7.87012 10.2536 7.83301 10.3336 7.82661 10.3415 7.82597 10.349 7.82575 10.3564 7.82575 10.5124 7.82575 10.644 7.94692 10.6564 8.10178L10.9294 11.5193C10.9396 11.6494 10.8656 11.7706 10.7453 11.8205 10.7163 11.8324 10.6856 11.8399 10.6542 11.8422 10.6451 11.8429 10.6376 11.8431 10.6303 11.8431ZM7.73443 16.7495C8.00504 16.7495 8.22441 16.5301 8.22441 16.2595 8.22441 15.9889 8.00504 15.7695 7.73443 15.7695 7.46382 15.7695 7.24445 15.9889 7.24445 16.2595 7.24445 16.5301 7.46382 16.7495 7.73443 16.7495ZM16.267 16.7495C16.5376 16.7495 16.757 16.5301 16.757 16.2595 16.757 15.9889 16.5376 15.7695 16.267 15.7695 15.9964 15.7695 15.777 15.9889 15.777 16.2595 15.777 16.5301 15.9964 16.7495 16.267 16.7495Z"/>',
      }}
    />
  )
)

DumpTruck.displayName = 'DumpTruck'

export const tags = ['DumpTruck', '']