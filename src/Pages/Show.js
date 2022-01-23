import { Container } from "react-bootstrap"
import TransactionDetails from "../Components/TransactionDetails"

export default function Show() {
    return(
        <Container className="my-5">
            <TransactionDetails />
        </Container>
    )
}