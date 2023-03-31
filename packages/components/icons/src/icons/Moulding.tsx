import { IconProps } from '../Types'

export const Moulding = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8023 9.24058C17.7219 9.24058 17.6424 9.20758 17.5652 9.14158C17.4015 9.00432 17.1528 9.01857 17.0092 9.17833C16.9868 9.20233 16.976 9.23158 16.9613 9.25933C16.9227 9.31858 16.8941 9.38533 16.8941 9.46108L16.8949 11.6864L15.7983 12.3104C15.7952 12.3119 15.7921 12.3104 15.7898 12.3119L9.81652 15.7094L9.12691 16.1017L9.12536 14.9031C9.82655 14.9676 10.3926 14.4471 10.4196 13.6896L10.4227 12.9006L18.2085 8.45007L18.2077 8.77332C18.1969 9.06582 18.0447 9.24058 17.8023 9.24058ZM15.6732 13.8449L9.80957 17.1899L7.79865 18.3367C7.77471 18.3022 7.75154 18.2512 7.72915 18.1979C7.7222 18.1814 7.7137 18.1724 7.70753 18.1537C7.6805 18.0757 7.6581 17.9804 7.65038 17.8649C7.62799 17.5634 7.7222 17.2702 7.90368 17.0819C7.94847 17.0347 7.99557 16.9979 8.04345 16.9717C8.04809 16.9694 8.05195 16.9694 8.05658 16.9672C8.09982 16.9447 8.14384 16.9289 8.18786 16.9252C8.20022 16.9237 8.21334 16.9289 8.22493 16.9297C8.26122 16.9304 8.29675 16.9319 8.33227 16.9447C8.35544 16.9537 8.3786 16.9732 8.40177 16.9874C8.41722 16.9979 8.43266 17.0062 8.44811 17.0174C8.52378 17.0999 8.62418 17.1554 8.73461 17.1554C8.80256 17.1554 8.87052 17.1374 8.93385 17.1022L15.555 13.3356C15.5743 13.5126 15.6145 13.6851 15.6732 13.8449ZM4.78923 16.5314L4.81703 10.1503L9.63504 12.8999L9.63195 13.6746C9.62114 13.9671 9.46901 14.1419 9.22652 14.1419C9.14621 14.1419 9.06667 14.1081 8.98867 14.0429C8.87207 13.9439 8.70681 13.9206 8.56703 13.9829C8.42571 14.0459 8.33536 14.1824 8.33613 14.3324L8.33922 16.1609C8.23651 16.1519 8.13458 16.1594 8.03418 16.1774C8.02569 16.1782 8.01797 16.1819 8.01025 16.1834C7.9029 16.2044 7.79942 16.2419 7.6998 16.2922C7.67432 16.3049 7.65038 16.3169 7.6249 16.3312C7.5191 16.3934 7.41716 16.4654 7.32604 16.5599C7.24573 16.6439 7.17623 16.7369 7.11522 16.8367C7.09514 16.8697 7.08201 16.9079 7.06348 16.9424C7.02796 17.0107 6.99243 17.0797 6.96618 17.1539C6.94996 17.1982 6.94224 17.2462 6.92911 17.2919C6.91057 17.3609 6.89204 17.4299 6.88123 17.5019C6.87428 17.5522 6.87351 17.6039 6.87042 17.6557C6.86656 17.7089 6.85806 17.7607 6.85883 17.8154L4.78923 16.5314ZM13.002 5.02627L17.8285 7.77956L10.0297 12.2369L5.38694 9.58783L5.20315 9.48283L13.002 5.02627ZM19 7.77956C19 7.77806 18.9985 7.77656 18.9985 7.77506C18.9977 7.71356 18.9799 7.65881 18.9529 7.60706C18.9444 7.59206 18.9344 7.58006 18.9243 7.56581C18.8973 7.52831 18.8656 7.49755 18.8278 7.4713C18.8185 7.4653 18.8154 7.4548 18.8054 7.44955L13.2012 4.25226C13.0785 4.18251 12.9248 4.18251 12.802 4.25226L4.23167 9.15058H4.23013C4.23013 9.15058 4.23013 9.15133 4.22936 9.15133L4.22549 9.15358C4.19383 9.17158 4.1753 9.20233 4.14981 9.22783C4.12819 9.25033 4.10039 9.26608 4.08495 9.29158C4.06101 9.33283 4.05406 9.38083 4.04711 9.42733C4.04402 9.44608 4.03166 9.46258 4.03166 9.48133L4 16.7392C4 16.8704 4.06873 16.9927 4.18225 17.0632L7.52914 19.1392C7.59401 19.1797 7.66737 19.2 7.74151 19.2C7.81101 19.2 7.87974 19.182 7.94152 19.1475L10.2096 17.8492C10.2104 17.8492 10.2104 17.8492 10.2104 17.8484L16.3836 14.3271C16.4748 14.2746 16.5412 14.1891 16.5659 14.0886C16.5914 13.9881 16.5744 13.8816 16.518 13.7946C16.3968 13.6056 16.3296 13.3559 16.3296 13.0904C16.3296 13.0191 16.345 12.9501 16.3543 12.8811L17.4887 12.2354C17.6092 12.1664 17.6833 12.0411 17.6833 11.9054L17.6826 9.98384C17.7227 9.98834 17.7613 10.0063 17.8023 10.0063C18.4787 10.0063 18.9699 9.50983 18.9954 8.78757L19 7.78106V7.78031V7.77956Z"/>',
    }}
  />
)

export const tags = ['moulding', 'criteria', 'location']
