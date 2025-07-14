import Spy from "../assets/spy_cropped.png";
import Redacted from "./Redacted";

function Hero() {
  return (
    <section className="relative bg-[url('./assets/construction-paper.png')] bg-cover border-4 border-t-0 border-dark shadow-md font-staat py-8 px-6 sm:px-12 h-[18rem] sm:h-[18rem] overflow-hidden">
      <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left max-w-screen-lg mx-auto">
        <h2 className="text-3xl sm:text-4xl text-dark">Hi, I'm Jack</h2>
        <p className="mt-1 text-xl sm:text-2xl text-dark">
          And I'm a <Redacted>software developer</Redacted>
        </p>
        <button className="mt-4 bg-primary text-light px-5 py-2 text-lg sm:px-6 sm:py-3 sm:text-2xl tracking-wide shadow-md hover:bg-orange-700 transition-all duration-200">
          Enter Dossier
        </button>
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
