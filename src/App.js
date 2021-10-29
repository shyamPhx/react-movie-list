import "./App.css";
import { Movielist } from "./Movielist";
import { Switch, Route, Link, } from "react-router-dom";
import { Colorlist } from "./Colorlist";



function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>

          <li>
            <Link to="/colors">ColorBox</Link>
          </li>

          
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Welcome />
         
        </Route>

        <Route path="/movies">
          <Movielist />
        </Route>

       

        <Route path="/colors">
          <Colorlist />
        </Route>

        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}




function NotFound() {
  return (
    <div>
      <img
        src="https://kicksdigitalmarketing.com/wp-content/uploads/2019/09/iStock-1142986365.jpg"
        alt="404 not found"
      ></img>
    </div>
  );
}

function Welcome() {
  return <h1> Welcome ALL!! 😁🙌 </h1>;
}

export default App;
