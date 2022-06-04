import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import { Habilidades, Proyectos, SobreMi, Header } from "./portafolio";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


function App() {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <>
      <div id="top" className={`${themeName} app`}>
        <Header />
        <main>
          <SobreMi />
          <Proyectos />
          <Habilidades />
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

export default App;
