import "./App.css";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import Projects from "./Component/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectPopup from "./Component/ProjectPopup";
import ProjectSlider from "./Component/ProjectSlider";
import Chat from "./Component/Chat";
import Tools from "./Component/Tools";
import Footer from "./Component/Footer";
import AppProjects from "./Component/AppProjects";

const Portfolio = () => {
  return (
    <>
      <div className="bg-[#1B2435]">
        <Header />
        <Hero />
        <Projects />
        <ProjectSlider />
        <AppProjects />
        <Tools />
        <Chat />
        <Footer />
      </div>
    </>
  );
};
const SingleProject = () => {
  return (
    <>
      <Header />
      <ProjectPopup />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/:id" element={<SingleProject />} />
        </Routes>
        {/* <Header />
        <Hero />
        <Projects /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
