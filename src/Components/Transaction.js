import { Link } from "react-router-dom"
import { currencyFormatter } from "../utils";

export default function Transaction({transaction, index}) {
    return(
        <tr>
            <td>{transaction.date}</td>
            <td>
                <Link to={`/transactions/${index}`}>{transaction.name}</Link>
            </td>
            <td>{currencyFormatter.format(transaction.amount)}</td>
        </tr>
    );
}
