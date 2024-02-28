import ExtendedLink from './extendedLink'
import PropTypes from 'prop-types'

export default function ExtendedLinks({ props }) {
  return (
    <ul className="absolute top-full left-0 flex-col items-start rounded-[10px] shadow-nestedLink rounded-tl-none p-4 gap-1">
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
