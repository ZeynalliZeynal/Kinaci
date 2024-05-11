import { links } from '~/data/navbar/links.jsx';
import ContactLink from './ContactLink.jsx';

export default function ContactLinks() {
  return (
    <ul className="gap-2.5">
      {links.map((link, index) => (
        <ContactLink data={link} key={index} />
      ))}
    </ul>
  );
}
