function ResetPassword() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div>
           <h1>Reset Password</h1>
           <div>
             <label alt="newpassword" className="newpassword">New Password</label><br/>
             <input type="password" placeholder="Enter your new password" className="name"/>
           </div>
           <div className="second-input">
             <label alt="pass" className="pass"> Confirm Password</label><br/>
             <input type="password" placeholder="Confirn password" className="name"/>
           </div>
          <div className="reset-button">
          <button>Reset Password</button>
          </div>
           
            
           
			</div>
			</div>
         </div>
       </div>
       

     
  );
}

export default ResetPassword;
