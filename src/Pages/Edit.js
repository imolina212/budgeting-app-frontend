import { Container } from "react-bootstrap"
import EditForm from "../Components/EditForm";

export default function Edit() {
    return (
        <Container className="my-5">
            <h3>Edit Transaction</h3>
            <EditForm />
        </Container>
    );
}