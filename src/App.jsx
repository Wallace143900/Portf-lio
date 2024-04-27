import { Header } from "./components/Header/Header";
import { Skill } from "./components/Skill/Skill";
import { Home } from "./components/Iam.jsx/Home";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Portfolio } from "./components/Portfolio/Portfolio";
import "./styles/index.scss";


function App() {

  return (
    <>
      <Header />
      <Home />
      <Skill />
      <AboutMe />
      <Portfolio />
    </>
  )
}

export default App
