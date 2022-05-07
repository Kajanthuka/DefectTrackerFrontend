import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import UserList from './pages/userList/UserList'
import User from './pages/user/User';
import NewUser from "./pages/newUser/newUser";
import "./app.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
   <Router>
    <div > 
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
            <Route exact path="/"> 
              <Home/>
            </Route>
            <Route path="/users"> 
              <UserList/>
            </Route>
            <Route path="/user/:userId"> 
              <User/>
            </Route>
            <Route path="/newUser"> 
              <NewUser/>
            </Route>
          
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
