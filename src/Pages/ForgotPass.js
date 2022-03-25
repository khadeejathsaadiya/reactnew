
function ForgotPass() {
    return (
      <div className="main">
       <div className="sub-main">
         <div>
          
           <div>
             <h1>Forgot Password?</h1>
             <p>Enter the mobile number associated with your account</p>
             <fieldset>
                <legend>We will send you SMS to reset your password:</legend>
             </fieldset>
             <div>
               <label alt="mobileno" className="mobileno"></label><br/>
               <input type="tel-phe" placeholder="Enter Mobile Number" className="name"/>
             </div>
            
            <div className="verify-button">
            <button>Send</button>
            </div>
             
   
           </div>
         </div>
         
  
       </div>
      </div>
    );
  }
  
  export default ForgotPass;
  
  