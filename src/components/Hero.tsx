import Spy from "../assets/spy_cropped.png";

function Hero() {
  return (
    <section className="relative mx-2 sm:mx-4 px-2 sm:px-3 border-4 border-t-0 border-dark h-64 overflow-hidden font-staat shadow-md bg-[url('./assets/construction-paper.png')] bg-cover">
      <h2 className="text-left text-4xl font-staat text-dark p-6 pb-0">
        Hi, I'm Jack
      </h2>
      <p className="text-left p-6 pt-0 mt-2 text-2xl">
        And I'm a software developer
      </p>
      <button className=" absolute bg-primary text-light top-50 left-8 p-3 text-4xl tracking-wider shadow-md hover:bg-orange-700">
        Enter Dossier
      </button>
      <img
        src={Spy}
        alt="Spy"
        className="absolute right-0 w-32 sm:w-40 md:w-64 h-auto object-contain bottom-0 md:-bottom-1"
      ></img>
    </section>
  );
}
export default Hero;
