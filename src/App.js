/* globals dcp, progress */
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import './App.css'
import Front from './Front';


function App() {

  const compute = dcp.compute;
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Route path= '/' exact component = {Front}/>  
      <Route path = '/Home' exact component = {Home}/>
      </Router>
      </header>
     
    </div>
   );
  }

export default App;
