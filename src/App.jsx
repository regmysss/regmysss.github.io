import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import './utils/i18n';

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
  )
}

export default App
