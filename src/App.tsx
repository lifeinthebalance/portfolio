import { ReactElement } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
// import Info from "./components/Info";
// import Main from "./components/Main";

const App: React.FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Projects />
    </>
  );
};

export default App;
