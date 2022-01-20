import { Link } from "react-router-dom"

export default function Transaction({transaction, id}) {
    return(
        <tr>
            <td>{transaction.date}</td>
            <Link to={`/transactions/${id}`}>
                <td>{transaction.name}</td>
            </Link>
            <td>{transaction.amount}</td>
        </tr>
    );
}
