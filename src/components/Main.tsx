import Info from "./Info";
import Projects from "./Projects";

const Main: React.FC = () => {
  return (
    <main
      className="items-center justify-center gap-10 
    md:absolute md:left-[50%] md:top-[50%] md:flex md:w-full md:translate-x-[-50%] md:translate-y-[-50%] "
    >
      <Info />
      <Projects />
    </main>
  );
};

export default Main;
