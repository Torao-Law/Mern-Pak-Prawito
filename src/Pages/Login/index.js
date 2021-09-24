import React from 'react'
import { LoginBg } from '../../assets/image'
import { Button } from '../../Components/atoms'
import { Input, Gap, Link } from '../../Components/'

const Login = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} alt="" className="bg-image" />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email" />
                <Gap height={15}/>
                <Input label="Password" placeholder="Password" />
                <Gap height={40} />
                <Button title="Login" />
                <Gap height={100}/>
                <Link title="Belum punya akun, silahkan register"/>
            </div>
        </div>
    )
}

export default Login
