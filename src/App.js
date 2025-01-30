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
  const [data , setUserData] = useContext(AuthContext);

  useEffect( () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUserdata(userData.data);
    }
  } , []);

  function handleLogin(email , password) {
    if(data && data.admin && data.employees) {
      const admin = data.admin.find((e) => email === e.email && password === e.password);
      const employee = data.employees.find((e) => email === e.email && password === e.password);

      if(admin){
        setUser('admin');
        setloggedInUserdata(admin);
        localStorage.setItem('loggedInUser' , JSON.stringify({role : 'admin' , data:admin}));
      }
      else if(employee) {
        setUser('employee');
        setloggedInUserdata(employee);
        localStorage.setItem('loggedInUser' , JSON.stringify({role : 'employee' , data:employee}));
      }
      else{
        alert("Invalid Credentials");
      }
    }
    else{
      alert("Data Not Found");
    }
  }

  


  return (
    <>
     {
      !user ? 
      <Login handleLogin={handleLogin}/> : 
       user === 'admin' ? <AdminDashboard changeUser={setUser}loggedInData={loggedInUserData}/> : <EmployessDashboard changeUser={setUser} loggedInData={loggedInUserData}/> 
     }
    </>
  );
}

export default App;
