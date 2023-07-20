import "./App.css";
import { Route, Switch } from "react-router-dom";
//component
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
