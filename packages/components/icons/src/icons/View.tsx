import { IconProps } from '../Types'

export const View = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.855 19.4404C16.843 18.8614 16.855 17.6696 16.9225 16.4524C16.942 16.4066 16.9532 16.3571 16.9532 16.3039C16.9532 16.2746 16.9428 16.2491 16.9368 16.2221C17.0163 14.9366 17.1603 13.6849 17.407 13.1674H18.2455L18.25 19.4396L16.855 19.4404ZM4.75675 13.1674H5.59225C5.842 13.6909 5.98675 14.9651 6.0655 16.2664C6.064 16.2791 6.058 16.2904 6.058 16.3039C6.058 16.3309 6.06775 16.3534 6.073 16.3781C6.145 17.6254 6.157 18.8599 6.14425 19.4486L4.76125 19.4494L4.75675 13.1674ZM6.96175 5.9584C7.453 9.0604 6.37525 11.8429 5.68 12.4174H4.756L4.75225 5.9599L6.96175 5.9584ZM6.83725 16.6789H16.156C16.1028 17.8414 16.105 18.9139 16.1118 19.4411L6.8875 19.4479C6.89275 18.9229 6.892 17.8459 6.83725 16.6789ZM10.1785 10.1284C10.1785 9.3994 10.7718 8.80615 11.5008 8.80615C12.2298 8.80615 12.8238 9.3994 12.8238 10.1284C12.8238 10.1824 12.82 10.2356 12.8133 10.2874C12.7938 10.4471 12.877 10.6009 13.021 10.6714C13.45 10.8806 13.7162 11.3059 13.7162 11.7821C13.7162 12.3431 13.3375 12.8344 12.7945 12.9769C12.6805 13.0061 12.5875 13.0879 12.5425 13.1974C12.418 13.5011 12.172 13.7231 11.8758 13.8281V12.3349L12.6115 11.7244C12.7713 11.5916 12.793 11.3561 12.661 11.1964C12.529 11.0366 12.2927 11.0149 12.133 11.1469L11.8758 11.3606V10.8236C11.8758 10.6159 11.7085 10.4486 11.5008 10.4486C11.2938 10.4486 11.1257 10.6159 11.1257 10.8236V12.1406L10.966 12.0034C10.8093 11.8691 10.573 11.8879 10.4373 12.0446C10.303 12.2021 10.321 12.4384 10.4785 12.5734L11.1257 13.1284V13.8281C10.8302 13.7231 10.5835 13.5019 10.4598 13.1981C10.4155 13.0879 10.3218 13.0061 10.2078 12.9769C9.66475 12.8344 9.286 12.3431 9.286 11.7821C9.286 11.3059 9.55225 10.8806 9.9805 10.6714C10.1245 10.6016 10.2078 10.4486 10.189 10.2896C10.183 10.2371 10.1785 10.1824 10.1785 10.1284ZM16.1988 15.9289H11.8758V14.5969C12.4225 14.4851 12.8965 14.1476 13.159 13.6474C13.9367 13.3654 14.4662 12.6229 14.4662 11.7821C14.4662 11.1034 14.1295 10.4884 13.5738 10.1239C13.5715 8.9839 12.6423 8.05615 11.5008 8.05615C10.3593 8.05615 9.43075 8.9839 9.4285 10.1239C8.872 10.4884 8.536 11.1034 8.536 11.7821C8.536 12.6229 9.06475 13.3654 9.84325 13.6474C10.1057 14.1476 10.5797 14.4851 11.1257 14.5969V15.9289H6.79375C6.71125 14.7221 6.55975 13.5364 6.28375 12.8824C7.2535 11.8841 8.152 8.9299 7.7215 5.95765L15.2785 5.95315C14.8458 8.9254 15.7443 11.8819 16.7148 12.8809C16.4335 13.5386 16.2805 14.7236 16.1988 15.9289ZM18.2455 12.4174H17.3193C16.6233 11.8429 15.5448 9.05665 16.0398 5.9524L18.2418 5.9509L18.2455 12.4174ZM18.9955 12.8089C18.9955 12.8029 18.9993 12.7984 18.9993 12.7924C18.9993 12.7864 18.9955 12.7811 18.9955 12.7751L18.991 5.5759C18.991 5.47615 18.9513 5.3809 18.8815 5.3104C18.811 5.2399 18.715 5.2009 18.616 5.2009L7.35775 5.20765C7.30975 5.1979 7.2595 5.19715 7.20925 5.2069C7.2085 5.2069 7.20775 5.20765 7.207 5.20765L4.3765 5.2099C4.27675 5.2099 4.1815 5.24965 4.111 5.32015C4.04125 5.39065 4.0015 5.48665 4.0015 5.5849L4.00675 12.7616C4.00525 12.7714 4 12.7811 4 12.7924C4 12.8029 4.00525 12.8126 4.00675 12.8239L4.01125 19.8244C4.01125 20.0314 4.17925 20.1994 4.38625 20.1994L18.6258 20.1896C18.8328 20.1896 19 20.0209 19 19.8146L18.9955 12.8089Z"/>',
    }}
  />
)

export const tags = ['view', 'criteria', 'location']
