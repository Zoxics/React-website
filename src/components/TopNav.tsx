import { FaLinkedin, FaGithub } from "react-icons/fa";

function TopNav() {
  return (
    <div className="justify-end flex gap-4 mb-16 sm:mb-0">
      <a
        href="https://github.com/Zoxics"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark rounded-full hover:text-primary transition duration-200"
      >
        <FaGithub size={40} />
      </a>
      <a
        href="https://www.linkedin.com/in/jonathan-nargi-85693533a/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark hover:text-primary transition duration-200"
      >
        <FaLinkedin size={40} />
      </a>
    </div>
  );
}

export default TopNav;
