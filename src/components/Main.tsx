import Info from "./Info";
import Projects from "./Projects";


const Main: React.FC = () => {
    return (
        <main className="md:flex items-center justify-center gap-10 center ">
            <Info />
            <Projects />
        </main>
    )
}

export default Main;