import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer"
import { themeContext } from "./Context"
import { useContext } from "react"
import { Outlet } from "react-router-dom";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode ? '#0B0719' : '',
        color: darkMode ? 'white' : ''
      }}>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
