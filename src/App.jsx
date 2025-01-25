import { useTheme } from "./hooks/useTheme";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Home />
      <Projects />
      <Skills />
    </>
  )
}

export default App
