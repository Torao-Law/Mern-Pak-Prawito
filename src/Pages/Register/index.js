import React from 'react'
import { RegisterBg } from '../../assets/index'
import { Button } from '../../Components/atoms'
import { Input, Gap, Link } from '../../Components/'
import './style.scss'
import { useHistory } from 'react-router'

const Register = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} alt="" className="bg-image" />
            </div>
            <div className="right">
                <p className="title">Register Page</p>
                <Input label="Full Name" placeholder="Full Name" />
                <Gap height={15}/>
                <Input label="Email" placeholder="Email" />
                <Gap height={15}/>
                <Input label="Password" placeholder="Password" />
                <Gap height={40} />
                <Button title="Register" onClick={() => history.push('/login')} />
                <Gap height={100}/>
                <Link title="Kembali ke Login" onClick={() => history.push('/login')}/>
            </div>
        </div>
    )
}

export default Register
