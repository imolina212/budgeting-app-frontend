export default function Transaction({transaction, index}) {
    return(
        <tr>
            <td>{transaction.date}</td>
            <td>{transaction.name}</td>
            <td>{transaction.amount}</td>
        </tr>
        );
}
