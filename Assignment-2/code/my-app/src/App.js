import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
return(
  <div className="container">
  {/* Start your React code here */}
  <img src ={employee.profileImg} alt="profile"></img>
  <h1>{employee.name}</h1>
  <p><strong>Location</strong></p>
  <h3>{employee.location}</h3>
  <p><strong>Blood Group</strong></p>
  <h3>{employee.bloodGroup}</h3>
  <p><strong>Age</strong></p>
  <h3>{employee.age}</h3>
</div>
)
}



export default App;
