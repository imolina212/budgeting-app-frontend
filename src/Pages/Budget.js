import Container from "react-bootstrap/Container"
import { Stack } from "react-bootstrap"
import BudgetCard from "../Components/BudgetCard"

export default function Budget() {
    return(
        <Container className="my-5" gap="2">
                <h2 className="me-auto">Budget</h2>
            <Stack className="my-4" direction="vertical" gap="3">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start" }}>
                    <BudgetCard name="Food" amount={75} max={100}></BudgetCard>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start" }}>
                    <BudgetCard name="Entertainment" amount={50} max={100}></BudgetCard>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start" }}>
                    <BudgetCard name="Total" amount={1200} max={1000}></BudgetCard>
                </div>
            </Stack>
        </Container>
    );
}
