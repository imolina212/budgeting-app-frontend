import Container from "react-bootstrap/Container"
import { Stack } from "react-bootstrap"
import BudgetCard from "../Components/BudgetCard"

export default function Index() {
    return(
        <Container>
            <Stack direction="horizontal" gap="2" className="mb-4">
                <h1 className="me-auto">Your current Budgets (Index)</h1>
            </Stack>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start" }}>
                <BudgetCard name="Food" amount={150} max={300} ></BudgetCard>
            </div>
        </Container>
    )
}