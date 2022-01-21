import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack } from "react-bootstrap"

export default function NewForm() {
  let { id } = useParams();

  const [transaction, setTransaction] = useState({
    amount: 0,
    date: "",
    from: "",
    name: "",
    description: "",
  })

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data)
    })
    .catch((err) => console.log('catch', err))
  }, [id])

  const handleInput = (event) => {
    setTransaction({...transaction, [event.target.id]: event.target.value})
  }
  
  return(
    <form className="my-5">
      <Stack direction="vertical" gap="2">
          <label>Choose amount:</label>
          <input 
          id="amount"
          value={transaction.amount}
          onChange={handleInput}
          type="number"
          placeholder="Enter Amount Here"
          required
          />
          <input
            id="date"
            value={transaction.date}
            type="text"
            onChange={handleInput}
            placeholder="Enter Date Here"
            required
          />
          <input
            id="from"
            value={transaction.from}
            type="text"
            onChange={handleInput}
            placeholder="Input Sender Here"
            required
          />
          <input
            id="name"
            class="mb-2"
            value={transaction.name}
            type="text"
            onChange={handleInput}
            placeholder="Enter Transaction Name Here"
            required
          />
          <select class="form-select" name="category">
            <option selected>Select a Category</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transportation">Transportation</option>
            <option value="Savings">Savings</option>
            <option value="Debt">Debt</option>
            <option value="Food">Food</option>
            <option value="Utilities">Utilities</option>
            <option value="Pet Care">Pet Care</option>
            <option value="Housing">Housing</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
          <textarea class="form-control rounded-0" id="" rows="3" placeholder="Description (optional)"></textarea>
      </Stack>
      <button className="btn btn-warning my-4">Submit</button>
    </form>
  )
}
