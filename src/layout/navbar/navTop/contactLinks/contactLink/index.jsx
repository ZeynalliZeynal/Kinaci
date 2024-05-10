import Registration from '~/redux/features/auth/Registeration.jsx'

export default function ContactLink({ data }) {
  return (
    <li className={!data.isBtn ? 'hidden lg:flex' : ''}>
      {!data.isBtn ? (
        <a href={data.link} className={data.styles}>
          <span>{data.icon}</span> {data.text}
        </a>
      ) : (
        <Registration data={data} />
      )}
    </li>
  )
}
