import React from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiTwitter } from "react-icons/fi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Github <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/",
      style: "rounded-tr-xl",
    },
    {
      id: 2,
      child: (
        <>
          Whatsapp <FaWhatsapp size={25} />
        </>
      ),
      href: "#",
    },
    {
      id: 3,
      child: (
        <>
          Twitter <FiTwitter size={25} />
        </>
      ),
      href: "https://twitter.com/",
    },
    {
      id: 4,
      child: (
        <>
          Instagram <BsInstagram size={25} />
        </>
      ),
      href: "https://instagram.com/",
    },
    {
      id: 5,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:foo@gmail.com",
      style: "rounded-br-xl",
    },
    /*{
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },*/
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-colors-accent"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;