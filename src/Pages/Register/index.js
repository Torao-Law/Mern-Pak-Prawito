import React from 'react'
import { RegisterBg } from '../../assets/image'
import { Button } from '../../Components/atoms'
import Input from '../../Components/atoms/input'
import './style.scss'

const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} alt="" className="bg-image" />
            </div>
            <div className="right">
                <p className="title">Register Page</p>
                <Input label="Full Name" placeholder="Full Name"/>
                <Input label="Email" placeholder="Email" />
                <Input label="Password" placeholder="Password" />
                <Gap height={20} />
                <Button title="Register" />
            </div>
        </div>
    )
}

export default Register
