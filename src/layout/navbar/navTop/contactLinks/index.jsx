import { links } from '~/data/navbar/links.jsx';
import ContactLink from './ContactLink.jsx';
import Registration from '~/redux/features/auth/Registeration.jsx';

export default function ContactLinks() {
  return (
    <ul className="gap-2.5">
      {links.map((link, index) => (
        <ContactLink data={link} key={index} />
      ))}
      <Registration />
    </ul>
  );
}
