import { FC } from 'react';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  // { id: 1, icon: 'uil uil-twitter', url: 'https://twitter.com/uilibofficial' },
  // { id: 2, icon: 'uil uil-facebook-f', url: 'https://facebook.com/uiLibOfficial/' },
  { id: 4, icon: 'uil uil-instagram', url: 'https://www.instagram.com/dillivibes1' },
  { id: 5, icon: 'uil uil-youtube', url: 'https://www.youtube.com/@dillivibes1' },
  { id: 5, icon: 'uil uil-whatsapp', url: 'https://wa.me/7817851235' }
];


const SocialLinks: FC<SocialLinksProps> = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
