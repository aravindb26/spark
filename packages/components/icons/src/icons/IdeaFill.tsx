import { IconProps } from '../Types'

export const IdeaFill = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="M13.6764 21.9995H10.3403C9.93501 21.9995 9.54586 21.8392 9.25606 21.5531C9.1096 21.4127 8.99217 21.2443 8.91057 21.0578C8.82897 20.8713 8.7848 20.6702 8.78066 20.4663V18.5286C7.92131 17.9749 7.21518 17.2098 6.72847 16.3051C6.24176 15.4004 5.99038 14.3857 5.99788 13.3561C6.00538 12.3265 6.27155 11.3157 6.77139 10.4183C7.27122 9.52095 7.98837 8.76644 8.85569 8.22548C9.77195 7.66146 10.8189 7.35059 11.8916 7.32405C12.9652 7.29731 14.0259 7.56515 14.9608 8.09909C15.8972 8.63094 16.6772 9.40425 17.221 10.34C17.7689 11.2732 18.057 12.3385 18.0551 13.4234C18.0466 14.4331 17.7881 15.4247 17.3029 16.3076C16.8178 17.1905 16.1216 17.9367 15.2777 18.4781V20.4242C15.2691 20.8458 15.0986 21.2476 14.8023 21.5446C14.654 21.6922 14.478 21.8084 14.2847 21.8865C14.0914 21.9646 13.8846 22.003 13.6764 21.9995ZM20.9992 10.5843H18.8474C18.582 10.5843 18.3274 10.4779 18.1397 10.2883C17.952 10.0987 17.8466 9.8415 17.8466 9.57338C17.8466 9.30527 17.952 9.04814 18.1397 8.85856C18.3274 8.66897 18.582 8.56248 18.8474 8.56248H20.9992C21.2646 8.56248 21.5192 8.66897 21.7069 8.85856C21.8946 9.04814 22 9.30527 22 9.57338C22 9.8415 21.8946 10.0987 21.7069 10.2883C21.5192 10.4779 21.2646 10.5843 20.9992 10.5843ZM5.1526 10.5843H3.00084C2.73541 10.5843 2.4808 10.4779 2.29311 10.2883C2.10542 10.0987 2 9.8415 2 9.57338C2 9.30527 2.10542 9.04814 2.29311 8.85856C2.4808 8.66897 2.73541 8.56248 3.00084 8.56248H5.1526C5.41804 8.56248 5.67264 8.66897 5.86034 8.85856C6.04803 9.04814 6.15345 9.30527 6.15345 9.57338C6.15345 9.8415 6.04803 10.0987 5.86034 10.2883C5.67264 10.4779 5.41804 10.5843 5.1526 10.5843ZM7.79651 7.64419C7.65824 7.64638 7.52098 7.61986 7.39329 7.56624C7.2656 7.51262 7.1502 7.43304 7.05421 7.33249L5.53627 5.78235C5.44373 5.68776 5.37051 5.57572 5.32084 5.45255C5.27118 5.32939 5.24605 5.19753 5.24683 5.06454C5.2476 4.93155 5.27428 4.80003 5.32538 4.67746C5.37647 4.55489 5.45098 4.44371 5.54462 4.35023C5.63827 4.25674 5.74925 4.18279 5.87118 4.13262C5.99311 4.08245 6.1236 4.05702 6.25526 4.05781C6.38692 4.05859 6.51713 4.08558 6.63847 4.1372C6.75981 4.18881 6.86993 4.26402 6.96248 4.35861L8.48042 5.90874C8.60396 6.05295 8.68495 6.22925 8.71423 6.41764C8.74351 6.60603 8.71986 6.79895 8.64602 6.97445C8.57217 7.14996 8.4511 7.30103 8.2965 7.41049C8.1419 7.51994 7.95999 7.5834 7.77147 7.59364L7.79651 7.64419ZM16.2285 7.64419C15.9632 7.64303 15.7088 7.53724 15.5196 7.34935C15.4263 7.25543 15.3523 7.14382 15.3018 7.02094C15.2512 6.89806 15.2252 6.76629 15.2252 6.63324C15.2252 6.50018 15.2512 6.36847 15.3018 6.24559C15.3523 6.12271 15.4263 6.01109 15.5196 5.91717L17.0375 4.36704C17.1283 4.2653 17.2385 4.18323 17.3616 4.12583C17.4847 4.06844 17.6181 4.03689 17.7536 4.03313C17.8891 4.02936 18.024 4.05346 18.15 4.10393C18.276 4.1544 18.3906 4.23024 18.4867 4.32678C18.5829 4.42333 18.6586 4.53858 18.7093 4.66558C18.76 4.79258 18.7847 4.92866 18.7817 5.06557C18.7788 5.20248 18.7483 5.33735 18.6922 5.46201C18.6361 5.58668 18.5556 5.69853 18.4554 5.79079L16.9291 7.33249C16.8392 7.42946 16.7308 7.50707 16.6104 7.56063C16.49 7.6142 16.3601 7.64262 16.2285 7.64419ZM12.0083 6.1952C11.7429 6.1952 11.4884 6.08866 11.3007 5.89908C11.113 5.70949 11.0075 5.45236 11.0075 5.18425V3.01071C11.0075 2.74259 11.113 2.48547 11.3007 2.29588C11.4884 2.10629 11.7429 1.99976 12.0083 1.99976C12.2738 1.99976 12.5283 2.10629 12.716 2.29588C12.9037 2.48547 13.0092 2.74259 13.0092 3.01071V5.18425C13.0092 5.31772 12.983 5.44987 12.9322 5.57308C12.8814 5.69628 12.8069 5.80807 12.7131 5.90206C12.6193 5.99604 12.5079 6.07033 12.3856 6.12064C12.2632 6.17095 12.1321 6.19631 12 6.1952H12.0083Z"/>',
    }}
  />
)

export const tags = ['idea-fill', 'security']