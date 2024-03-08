import ExtendedLink from './extendedLink'
import PropTypes from 'prop-types'

export default function ExtendedLinks({ props }) {
  return (
    <ul className="bg-white absolute z-30 top-full left-0 flex-col items-start rounded-[10px] shadow-nestedLink rounded-tl-none p-4 gap-1 hidden group-hover:flex">
      {props.map((item, index) => (
        <ExtendedLink props={item} key={index} />
      ))}
    </ul>
  )
}

ExtendedLinks.propTypes = {
  props: PropTypes.array,
  map: PropTypes.func,
}
