import { IconProps } from '../Types'

export const Parquet = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8085 19.4386L15.241 17.8723L16.6833 16.4312L18.25 17.9975V19.4386H16.8085ZM4.75 16.3788L7.81225 19.4386H4.75V16.3788ZM6.19225 5.94935L7.687 7.44291L6.24625 8.884L4.75 7.3897V5.94935H6.19225ZM18.25 9.03239L15.1645 5.94935H18.25V9.03239ZM15.577 10.3498C15.5583 10.3026 15.532 10.2569 15.493 10.2179C15.454 10.1797 15.409 10.152 15.361 10.134L13.57 8.34444L15.0355 6.88011L18.25 10.092V13.0214L15.577 10.3498ZM13.774 12.4654L15.2035 11.037L18.25 14.0811V16.9378L13.774 12.4654ZM14.104 5.94935L14.5052 6.35028L13.0398 7.81461L11.1722 5.94935H14.104ZM10.1118 5.94935L14.6733 10.5072L13.2438 11.9356L7.25275 5.94935H10.1118ZM6.7765 9.41383L8.21725 7.97273L16.1523 15.9014L14.7108 17.3425L6.7765 9.41383ZM4.75 12.4144L6.59275 14.2557L5.13925 15.708L4.75 15.3191V12.4144ZM5.9215 9.61917C5.9365 9.6439 5.94775 9.66938 5.96875 9.69036C5.98975 9.71209 6.01525 9.72258 6.03925 9.73757L10.7418 14.4356L9.2875 15.8886L4.75 11.3548V8.44935L5.9215 9.61917ZM8.87275 19.4386L5.6695 16.2379L7.123 14.7855L11.7798 19.4386H8.87275ZM12.8403 19.4386L9.81775 16.4185L11.272 14.9654L14.3868 18.0784C14.4018 18.1024 14.413 18.1279 14.4333 18.1488C14.4543 18.1706 14.4805 18.1811 14.5045 18.1961L15.748 19.4386H12.8403ZM18.625 5.19995H4.375C4.168 5.19995 4 5.36782 4 5.57465V19.8133C4 20.0201 4.168 20.188 4.375 20.188H8.6695C8.68975 20.1917 8.70925 20.2 8.7295 20.2C8.74975 20.2 8.76925 20.1917 8.7895 20.188H18.625C18.8328 20.188 19 20.0201 19 19.8133V5.57465C19 5.36782 18.8328 5.19995 18.625 5.19995Z"/>',
    }}
  />
)

export const tags = ['parquet', 'criteria', 'location']
