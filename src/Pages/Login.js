import profile from "./../image/a.png";
/* import email from "./../image/email.jpg";
import pass from "./../image/pass.png"; */
/* import { useState } from 'react';*/

/* const [mobileno, setMobileNo] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);


// Handling the name change
const handleMobileNo = (e) => {
	setMobileNo(e.target.value);
	setSubmitted(false);
}; */


function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login</h1>
           <div>
           {/* <label className="mobileno">Mobile No</label>
		<input onChange={handleMobileNo} className="input" value={mobileno} type="tel-ph" /> */}

             <label alt="mobileno" className="mobileno">Mobile No</label><br/>
             <input type="tel-ph" placeholder="Enter your mobile number" className="name"/>
           </div>
           <div className="second-input">
             <label alt="pass" className="pass">Password</label><br/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
			</div>
			</div>
         </div>
       </div>
       

     
  );
}

export default Login;
