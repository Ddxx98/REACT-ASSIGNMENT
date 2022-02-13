import React from 'react';
// import logo from './logo.svg';
import './App.css';


var arrow="<"
function App() {
  const employee = {
    name: 'Tom Cruise',
    EmployeeID: '123435'
         }
    const customerInfo = {
      email:'abcd@gmail.com',
      phone: '+112-4564214678',
      AppointmentElement: '09-00 (24-05-2022)'
    }
    const orderInfo = {
      status : 'In-progress',
      door : 'Mark',
      time : '10.30 (25-05-2022)'
    }
    const productList = {
      proName: 'Lorem Ipsum',
      profileImg: 'https://www.w3schools.com/howto/img_avatar.png',
      proDesc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <header className='Header'>
      <div className='arrow'>{arrow}</div>
      <div className='middle'>
        <h3><strong>{employee.name}</strong></h3>
        <p>{employee.EmployeeID}</p>
      </div>
      <div className='print'>
        <button>Print</button>
        </div>
    </header>
    <div className='customer-info'>
      <p><strong>Appointment on :</strong> {customerInfo.AppointmentElement}</p>
      <p><strong>Email : </strong>{customerInfo.email}</p>
      <p><strong>Phone : </strong>{customerInfo.phone}</p>
    </div>
    <div className='order-info'>
      <div className='status'>
        <label><strong>Status</strong></label>
        <ul>
          <li>{orderInfo.status}</li>
        </ul>
      </div>
      <div className='Door'>
        <label><strong>Door</strong></label>
        <p>{orderInfo.door}</p>
      </div>
      <div className='Time'>
        <label><strong>Time</strong></label>
        <p>{orderInfo.time}</p>
      </div>
    </div>
    <div className='product-list'>
      <input type="checkbox"></input>
      <div className='image'>
        <img src={productList.profileImg} alt='profile' height='100px' width='100px'></img>
      </div>
      <div className='description'>
        <p><strong>{productList.proName}</strong></p>
        <p>{productList.proDesc}</p>
      </div>
      <div className='arrow'>{arrow}</div>
    </div>
    </div>
  );
}

export default App;
