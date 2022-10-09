import Logo from '../images/logo-light.svg'
import Facebook from '../images/icon-facebook.svg'
import Instagram from '../images/icon-instagram.svg'
import Pinterest from '../images/icon-pinterest.svg'
import Twitter from '../images/icon-twitter.svg'
const FooterNav = () =>{
    return(
        <nav className="footer-nav">
            <div className="container row p-5 text-center">
                <div className="navbar-brand col-md-4">
                    <img src={Logo} alt="" />
                </div>
                <div className="d-flex justify-content-between text-align-center row col-md-4">
                    <ul className="col-md-4">
                        <li>
                            <span className='text-light fw-bold mb-3'>
                                Features
                            </span>
                        </li>
                        <li>
                            <a className="text-muted" href="#">
                                Link Shortening
                            </a>
                        </li>
                        <li>
                            <a className="text-muted" href="#">
                                Branded Links
                            </a>
                        </li>
                        <li>
                            <a className="text-muted" href="#">
                                Analytics
                            </a>
                        </li>
                    </ul>
                    <ul className="col-md-4">
                    <li>
                            <span className='text-light fw-bold mb-3'>
                                Resources
                            </span>
                        </li>
                        <li>
                            <a className="text-muted" href="#">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a className="text-muted" href="#">
                                Developers
                            </a>
                        </li>
                        <li>
                            <a className="text-muted" href="#">
                                Support
                            </a>
                        </li>
                    </ul>
                    <ul className="col-md-4">
                        <li>
                            <span className='text-light fw-bold mb-3'>
                                Company
                            </span>
                        </li>
                        <li>
                            <a className="text-muted" href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="text-muted" href="#">
                                Our Team
                            </a>
                        </li>
                        <li>
                            <a className="text-muted" href="#">
                                Carreers
                            </a>
                        </li>
                        <li>
                            <a className="text-muted" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="links col-md-4">
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Pinterest} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            
        </nav>
    )
}
export default FooterNav