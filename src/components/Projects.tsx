import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { marked } from "marked";
import fm from "front-matter";

interface Project {
  name: string;
  meta: {
    title: string;
    description: string;
    date: string;
    repo?: string;
  };
  content: string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  async function getProjectFiles() {
    if (projects.length > 0) return;

    const projectFiles = import.meta.glob("/public/projects/*.md", {
      as: "raw",
    });

    Object.keys(projectFiles).forEach(async (key) => {
      const fileContent = await projectFiles[key]();
      const fileName = key.split("/").pop();

      const { body, attributes } = fm(fileContent);

      setProjects((prev: any) => [
        ...prev,
        { name: fileName, content: body, meta: attributes },
      ]);
    });
  }

  useEffect(() => {
    getProjectFiles();
  }, []);

  return (
    <div className="font-staat w-full text-left">
      <h1 className="text-6xl text-primary mb-3">Projects</h1>
      {projects?.map((project) => (
        <Project
          key={project.name}
          name={project.name}
          meta={project.meta}
          content={project.content}
        />
      ))}
    </div>
  );
}

export function Project({ name, meta, content }: Project) {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation] = useState(() => Math.random() * 10 - 5);
  return (
    <div className="w-full flex justify-center pb-4">
      <div className="w-full max-w-[680px]">
        <svg
          viewBox="05 05 850 318"
          className="w-full h-auto cursor-pointer min-w-[300px]"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Folder back with tab */}
          <path
            d="M10 07 H300 L360 70 H690 V190 H10 Z"
            fill="#d6be95"
            stroke="#1c4848"
            strokeWidth="4"
          />

          {/* Folder front */}
          <g className="origin-bottom transition-transform duration-300 group-hover:-rotate-x-[25deg]">
            <path
              d="M10 60 H850 V320 H10 Z"
              fill="#d6be95"
              stroke="#1c4848"
              strokeWidth="4"
            />

            {/* Description text on front of folder */}

            {/* Shadow Layer */}
            <text
              x="427"
              y="212"
              textAnchor="middle"
              fontSize="6rem"
              fontWeight="bold"
              fill="#1c4848"
              pointerEvents="none"
              letterSpacing="1px"
              transform={`rotate(${rotation} 300 100)`}
            >
              {meta.description}
            </text>

            <text
              x="425"
              y="210"
              textAnchor="middle"
              fontSize="6rem"
              fontWeight="bold"
              fill="#be4e2d"
              pointerEvents="none"
              letterSpacing="1px"
              transform={`rotate(${rotation} 300 100)`}
            >
              {meta.description}
            </text>
          </g>

          {/* Folder tab text (name) */}
          <text
            x="160"
            y="45"
            textAnchor="middle"
            fontSize="2rem"
            fontWeight="bold"
            fill="#1c4848"
            letterSpacing="1px"
            pointerEvents="none"
          >
            {name.replace(".md", "").toUpperCase()}
          </text>
        </svg>

        {/* Markdown content - perfectly aligned with folder */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-[2px] relative w-full max-w-[580px] bg-[url('./assets/construction-paper.png')] bg-cover border-[2px] border-t-0 border-[#1c4848] font-mono overflow-hidden"
              style={{
                padding: "clamp(16px, 2vw, 24px)",
                fontSize: "clamp(12px, 1.5vw, 14px)",
              }}
            >
              <div
                className="markdown prose prose-sm max-w-none prose-headings:text-dark prose-p:text-black"
                dangerouslySetInnerHTML={{ __html: marked(content) }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
export default Projects;
