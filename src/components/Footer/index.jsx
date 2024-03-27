import React from "react";
import images from "../../constants/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socials = [
    {
      logo: images.linkedinIcon,
      alt: "Linkedin Icon",
      link: "https://www.linkedin.com/in/felixmacaspac/",
    },
    {
      logo: images.githubIcon,
      alt: "Github Icon",
      link: "https://github.com/felixmacaspac",
    },
    {
      logo: images.codepenIcon,
      alt: "Codepen Icon",
      link: "https://codepen.io/fmcmacaspac",
    },
  ];

  return (
    <div className="bg-white py-16 dark:bg-primary">
      <div className="container text-center">
        <h3 className="text-2xl font-semibold text-primary mb-6 dark:text-white">Let's Connect</h3>
        <ul className="flex justify-center items-center mb-8 space-x-6">
          {socials.map((social, index) => (
            <li key={index}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img className="h-8 w-8 transition-all dark:invert" src={social.logo} alt={social.alt} />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-primary font-normal text-base mb-2 dark:text-white">© {currentYear} Kristian K. All rights reserved.</p>
        <p className="text-primary font-semibold text-base dark:text-white">
          Made with <span>❤️</span> from Oslo
        </p>
      </div>
    </div>
  );
};

export default Footer;
