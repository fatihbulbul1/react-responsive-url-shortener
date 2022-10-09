import Logo from '../images/logo.svg'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container pt-2">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" />
        </a>
        <button
          className=" border-0 navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="ms-2 gap-3 navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resources
              </a>
            </li>
          </ul>
          <ul role="search" className="navbar-nav gap-4">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Pricing
                    </a>
                </li>
                <li className="nav-item round-btn px-2 rounded-pill">
                    <a className="nav-link text-light" href="#">
                        Sign Up
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
