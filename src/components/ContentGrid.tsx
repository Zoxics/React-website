import About from "./About";
import Carousel from "./Carousel";
import Paragraph from "./Paragraph";
import Projects from "./Projects";

function ContentGrid() {
  return (
    <div className="sm:mx-auto -mx-12 mt-12 grid gap-12 lg:grid-cols-2 sm:grid-cols-1">
      <About />
      <Paragraph />
      <Projects />
      {/* <Carousel /> */}
    </div>
  );
}

export default ContentGrid;
