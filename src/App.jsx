import { useTheme } from "./hooks/useTheme";
import { Header } from "./components/Header";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
    </>
  )
}

export default App
