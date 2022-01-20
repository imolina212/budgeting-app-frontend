//Dependencies
import { Link  } from "react-router-dom"
import { Button, Container , Stack} from "react-bootstrap"

export default function NavBar() {
    return(
        <Container className="my-4">
            <Stack direction="horizontal" gap="2" className="mb-5">
                <Link to="/transactions/budget" style={{textDecoration: "none",}}>
                    <h1 className="me-auto">Budget App</h1>
                </Link>
                <Link to="/transactions/new">
                    <Button variant="primary">New Transaction</Button>
                </Link>
                <Link to="/transactions">
                    <Button variant="primary">View Transactions</Button>  
                </Link>
            </Stack> 
        </Container>
    )
}