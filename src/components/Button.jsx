import classNames from 'classnames'

export function Button({ children }) {
  return <button>{children}</button>
}

export function ButtonLink({ icon, linkType, telNumber, mailto, children }) {
  return (
    <a
      className={classNames(
        'py-1.5 px-3 font-semibold rounded-button text-white',
        {
          'bg-blue-700': linkType === 'mail',
          'bg-orange-500': linkType === 'tel',
        },
      )}
      href={
        linkType === 'tel'
          ? `tel:+${telNumber}`
          : linkType === 'mail'
            ? `mailto:${mailto}}`
            : 'Not proper type'
      }
    >
      {icon} {children}
    </a>
  )
}
