import { Container } from "react-bootstrap"
import Transactions from "../Components/Transactions";

export default function Index() {
    return(
        <Container className="my-5">
            <Transactions />
        </Container>
    )
}