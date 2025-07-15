import About from "./About";
import Folder from "./Folder";
import Paragraph from "./Paragraph";

function ContentGrid() {
  return (
    <div className="mt-4 grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
      <About />
      <Paragraph />
    </div>
  );
}

export default ContentGrid;
