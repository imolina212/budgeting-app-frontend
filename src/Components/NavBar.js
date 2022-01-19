//Dependencies
import { Link  } from "react-router-dom"
import { Button, Container , Stack} from "react-bootstrap"

export default function NavBar() {
    return(
        <Container className="my-4">
            <Stack direction="horizontal" gap="2" className="mb-5">
                <h1 className="me-auto">Budget App</h1>
                <Button variant="primary">New Transaction</Button>
            </Stack> 
        </Container>
    )
}