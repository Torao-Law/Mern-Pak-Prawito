import React from 'react'
import { LogoDiscord, LogoFB, LogoInstagram, LogoKabayan, LogoTelegram, LogoTwitter } from '../../../assets/index'
import './footer.scss'


const Icon = ({img}) => {
    return(
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div  className="footer">
                <div>
                    <img className="logo" src={LogoKabayan} alt="Logo Kabayan "/>
                </div>
                <div className="social-wrapper">
                    <Icon img={LogoFB} />
                    <Icon img={LogoInstagram} />
                    <Icon img={LogoTelegram}  />
                    <Icon img={LogoTwitter} />
                    <Icon img={LogoDiscord} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright2021@Dandi Saputra on Kabayan Koding Tutorials.</p>
            </div>
        </div>
    )
}

export default Footer
