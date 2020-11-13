import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from "./components/index";
import Resume from "./components/resume";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
       <Route exact path="/" component={ Home }/>
       <Route path="/resume" component={ Resume }/>

    </>
  );
}

export default App;
