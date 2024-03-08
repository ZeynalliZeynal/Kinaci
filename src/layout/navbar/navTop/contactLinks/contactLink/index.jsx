import PropTypes from 'prop-types'

export default function ContactLink({ data }) {
  return (
    <li>
      <a href={data.link} className={data.styles}>
        <span>{data.icon}</span> {data.text}
      </a>
    </li>
  )
}

ContactLink.propTypes = {
  data: PropTypes.object,
}
