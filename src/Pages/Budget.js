import Container from "react-bootstrap/Container"
import { Stack } from "react-bootstrap"
import BudgetCard from "../Components/BudgetCard"

export default function Budget() {
    return(
        <Container className="my-5">
            <Stack direction="horizontal" gap="2" className="mb-4">
                <h2 className="me-auto">Budget</h2>
            </Stack>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start" }}>
                <BudgetCard name="Food" amount={75} max={100}></BudgetCard>
            </div>
        </Container>
    );
}
