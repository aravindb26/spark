import { IconProps } from '../Types'

export const Condition = ({
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
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8 5.19995C15.4627 5.19995 16 5.71802 16 6.35709V19.0428C16 19.6819 15.4627 20.2 14.8 20.2H8.31111C7.64837 20.2 7.11111 19.6819 7.11111 19.0428V6.35709C7.11111 5.71802 7.64837 5.19995 8.31111 5.19995H14.8ZM15.2593 17.95H7.85185V19.0428C7.85185 19.2629 8.0184 19.4455 8.23662 19.4799L8.31111 19.4857H14.8C15.0536 19.4857 15.2593 19.2874 15.2593 19.0428V17.95ZM15.2593 8.1992H7.85185V17.1992H15.2593V8.1992ZM11.8158 9.06146C11.9463 9.19362 11.9608 9.39876 11.8593 9.54714L11.8158 9.59986L9.60485 11.8384C9.45801 11.9871 9.21994 11.9871 9.07309 11.8384C8.94257 11.7063 8.92807 11.5011 9.02959 11.3528L9.07309 11.3L11.284 9.06146C11.4309 8.91278 11.669 8.91278 11.8158 9.06146ZM6.38462 8.19995C6.57343 8.19995 6.73047 8.32335 6.76303 8.48608L6.76923 8.54879V10.8511C6.76923 11.0438 6.59703 11.2 6.38462 11.2C6.1958 11.2 6.03876 11.0766 6.0062 10.9138L6 10.8511V8.54879C6 8.35613 6.1722 8.19995 6.38462 8.19995ZM10.3286 8.69221C10.4659 8.83119 10.4811 9.04692 10.3744 9.20295L10.3286 9.2584L8.89723 10.7077C8.74282 10.864 8.49245 10.864 8.33804 10.7077C8.20077 10.5687 8.18552 10.353 8.29228 10.1969L8.33804 10.1415L9.76943 8.69221C9.92385 8.53586 10.1742 8.53586 10.3286 8.69221ZM14.8 5.91424H8.31111C8.05747 5.91424 7.85185 6.11251 7.85185 6.35709V7.44995H15.2593V6.35709C15.2593 6.13697 15.0927 5.95435 14.8745 5.92003L14.8 5.91424Z"/>',
    }}
  />
)

export const tags = ['condition', 'criteria', 'multimedia']
