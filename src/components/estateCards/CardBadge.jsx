import classNames from 'classnames';

export default function CardBadge({ estate }) {
  return (
    <span
      className={classNames(`rounded-button text-white font-medium px-3 py-1`, {
        'bg-blue-700': estate.features?.label === 'Yeni',
        'bg-red-600': estate.features?.label === 'Sərfəli',
        'special-badge': estate.features?.label === 'Dəbdəbəli',
        'bg-teal-500': estate.features?.label === 'Mərkəz',
        'bg-blue-400': estate.features?.label === 'Endirim',
      })}
    >
      {estate.features?.label.toUpperCase()}
    </span>
  );
}
