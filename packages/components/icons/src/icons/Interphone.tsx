import { IconProps } from '../Types'

export const Interphone = ({
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
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.42725 6.19995C10.0812 6.19995 10.6243 6.6838 10.7368 7.31747H18.7183C19.4248 7.31747 20 7.90299 20 8.6238V16.8929C20 17.6137 19.4248 18.2 18.7183 18.2H6.28175C5.57525 18.2 5 17.6137 5 16.8929V8.6238C5 7.90299 5.57525 7.31747 6.28175 7.31747H6.3395C6.452 6.6838 6.995 6.19995 7.649 6.19995H9.42725ZM6.3155 8.08185H6.28175C5.9885 8.08185 5.75 8.32493 5.75 8.6238V16.8929C5.75 17.1925 5.9885 17.4356 6.28175 17.4356H18.7183C19.0115 17.4356 19.25 17.1925 19.25 16.8929V8.6238C19.25 8.32493 19.0115 8.08185 18.7183 8.08185H10.7607V15.2128C10.7607 15.9618 10.163 16.5718 9.42725 16.5718H7.649C6.91325 16.5718 6.3155 15.9618 6.3155 15.2128V8.08185ZM9.42725 6.96433H7.649C7.32725 6.96433 7.0655 7.2311 7.0655 7.55902V15.2128C7.0655 15.5399 7.32725 15.8074 7.649 15.8074H9.42725C9.749 15.8074 10.0107 15.5399 10.0107 15.2128V7.55902C10.0107 7.2311 9.749 6.96433 9.42725 6.96433ZM13.1734 14.8819C13.3804 14.8819 13.5484 15.0532 13.5484 15.2641C13.5484 15.4751 13.3804 15.6463 13.1734 15.6463H12.3282C12.1204 15.6463 11.9532 15.4751 11.9532 15.2641C11.9532 15.0532 12.1204 14.8819 12.3282 14.8819H13.1734ZM15.3187 14.8819C15.5257 14.8819 15.6937 15.0532 15.6937 15.2641C15.6937 15.4751 15.5257 15.6463 15.3187 15.6463H14.4735C14.2657 15.6463 14.0985 15.4751 14.0985 15.2641C14.0985 15.0532 14.2657 14.8819 14.4735 14.8819H15.3187ZM17.464 14.8819C17.671 14.8819 17.839 15.0532 17.839 15.2641C17.839 15.4751 17.671 15.6463 17.464 15.6463H16.6188C16.411 15.6463 16.2438 15.4751 16.2438 15.2641C16.2438 15.0532 16.411 14.8819 16.6188 14.8819H17.464ZM17.065 8.88147C17.4918 8.88147 17.839 9.23462 17.839 9.67031V13.1972C17.839 13.6321 17.4918 13.986 17.065 13.986H12.727C12.3003 13.986 11.953 13.6321 11.953 13.1972V9.67031C11.953 9.23462 12.3003 8.88147 12.727 8.88147H17.065ZM12.727 9.64585L12.703 13.1972L17.065 13.2216C17.077 13.2216 17.089 13.2102 17.089 13.1972V9.67031L12.727 9.64585Z"/>',
    }}
  />
)

export const tags = ['interphone', 'criteria', 'location']
