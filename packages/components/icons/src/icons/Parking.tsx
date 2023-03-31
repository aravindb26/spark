import { IconProps } from '../Types'

export const Parking = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6333 5.19995C17.8358 5.19995 18 5.35914 18 5.55551V15.5111C18 15.7074 17.8358 15.8666 17.6333 15.8666H14.4643V20.819C14.4643 21.006 14.3253 21.1616 14.142 21.1938L14.0714 21.2H10.9286C10.7116 21.2 10.5357 21.0294 10.5357 20.819V15.8666H7.36667C7.18666 15.8666 7.03695 15.7408 7.00591 15.575L7 15.5111V5.55551C7 5.35914 7.16416 5.19995 7.36667 5.19995H17.6333ZM13.6786 15.8666H11.3214V20.438H13.6786V15.8666ZM17.2143 5.96186H7.78571V15.1047H17.2143V5.96186ZM8.96429 13.5809C9.18125 13.5809 9.35714 13.7515 9.35714 13.9619C9.35714 14.1723 9.18125 14.3428 8.96429 14.3428C8.74732 14.3428 8.57143 14.1723 8.57143 13.9619C8.57143 13.7515 8.74732 13.5809 8.96429 13.5809ZM16.0357 13.5809C16.2527 13.5809 16.4286 13.7515 16.4286 13.9619C16.4286 14.1723 16.2527 14.3428 16.0357 14.3428C15.8187 14.3428 15.6429 14.1723 15.6429 13.9619C15.6429 13.7515 15.8187 13.5809 16.0357 13.5809ZM13.154 7.48567C14.0452 7.48567 14.7837 8.25375 14.8528 9.25745L14.8571 9.39043C14.8571 10.4424 14.0946 11.2952 13.154 11.2952H11.7143V13.1927C11.7143 13.4071 11.5384 13.5809 11.3214 13.5809C11.1286 13.5809 10.9682 13.4436 10.9349 13.2625L10.9286 13.1927V7.8739C10.9286 7.81871 10.9402 7.76621 10.9612 7.71868C11.0179 7.58108 11.1422 7.48567 11.2864 7.48567H13.154ZM13.154 8.28599L11.7143 8.28567V10.4944L13.154 10.4949C13.6674 10.4949 14.0892 10.0569 14.1373 9.50963L14.1418 9.40582L14.1386 9.30368C14.099 8.73149 13.6706 8.28599 13.154 8.28599ZM16.0357 6.72376C16.2527 6.72376 16.4286 6.89432 16.4286 7.10471C16.4286 7.31511 16.2527 7.48567 16.0357 7.48567C15.8187 7.48567 15.6429 7.31511 15.6429 7.10471C15.6429 6.89432 15.8187 6.72376 16.0357 6.72376ZM8.96429 6.72376C9.18125 6.72376 9.35714 6.89432 9.35714 7.10471C9.35714 7.31511 9.18125 7.48567 8.96429 7.48567C8.74732 7.48567 8.57143 7.31511 8.57143 7.10471C8.57143 6.89432 8.74732 6.72376 8.96429 6.72376Z"/>',
    }}
  />
)

export const tags = ['parking', 'criteria', 'immobilierneuf']
