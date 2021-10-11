import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import {Route, Switch} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import NotFound from './page/NotFound';
import Category from './page/Category'
import Recipe from './page/Recipe';
function App() {
  return (
    <div>
      <Header />
      <main className="container content">
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/category/:name" component={Category}/>
        <Route path="/meal/:id" component={Recipe} />
        <Route component={NotFound}/>
        </Switch>
        </main>
      <Footer />
      </div>
  );
}

export default App;
