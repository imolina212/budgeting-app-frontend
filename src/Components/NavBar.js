//Dependencies
import { Link  } from "react-router-dom"

export default function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container">
                <Link to="/" className="navbar-brand text-primary" style={{textDecoration: 'none'}}>Budget App</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" style={{textDecoration: 'none'}}>
                                Overview
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/transactions/new' className="nav-link" style={{textDecoration: 'none'}}>
                                New Transaction
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/transactions' className="nav-link" style={{textDecoration: 'none'}}>
                                View Transactions
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/transactions/budget' className="nav-link" style={{textDecoration: 'none'}}>
                                View Budgets
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}