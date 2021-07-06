import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './PAGES/MAINPAGE/MainPage'
import Editor from './PAGES/EDITOR/Editor'
import Error from './PAGES/NOTFOUND/Error'
function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path='/' ><MainPage/></Route>
        <Route exact path='/editor'> <Editor/></Route>
        <Route path="*"><Error/></Route>
      </Switch>
      </div>
    
    </Router>
    );
}

export default App;
