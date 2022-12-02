import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/home/home";
import Header from "./components/layout/Header";
import UpdateProfile from "./components/updateprofile";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss"
import "./styles/updateprofile.scss"

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
      </Switch>
    </Router>
    );
}

export default App;
