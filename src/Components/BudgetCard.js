import { Card, ProgressBar , Stack , Button } from "react-bootstrap";
import { currencyFormatter } from "../utils";

export default function BudgetCard({ name, amount, max, gray }) {
    // const [transaction, setTransaction] = useState([]);
    // const { id } = useParams();

    // useEffect(() => {
    //     axios
    //         .get(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
    //         .then((response) => setTransaction(response.data));
    // }, [id]);


    const classNames = []
    if(amount > max) {
        classNames.push("bg-danger", "bg-opacity-10")
    } else if (gray) {
        classNames.push("bg-light")
    }

    return (
        <Card className={classNames.join(" ")}>
        <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
            <div className="me-2">{name}</div>
            <div className="d-flex align-items-baseline">
                {currencyFormatter.format(amount)}{" "}
                <span className="text-muted fs-6 ms-1">
                / {currencyFormatter.format(max)}
                </span>
            </div>
            </Card.Title>
            <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
            />
            <Stack className="mt-4" direction="horizontal" gap="2">
                <Button className="btn-sm ms-auto" variant="outline-primary">Add Expense</Button>
                <Button className="btn-sm" variant="primary">View Budget</Button>
            </Stack>
        </Card.Body>
        </Card>
    );
}

function getProgressBarVariant(amount, max) {
  const ratio = amount / max;
  if (ratio < 0.5) {return "success"}
  if (ratio < 0.75) {return "warning"}
  return "danger";
}
