// components/Footer.tsx
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import './Footer.css';  // Import je styling

interface FooterProps {
  blok: SbBlokData;
}

const Footer = ({ blok }: FooterProps) => {
  return (
    <footer {...storyblokEditable(blok)} className="footer">
      <div className="container">
        <p>{blok.text}</p>
      </div>
    </footer>
  );
};

export default Footer;
