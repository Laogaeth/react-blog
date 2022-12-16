import Navbar from './Navbar';
import Home from './Home';
// Switch changed to Routes in v6, Im using v5
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        {/*Switch component only 1 route shows at one time */}
         <Switch>
          {/* Homepage */}
          <Route path="/">
            <Home/>
          </Route>
         </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
