import { Container } from "react-bootstrap"
import NewForm from "../Components/NewForm";

export default function New() {
    return (
        <Container className="my-5">
            <h3>New Transaction Form</h3>
            <NewForm />
        </Container>
    );
}
