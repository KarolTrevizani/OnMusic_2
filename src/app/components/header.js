import Link from 'next/link';

export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/images/logo.png" alt="Logo" width="35" height="30" className="d-inline-block align-text-top"/>
                    OnMusic
                </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                
                </li>
                <li className="nav-item">
                <Link href="/faq">FAQ</Link>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="../pages/form_one.html">Registre-se</a>
                </li>
            </ul>
            <span className="navbar-text">
                Music is our culture
            </span>
            </div>
        </div>
        </nav>
    )
}