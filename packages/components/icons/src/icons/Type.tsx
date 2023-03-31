import { IconProps } from '../Types'

export const Type = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 5.19995C12.6897 5.19995 12.8474 5.31757 12.8801 5.47267L12.8864 5.53243L12.8868 7.51991C13.8475 7.64967 14.6078 8.25456 14.781 9.02375L16.7603 9.02362C19.0767 9.00552 20.9722 10.8034 21 13.0494C21 15.4645 19.011 18.2 16.8322 18.2C16.0849 18.2 15.6552 17.7987 14.934 16.7151L14.7338 16.4098L14.5455 16.1288C14.1289 15.5245 13.8632 15.2738 13.594 15.2431L13.5362 15.2398H11.502C11.1587 15.2398 10.867 15.5214 10.3303 16.3379L10.1958 16.5454C9.40942 17.7679 8.99161 18.2 8.20601 18.2C5.99671 18.2 4 15.4729 4 13.0449C4.02665 10.8872 5.78567 9.13518 7.99681 9.02854L8.16777 9.0236L10.219 9.02375C10.3923 8.25435 11.1529 7.64935 12.1139 7.5198L12.1136 5.53243C12.1136 5.34881 12.2866 5.19995 12.5 5.19995ZM16.7634 9.76361H8.17157C6.30042 9.78159 4.78704 11.2431 4.76471 13.0494C4.76471 15.108 6.48675 17.4599 8.20601 17.4599C8.58048 17.4599 8.88288 17.1676 9.44964 16.3037L9.58389 16.0964C10.3034 14.9782 10.7088 14.5418 11.3966 14.5027L11.502 14.4998H13.5362C14.2115 14.4998 14.6197 14.8763 15.2694 15.8468L15.4703 16.1524C16.1045 17.1246 16.4338 17.4599 16.8322 17.4599C18.5195 17.4599 20.2353 15.1002 20.2353 13.0538C20.2133 11.2722 18.7491 9.83317 16.9252 9.76597L16.7634 9.76361ZM17.3258 13.2294L17.3933 13.2331C17.6787 13.2654 17.9023 13.5024 17.9091 13.7999C17.9091 13.9528 17.8477 14.0995 17.7384 14.2076C17.6292 14.3157 17.481 14.3765 17.3194 14.3764C17.0028 14.3693 16.7499 14.1132 16.75 13.7999C16.75 13.5073 16.9725 13.2662 17.2592 13.2332L17.3258 13.2294ZM8.25 11.3176C8.43967 11.3176 8.59742 11.4529 8.63014 11.6312L8.63636 11.7V12.4647H9.40909C9.62247 12.4647 9.79545 12.6358 9.79545 12.847C9.79545 13.0347 9.65878 13.1908 9.47854 13.2232L9.40909 13.2294H8.63636V13.9941C8.63636 14.2052 8.46338 14.3764 8.25 14.3764C8.06033 14.3764 7.90258 14.2412 7.86986 14.0628L7.86364 13.9941V13.2294H7.09091C6.87753 13.2294 6.70455 13.0582 6.70455 12.847C6.70455 12.6593 6.84122 12.5032 7.02146 12.4708L7.09091 12.4647H7.86364V11.7C7.86364 11.4888 8.03662 11.3176 8.25 11.3176ZM16.1674 12.0823C16.4892 12.0823 16.7501 12.3405 16.75 12.6659C16.7428 12.9792 16.484 13.2294 16.1674 13.2294C15.849 13.2294 15.5909 12.974 15.5909 12.659C15.5908 12.368 15.8089 12.1264 16.0935 12.0876L16.1674 12.0823ZM18.4988 12.0823C18.8154 12.0894 19.0683 12.3455 19.0682 12.6589C19.0682 12.8102 19.0074 12.9553 18.8993 13.0623C18.7912 13.1693 18.6446 13.2294 18.4918 13.2294C18.1751 13.2294 17.9164 12.9792 17.9091 12.6589C17.9091 12.5059 17.9705 12.3593 18.0797 12.2511C18.1708 12.161 18.2889 12.1038 18.4151 12.0872L18.4988 12.0823ZM17.3258 10.9352L17.3933 10.939C17.6787 10.9713 17.9023 11.2083 17.9091 11.5057C17.9091 11.6587 17.8477 11.8054 17.7384 11.9135C17.6292 12.0216 17.481 12.0824 17.3194 12.0823C17.0028 12.0752 16.7499 11.8191 16.75 11.5057C16.75 11.2132 16.9725 10.972 17.2592 10.9391L17.3258 10.9352ZM12.5 8.26559C12.0404 8.26559 11.4617 8.44561 11.1864 9.02348H13.7364C13.515 8.54268 13.1029 8.29005 12.5 8.26559Z"/>',
    }}
  />
)

export const tags = ['type', 'criteria', 'multimedia']
