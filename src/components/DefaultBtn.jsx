import classNames from 'classnames'

export default function DefaultBtn({ type, children, disabled }) {
  return (
    <button
      type={type}
      className={classNames(
        'py-3 px-8 rounded-selectBtn w-full font-semibold gap-3',
        {
          'bg-orange-500 text-white hover:bg-orange-600': type === 'submit',
          'cursor-not-allowed': disabled,
        },
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
