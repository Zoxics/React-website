import Spy from "../assets/spy_cropped.png";
import Redacted from "./Redacted";
import { HiOutlineDocument } from "react-icons/hi";

function Hero() {
  const scrollToTarget = () => {
    const section = document.getElementById("target");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[url('./assets/construction-paper.png')] bg-cover border-4 border-t-0 border-dark shadow-md font-staat py-8 px-6 sm:px-12 h-[20rem] sm:h-[18rem] overflow-hidden sm:mx-auto -mx-12">
      <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left max-w-screen-lg mx-auto">
        <h2 className="text-3xl sm:text-4xl text-dark">Hi, I'm Jack</h2>
        <p className="mt-1 text-xl sm:text-2xl text-dark">
          And I'm a <Redacted>software developer</Redacted>
        </p>
        <div className="mt-4 flex gap-4">
          <button
            onClick={scrollToTarget}
            className="flex flex-row items-center gap-2 bg-primary text-light px-5 py-2 sm:px-6 sm:py-3 text-lg sm:text-2xl tracking-wide shadow-md hover:bg-orange-700 transition-all duration-200"
          >
            <span>Enter Dossier</span>
          </button>

          <a
            href="`${import.meta.env.BASE_URL}Jonathan-Nargi-Resume-2025.pdf`"
            download
            className="flex flex-row items-center gap-2 bg-primary text-light px-5 py-2 sm:px-6 sm:py-3 text-lg sm:text-2xl tracking-wide shadow-md hover:bg-orange-700 transition-all duration-200"
          >
            <HiOutlineDocument className="text-light" size={24} />
            <span>View Resume</span>
          </a>
        </div>
      </div>

      <img
        src={Spy}
        alt="Spy"
        className="absolute -bottom-[1px] right-0 w-36 sm:w-48 md:w-64 h-auto object-contain"
      />
    </section>
  );
}

export default Hero;
