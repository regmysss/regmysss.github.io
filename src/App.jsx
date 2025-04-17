import { useTheme } from "./hooks/useTheme";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { ModalContext } from "./context/ModalContext";
import { useContext } from "react";
import { ContactModal } from "./components/ContactModal";

function App() {
  const { theme, setTheme } = useTheme();
  const { isModalOpen, onClose } = useContext(ModalContext);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Footer />
      {isModalOpen && <ContactModal onClose={onClose} />}
    </>
  )
}

export default App
