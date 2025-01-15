import { useContext, useEffect , useState} from 'react';
import './App.css';
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployessDashboard from './components/Dashboard/EmployessDashboard';
import { setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

function App() {

  useEffect( () => {
    setLocalStorage();
  } , []);
   
  const [user , setUser] = useState(null);
  const [loggedInUserData , setloggedInUserdata] = useState(null);
  const data = useContext(AuthContext);

  useEffect( () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUserdata(userData.data);
    }
  } , []);

  function handleLogin(email , password) {

    if(email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser' , JSON.stringify({role : 'admin'}));
    }

    else if(data) {
      const employee = data.employees.find((e) => email === e.email && password === e.password);
      if(employee) {
        setUser('employee');
        setloggedInUserdata(employee);
        localStorage.setItem('loggedInUser' , JSON.stringify({role : 'employee' , data:employee}));
      }
    } 

    else{
      alert("Invalid Credentials");
    }
  }

  


  return (
    <>
     {
      !user ? 
      <Login handleLogin={handleLogin}/> : 
       user === 'admin' ? <AdminDashboard/> : <EmployessDashboard loggedInData={loggedInUserData}/> 
     }
    </>
  );
}

export default App;
