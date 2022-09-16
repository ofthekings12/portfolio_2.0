import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { RiNewspaperFill } from "react-icons/ri"

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
        <a
        href="https://www.github.com/ofthekings12"
        target="_blank"
        rel="noopener noreferrer"
      >
          <BsGithub />
      </a>
        </div>

      <div>
      <a
        href="https://www.linkedin.com/in/mikkodelosreyes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
        </a>
      </div>
      <div>
      <a
        href="https://resume.io/r/VY2i76FD2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiNewspaperFill />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
