import profile from "./../image/a.png";
/* import email from "./../image/email.jpg";
import pass from "./../image/pass.png"; */
function Register() {
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
           <h1>Registration</h1>
           <div>
             <label alt="mobileno" className="mobileno">Mobile No</label><br/>
             <input type="tel-ph" placeholder="Enter your mobile number" className="name"/>
           </div>
          
          <div className="otp-button">
          <button>Send OTP</button>
          </div>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Register;

