import { useTheme } from "./hooks/useTheme";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
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
