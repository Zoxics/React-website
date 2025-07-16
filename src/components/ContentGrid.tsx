import About from "./About";
import Contact from "./Contact";
import Paragraph from "./Paragraph";
import Projects from "./Projects";
import RecentCommit from "./RecentCommit";

function ContentGrid() {
  return (
    <div
      id="target"
      className="sm:mx-auto -mx-12 mt-12 grid gap-12 lg:grid-cols-2 sm:grid-cols-1"
    >
      <About />
      <Paragraph />
      <Projects />
      <Contact />
      <RecentCommit />
    </div>
  );
}

export default ContentGrid;
