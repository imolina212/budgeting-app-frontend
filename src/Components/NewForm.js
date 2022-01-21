import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack } from "react-bootstrap"

export default function NewForm() {
  let { id } = useParams();

  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
  })

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data)
    })
    .catch((err) => console.log('catch', err))
  }, [])
  
  return(
    <form>
      <Stack>
      <input
          id=""
          value={transaction.date}
          type="text"
          placeholder="Enter Date Here"
        />
        <input
          id=""
          value={transaction.from}
          type="text"
          placeholder="Input Sender Here"
        />
        <input
          id=""
          value={transaction.name}
          type="text"
          placeholder="Enter Transaction Name Here"
        />
        <input 
        id=""
        value={transaction.category}
        type="text"
        placeholder="Enter Category Here"/>
        <input 
        id=""
        value={transaction.amount}
        type="text"
        placeholder="Enter Amount Here"/>
      </Stack>
      <div class="btn btn-primary my-4">Submit</div>
    </form>
  )
}
