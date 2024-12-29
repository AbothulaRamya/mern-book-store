import React, { useState } from 'react'
import axios from 'axios'
export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobile, setMobile] = useState('')
    function register(e) {
        e.preventDefault()
        axios.post("http://localhost:5000/api/auth/register", { name, email, password, mobile })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                if (err.status == 400) {
                    alert("User alredy exists")
                }
                else {
                    alert("Internal server error")
                }
            }) 
    }
    return (
        <div className='container mt-4'>
            <div className='row'>
                <form onSubmit={register} className='col-6'>
                    <div className="mb-3">
                        <label htmlfor="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" onChange={(e) => setName(e.target.value)} aria-describedby="nameHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="exampleInputMobileNumber" className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" id="exampleInputMobileNumber" onChange={(e) => setMobile(e.target.value)} aria-describedby="MobileNumberHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>



            </div>

        </div>
    )
}
