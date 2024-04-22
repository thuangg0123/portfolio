import "./App.css";
import About from "./Components/About";
import { Contact } from "./Components/Contact";
import Header from "./Components/Header";
import MyResume from "./Components/MyResume";
import Projects from "./Components/Projects";
import LanguageSkill from "./Components/LanguageSkill";

function App() {
  return (
    <>
      <Header />
      <MyResume />
      <About />
      <LanguageSkill />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
