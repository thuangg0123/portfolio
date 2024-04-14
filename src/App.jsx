import "./App.css";
import About from "./Components/About";
import { Contact } from "./Components/Contact";
import Header from "./Components/Header";
import MyResume from "./Components/MyResume";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Header />
      <MyResume />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
