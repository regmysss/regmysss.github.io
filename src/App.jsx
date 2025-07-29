import { Footer } from "./components/layouts/Footer";
import { Header } from "./components/layouts/Header";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import "./utils/i18n";

function App() {
    return (
        <>
            <Header />
            <Home />
            <Projects />
            <Skills />
            <About />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
