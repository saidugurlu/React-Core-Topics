import "./App.css";
import employees from './data/employees.json';
function App() {
  return <div className="App">
    
<h1>Employess</h1>


{employees.map ((emp, i)=>{
  return (
<div key={i} className="employee">
{emp.firstName} {emp.lastName}



</div>



  )
})}

  </div>;
}

export default App;
