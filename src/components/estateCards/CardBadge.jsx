import classNames from 'classnames';

export default function CardBadge({ estate }) {
  return (
    <span
      className={classNames(`rounded-button text-white font-medium px-3 py-1`, {
        'bg-blue-700': estate?.feature === 'Yeni',
        'bg-red-600': estate?.feature === 'Sərfəli',
        'special-badge': estate?.feature === 'Dəbdəbəli',
        'bg-teal-500': estate?.feature === 'Mərkəz',
        'bg-blue-400': estate?.feature === 'Endirim',
      })}
    >
      {estate?.feature.toUpperCase()}
    </span>
  );
}
