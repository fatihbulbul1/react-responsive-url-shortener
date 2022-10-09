import Working from '../images/illustration-working.svg'
import ShortenLink from './ShortenLink';
const Header = () => {
    return(
        <div className="mt-5 pb-5 container header">
            <div className="row align-items-center mb-5 pt-5">
                <div className="desc-section col-md-6">
                    <p className='display-2 fw-bold'>More than just shorter links</p>
                    <p className='description fs-4 text-muted'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <button className="start round-btn text-light mt-3 fw-bold rounded-pill py-2">Get Started</button>
                </div>
                <div className="col-md-6">
                    <img className='working' src={Working} alt="" />
                </div>
            </div>
            <ShortenLink />
        </div>
    )
}
export default Header;