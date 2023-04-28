import { ReactElement } from "react";
import todo from "../assets/1f3f4ce973d946578567f190e2773709.png";
import { motion } from "framer-motion";

const Projects: React.FC = (): ReactElement => {
  return (
    <main
      className="flex min-h-screen items-center justify-center text-center"
      id="projects"
    >
      <motion.section
        className="mx-10 flex flex-col gap-10 md:mx-0 md:flex-row md:flex-wrap md:justify-center "
        initial={{ opacity: 0, scale: 0.75, scaleX: 5 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        viewport={{ once: false }}
      >
        <div className="max-w-md">
          <img src={todo} alt="to-do list" className="" />
        </div>
        <div className="max-w-md">
          <img src={todo} alt="to-do list" className="" />
        </div>
        <div className="max-w-md ">
          <img src={todo} alt="to-do list" className="" />
        </div>
      </motion.section>
    </main>
  );
};

export default Projects;
