import { Header } from "./components/Header/Header";
import { Skill } from "./components/Skill/Skill";
import { Home } from "./components/Iam.jsx/Home";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Portfolio } from "./components/Portfolio/Portfolio";
import "./styles/index.scss";
import { Footer } from "./Footer/Footer";


function App() {

  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skill />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
