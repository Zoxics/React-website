import Redacted from "./Redacted";
import TileCard from "./TileCard";

function About() {
  return (
    <div className="text-left font-staat">
      <h1 className="text-primary text-6xl mb-3">About me</h1>
      <div className="bg-cover bg-[url('./assets/construction-paper.png')] text-center border-4 border-dark h-auto rounded-2xl shadow-dark shadow-[5px_5px_0px_0px]">
        <div className="m-5 font-mono font-bold text-xl">
          <h2 className="border-b-2 border-dark">Name: Jonathan Nargi</h2>
          <h2 className="my-3 border-b-2 border-dark">
            Major: Computer Science
          </h2>
          <h2 className="border-b-2 border-dark">
            School: <Redacted index={5}>Redacted</Redacted>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:mx-auto text-center">
            <TileCard text="Weight Lifter" />
            <TileCard text="Snowboarder" />
            <TileCard text="Tech Aficionado" />
            <TileCard text="Pastry Chef" />
            <TileCard text="Motorsports Fan" />
            <TileCard text="Car Enthusiast" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
