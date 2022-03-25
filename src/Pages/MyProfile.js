import profile from "./../image/a.png";

function MyProfile() {
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
           <h1>My Profile</h1>
           <div>
             <label alt="name" className="fullname">Name</label><br/>
             <input type="text" placeholder="Enter your name" className="name"/>
           </div>
           <div className="second-input">
             <label alt="email" className="email">Email</label><br/>
             <input type="email" placeholder="Email" className="name"/>
           </div>
           <div className="more-input">
             <label alt="mobileno" className="mobileno">Mobile Number</label><br/>
             <input type="tel-ph" placeholder="mobileno" className="name"/>
           </div>
           <div className="more-input">
             <label alt="pass" className="pass">Password</label><br/>
             <input type="password" placeholder="password" className="name"/>
           </div>
           <div className="more-input">
             <label alt="confrmpass" className="confrmpass">Confirm Password</label><br/>
             <input type="password" placeholder="confirm password" className="name"/>
           </div>
          <div className="register-button">
          <button>Register</button>
          </div>
           
			</div>
			</div>
         </div>
       </div>
       

     
  );
}

export default MyProfile;
