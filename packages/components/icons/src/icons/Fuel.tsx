import { IconProps } from '../Types'

export const Fuel = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2647 4.19995C15.1652 4.19995 16.7059 5.68264 16.7059 7.51164V7.67722C16.7059 7.46384 16.8771 7.29086 17.0882 7.29086C17.2759 7.29086 17.4321 7.42754 17.4644 7.60777L17.4706 7.67722V9.22268C17.4706 9.43606 17.2994 9.60904 17.0882 9.60904C16.9005 9.60904 16.7444 9.47237 16.712 9.29213L16.7059 9.22268L16.7071 15.0438C17.6248 14.9912 18.0996 14.7411 18.2159 14.3577L18.2329 14.2878L18.2326 8.11502L18.0636 8.15098C17.8796 8.18929 17.6978 8.09383 17.6282 7.93254L17.6075 7.8691C17.5676 7.69242 17.6671 7.51787 17.8351 7.451L17.9011 7.43118L18.5352 7.29921C18.7525 7.25399 18.9588 7.39437 18.9946 7.59669L19 7.65911V10.9735L18.9948 14.3485C18.839 15.2432 18.0386 15.7085 16.7067 15.7807L16.7064 18.9311C17.1486 19.0749 17.4706 19.5174 17.4706 20.0409C17.4706 20.681 16.9891 21.2 16.3952 21.2H7.07537C6.48146 21.2 6 20.681 6 20.0409C6 19.517 6.32237 19.0744 6.76493 18.9308L6.76471 7.51164C6.76471 5.68264 8.30537 4.19995 10.2059 4.19995H13.2647ZM16.3952 19.6545H7.07537C6.8774 19.6545 6.71691 19.8275 6.71691 20.0409C6.71691 20.2542 6.8774 20.4272 7.07537 20.4272H16.3952C16.5932 20.4272 16.7537 20.2542 16.7537 20.0409C16.7537 19.8275 16.5932 19.6545 16.3952 19.6545ZM13.2647 4.97268H10.2059C8.72771 4.97268 7.52941 6.11981 7.52941 7.53488V18.8818H15.9412V7.53488C15.9412 6.16698 14.8214 5.04945 13.4116 4.97647L13.2647 4.97268ZM14.0772 6.51813C14.262 6.51813 14.4118 6.69111 14.4118 6.9045V9.99541C14.4118 10.2088 14.262 10.3818 14.0772 10.3818H9.39338C9.20861 10.3818 9.05882 10.2088 9.05882 9.99541V6.9045C9.05882 6.69111 9.20861 6.51813 9.39338 6.51813H14.0772ZM13.6471 7.29086H9.82353V9.60904H13.6471V7.29086Z"/>',
    }}
  />
)

export const tags = ['fuel', 'criteria', 'automobile']
