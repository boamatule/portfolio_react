import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Switch, Route } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Cv from "./Cv";
import "./css/tailwind.css";


const App = () => {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <Header />
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/" component={About}></Route>
              <Route exact path="/projects" component={Projects}></Route>
              <Route exact path="/cv" component={Cv}></Route>
              <Route exact path="/contact" component={Contact}></Route>
            </Switch>
          </div>
        <Footer />
      </div>
    </div>
  )
};

ReactDOM.render(( 
  <BrowserRouter>
    <App />
  </BrowserRouter>),
document.getElementById("app"))