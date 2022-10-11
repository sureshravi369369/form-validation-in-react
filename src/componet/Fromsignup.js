import React from "react";
import Useform from "./Useform";
import Validate from "./utilse/Validate";
import "./Form.css"
function Fromsignup() {
      const{handleChnage,values,handleSubmit,error}=Useform(Validate)
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-divition">
                    <label htmlFor="name">Username</label>
                    <input
                     id="name" 
                     type="text"  
                     className="form-control"  
                     placeholder="Enter Yor Username" 
                     name="username" 
                     value={values.username}
                     onChange={handleChnage}/>
                     {error.username && <p>{error.username}</p>}
                </div>
                <div className="form-divition">
                    <label htmlFor="mail">Email</label>
                    <input
                     id="mail" 
                     type="email"                 
                     className="form-control" 
                     placeholder="Enter Your Email"
                     name="email"
                     value={values.email}
                     onChange={handleChnage}/>
                     {error.email && <p>{error.email}</p>}
                </div>
                <div className="form-divition">
                    <label htmlFor="password">Password</label>
                    <input
                     id="password" 
                     type="password"                   
                     className="form-control"  
                     placeholder="Password" 
                     name="password"
                     value={values.password}
                     onChange={handleChnage}/>
                     {error.password && <p>{error.password}</p>}
                </div>
                <div className="form-divition">
                    <label htmlFor="confirm-password"> Confirm Password</label>
                    <input
                     id="confirm-password"
                     type="text" 
                     className="form-control" 
                     placeholder="Confirm password" 
                     name="confirm password" 
                     value={values.password2}
                     onChange={handleChnage}/>
                     {error.password2 && <p>{error.password2}</p>}
                </div>
                <button type="submit" className="btn">Sign up</button>
                <span>
                    Already have an account ? login <a href="#">here</a>
                </span>
            </form>
        );
}
export default Fromsignup;
