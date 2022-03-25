
function VerifyOTP() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
        
         <div>
           <h1>OTP Verification</h1>
           <p>Enter the Verification code, we just sent you via SMS</p>
           <div>
             <label alt="verifyotp" className="verifyotp"></label><br/>
             <input type="code" placeholder="Enter verification code" className="name"/>
           </div>
          
          <div className="verify-button">
          <button>Verify</button>
          </div>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default VerifyOTP;

