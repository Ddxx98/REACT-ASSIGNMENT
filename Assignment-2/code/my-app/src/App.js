import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
return(
  <div className="container">
  {/* Start your React code here */}
  <div className="div image">
    <img src ={employee.profileImg} alt="profile"></img>
  </div>
  <div className="div name">
    <h1>{employee.name}</h1>
  </div>
  <div className="div location">
    <label><strong>Location</strong></label>
    <h3>{employee.location}</h3>
  </div>
  <div className="div bloodGroup">
    <label><strong>Blood Group</strong></label>
    <h3>{employee.bloodGroup}</h3>
  </div>
  <div className="div age">
    <label><strong>Age</strong></label>
    <h3>{employee.age}</h3>
  </div>
</div>
)
}



export default App;
