import { IconProps } from '../Types'

export const Job = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.1588 5.92013H18.0475C17.8174 4.73528 17.2272 3.6408 16.3568 2.77727C15.1963 1.64263 13.6357 1 11.995 1C10.3543 1 8.79366 1.64263 7.63318 2.77727C6.75281 3.6408 6.17257 4.74532 5.94248 5.92013H2.83118C1.27053 5.92013 0 7.16522 0 8.71155V20.2086C0 21.7549 1.27053 23 2.83118 23H21.1688C22.7295 23 24 21.7549 24 20.2086V8.71155C24 7.16522 22.7295 5.92013 21.1688 5.92013H21.1588ZM9.27386 4.40393C9.99416 3.69101 10.9646 3.29941 11.985 3.29941C13.0054 3.29941 13.9758 3.70105 14.6961 4.40393C15.1263 4.83569 15.4364 5.35783 15.6165 5.92013H8.34348C8.52355 5.35783 8.83368 4.82565 9.26386 4.40393H9.27386ZM2.81117 8.21953H21.1488C21.4289 8.21953 21.649 8.44044 21.649 8.71155V12.487H13.1455V11.995C13.1455 11.3624 12.6253 10.8503 11.975 10.8503C11.3247 10.8503 10.8045 11.3624 10.8045 11.995V12.487H2.31096V8.71155C2.31096 8.44044 2.53105 8.21953 2.81117 8.21953ZM21.1488 20.7006H2.81117C2.53105 20.7006 2.31096 20.4797 2.31096 20.2086V14.7864H10.8145V15.2784C10.8145 15.911 11.3347 16.4231 11.985 16.4231C12.6353 16.4231 13.1555 15.911 13.1555 15.2784V14.7864H21.659V20.2086C21.659 20.4797 21.4389 20.7006 21.1588 20.7006H21.1488Z"/>',
    }}
  />
)

export const tags = ['job', 'categories']