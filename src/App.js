import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import Home from './components/index.js';
import Resume from './components/Resume.js';
import Portfolio from './components/Portfolio.js';

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
