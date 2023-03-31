import { IconProps } from '../Types'

export const Calm = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.72797 7.62139C6.40296 6.47566 7.48969 5.97838 8.65666 6.29225C9.82739 6.60689 10.7439 7.6682 10.7439 8.70957V8.87993C10.7416 9.59668 10.7506 9.95199 10.9816 10.1884C11.0649 10.2735 11.1721 10.292 11.4346 10.3196C11.7511 10.3526 12.1838 10.3994 12.6863 10.7301C13.0818 10.9897 14.2855 11.7001 15.5277 12.4308L15.9008 12.6502C17.8402 13.7905 18.7064 14.3032 18.8594 14.429C18.9442 14.4981 18.9952 14.6017 18.9997 14.7122C19.0042 14.8235 18.9607 14.9294 18.8819 15.0061C18.4214 15.4497 17.0182 16.8003 14.763 16.9162C14.0618 16.9538 13.2728 16.9683 12.5026 16.9699L11.0904 18.4356H11.8478C12.0541 18.4356 12.2213 18.606 12.2213 18.8178C12.2213 19.0288 12.0541 19.2 11.8478 19.2H6.92345C6.71645 19.2 6.54921 19.0288 6.54921 18.8178C6.54921 18.606 6.71645 18.4356 6.92345 18.4356H7.77993L9.2934 16.867C8.29667 16.6936 5.62223 15.4827 5.62223 12.5934V9.85453C5.28976 9.6709 4.72673 9.37867 4.4206 9.22103L4.2912 9.15456C4.23946 9.12806 4.20886 9.1125 4.20701 9.11169C4.08101 9.04722 4.00151 8.91523 4.00001 8.7725C3.99926 8.62822 4.07726 8.49623 4.20176 8.43023L5.72797 7.62139ZM10.2811 16.9315L8.83066 18.4356H10.0396L11.4586 16.9645C11.0326 16.9576 10.6396 16.9461 10.2811 16.9315ZM8.46691 7.03203C7.95993 6.89543 7.0067 6.85322 6.32121 8.09641C6.28596 8.16164 6.23271 8.21459 6.16746 8.24913L5.19398 8.76482C5.56823 8.95974 5.99797 9.18766 6.18396 9.29893C6.29946 9.36723 6.36921 9.49309 6.36921 9.62892V12.5934C6.36921 15.2747 9.08865 16.0935 9.49964 16.1242C9.91813 16.1557 10.5039 16.1795 11.1586 16.1933C10.3719 15.8679 9.71939 15.2885 9.2124 14.4543C8.81491 13.7997 8.62366 12.7169 9.0939 11.7784C9.2964 11.3732 9.67739 10.9112 10.3629 10.6196C9.99763 10.1646 9.99463 9.59131 9.99613 8.8784L9.99688 8.70957C9.99688 8.01123 9.31065 7.25841 8.46691 7.03203ZM16.0425 13.614C15.9188 14.1574 15.618 14.8181 15.15 15.3645C14.8463 15.719 14.5013 15.9868 14.1293 16.1779C14.334 16.171 14.535 16.1633 14.7255 16.1534C16.3125 16.072 17.4037 15.3077 18.009 14.7828C17.5582 14.5081 16.788 14.0538 16.0425 13.614ZM11.5928 11.1108C10.6944 11.1775 10.0591 11.5275 9.75839 12.1268C9.42314 12.7967 9.56939 13.5941 9.84763 14.0515C9.97363 14.2587 10.1124 14.4405 10.2571 14.6086V13.8972C10.2571 13.6854 10.4244 13.515 10.6314 13.515C10.8376 13.515 11.0049 13.6854 11.0049 13.8972V15.2586C11.1796 15.3683 11.3649 15.4589 11.5606 15.5302V15.1128C11.5606 14.901 11.7278 14.7306 11.9348 14.7306C12.1411 14.7306 12.3083 14.901 12.3083 15.1128V15.7083C12.4681 15.7275 12.6323 15.7382 12.8033 15.7382C13.6561 15.7382 14.2448 15.2601 14.5883 14.8588C15.1073 14.254 15.3248 13.5657 15.357 13.2111C14.0378 12.4361 12.7141 11.6572 12.2828 11.3732C12.0263 11.2052 11.8036 11.1438 11.5928 11.1108ZM7.27077 8.23877C7.47701 8.23877 7.64426 8.4099 7.64426 8.62093C7.64426 8.83197 7.47701 9.0031 7.27077 9.0031C7.06452 9.0031 6.89652 8.83197 6.89652 8.62093C6.89652 8.4099 7.06452 8.23877 7.27077 8.23877Z"/>',
    }}
  />
)

export const tags = ['calm', 'criteria', 'location']
