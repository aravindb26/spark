import { IconProps } from '../Types'

export const ChargesIncluded = ({
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
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33595 6.20028C10.1246 6.22217 11.7112 7.34557 12.3149 9.01758C12.897 10.6299 12.4468 12.4248 11.188 13.5779L11.0448 13.7033C10.6636 14.09 10.4304 14.5955 10.3834 15.1326C10.39 15.1558 10.3924 15.18 10.3924 15.2047C10.3924 15.2404 10.3875 15.2748 10.3782 15.3075L10.377 17.8417C10.3653 18.0375 10.2059 18.1925 10.0086 18.2H6.59297C6.38102 18.2 6.20919 18.0293 6.20919 17.8189V15.2047C6.18287 14.5986 5.90503 14.0302 5.44164 13.6347C4.1032 12.4563 3.6433 10.576 4.28828 8.91932C4.93327 7.26259 6.54727 6.17838 8.33595 6.20028ZM16.7055 6.61504C16.8181 6.61504 16.9254 6.66222 17.001 6.74495C17.1699 6.95073 21 11.6836 21 13.9396C20.9958 16.2908 19.0773 18.1958 16.7094 18.2C14.3385 18.2 12.4153 16.2937 12.411 13.9396C12.411 11.6531 16.2488 6.95073 16.41 6.74495C16.4857 6.66222 16.593 6.61504 16.7055 6.61504ZM9.62468 15.5855H6.97036L6.97675 17.4378H9.62482L9.62468 15.5855ZM16.7094 7.62904C15.4966 9.15332 13.1786 12.4534 13.1786 13.9701C13.2665 15.8407 14.8195 17.3125 16.7055 17.3125C18.5915 17.3125 20.1445 15.8407 20.2324 13.9701C20.2324 12.4229 17.8837 9.15332 16.7094 7.62904ZM19.3229 13.9891C19.5348 14.0417 19.6637 14.255 19.6107 14.4655C19.3787 15.6502 18.3317 16.5043 17.1162 16.5004H16.9243C16.7872 16.4868 16.6678 16.4015 16.6111 16.2768C16.5544 16.1521 16.5691 16.0069 16.6495 15.8958C16.7299 15.7847 16.8639 15.7246 17.001 15.7382C17.9048 15.8002 18.7056 15.164 18.8432 14.2749C18.8962 14.0645 19.1109 13.9365 19.3229 13.9891ZM8.35344 6.98429C6.89062 6.96008 5.5663 7.83992 5.03073 9.19178C4.49516 10.5436 4.86085 12.0836 5.94822 13.0555C6.48059 13.5128 6.82779 14.1407 6.93477 14.8233L7.40618 14.8235L7.40658 10.9444C7.40658 10.7339 7.5784 10.5633 7.79036 10.5633C8.0006 10.5673 8.17005 10.7356 8.17414 10.9444L8.1735 14.8235H8.4115L8.41208 10.9444C8.41208 10.7339 8.5839 10.5633 8.79586 10.5633C9.00781 10.5633 9.17964 10.7339 9.17964 10.9444L9.17959 14.8235L9.66501 14.8235C9.77325 14.1838 10.0826 13.5906 10.5536 13.1317C11.6729 12.1963 12.0901 10.6693 11.6002 9.3005C11.1103 7.93167 9.81625 7.0085 8.35344 6.98429Z"/>',
    }}
  />
)

export const tags = ['charges-included', 'criteria', 'location']