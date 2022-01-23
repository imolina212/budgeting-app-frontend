//Dependencies
import { Link  } from "react-router-dom"

export default function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <a href="#" className="navbar-brand text-primary">Budget App</a>
                </Link>
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
                            <Link to='/'>
                                <a href="#overview" className="nav-link">Overview</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/transactions/new'>
                                <a href="#newform" className="nav-link">New Transaction</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/transactions'>
                                <a href="#transactions" className="nav-link">View Transactions</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/transactions/budget'>
                                <a href="#transactions" className="nav-link">View Budgets</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}