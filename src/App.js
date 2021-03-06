import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import UserList from './pages/userList/UserList'
import User from './pages/user/User';
import NewUser from "./pages/newUser/newUser";
import DefectList from "./pages/defectList/DefectList";
import Defect from "./pages/defect/Defect";
import "./app.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import NewDefect from "./pages/newDefect/NewDefect";

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
          

            
            <Route path="/defects"> 
              <DefectList/>
            </Route>
            <Route path="/defect/:defectId"> 
              <Defect/>
            </Route>
            <Route path="/newdefect"> 
              <NewDefect/>
            </Route>
          
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
