import Navbar from "./components/Navbar";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/signin" component={Login} />
      <Route exact path="/register" component={Register} />
      <Redirect path="/" component={Home} />
      <Footer />
    </div>
  );
}

export default App;
