import React, { useState,useEffect } from 'react';

export default function Login() {
    const [formbtn,setFormbtn] = useState('loginBtn');

    useEffect(() =>{
        console.log(formbtn);
    })

    return( 
    <section>
        <div className="hello" >
            <div className="form-box" >
                <div className="button-box">
                    <div id="btn"></div>
                    <button type="button" className="toggle-btn" onClick={() => setFormbtn("loginBtn")}>Log in</button>
                    <button type="button" className="toggle-btn" onClick={() => setFormbtn("registerBtn")}>Register</button>
                </div>

                {formbtn === 'loginBtn' ? (
                <form id="login" className="input-group">
                    <input type="text" className="input-field" placeholder="username" required />
                    <input type="text" className="input-field" placeholder="Password" required />
                    <input type="checkbox" className="check-box" />
                    <span>Remenber password</span>
                    <button type="sumbit" className="sumbit-btn">Log in</button>
                </form>
                ):(
                    <form id="Register" className="input-group">
                    <div className="input-box">
                        <span className="details">Full name</span>
                        <input type="text"/>
                    </div>
                    <div class="input-box">
                        <span className="details">Age</span>
                        <input type="text"/>
                    </div>
                    <div className='input-box'>
                        <span className='details'>Sex</span>
                        <input type="radio" id="sex" name="sex" value="1" />Female
                        <input type="radio" id="sex" name="sex" value="0" />Male
                    </div>
                    <div className="input-box">
                        <span className="details">Address</span>
                        <input type="text"/>
                    </div>
                    <div className='input-box'>
                        <span className="details">patient id</span>
                        <input type="text"/>
                    </div>
                    <div class="input-box">
                        <span className="details">Reg no</span>
                        <input type="text"/>
                    </div>
    
    
    
    
                    <button type="sumbit" class="sumbit-btn">Register</button>
            
    
    
            </form>
                )}
            </div>

        </div>




    </section>
    );
}