import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import Home from './components/index';
import Resume from './components/resume';
import Portfolio from './components/portfolio';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
    </>
  );
}

export default App;
