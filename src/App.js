import "./App.css";
import "aos/dist/aos.css";
import ThemeWrapper from "./ThemeWrapper";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return <ThemeWrapper />;
}

export default App;
