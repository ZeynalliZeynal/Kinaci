export default function ContactLink({ data }) {
  return (
    <li className={'hidden lg:flex'}>
      <a href={data.link} className={data.styles}>
        <span>{data.icon}</span> {data.text}
      </a>
    </li>
  );
}
