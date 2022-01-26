import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Stack , Button } from "react-bootstrap"

export default function NewForm() {
  let { id } = useParams();
  const navigate = useNavigate();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/transactions/`, transaction)
      .then(()=> { navigate(`/transactions`)})

  }
  
  return(
    <form className="my-5">
      <Stack direction="vertical" gap="2">
          <label>Amount</label>
          <input 
          id="amount"
          value={transaction.amount}
          onChange={handleInput}
          type="number"
          placeholder="Enter Amount Here"
          required
          />
          <label>Date</label>
          <input
            id="date"
            value={transaction.date}
            type="text"
            onChange={handleInput}
            placeholder="Enter Date Here"
            required
          />
          <label>From</label>
          <input
            id="from"
            value={transaction.from}
            type="text"
            onChange={handleInput}
            placeholder="Input Sender Here"
            required
          />
          <label>Name</label>
          <input
            id="name"
            className="mb-2"
            value={transaction.name}
            type="text"
            onChange={handleInput}
            placeholder="Enter Transaction Name Here"
            required
          />
          <select className="form-select my-2" name="category">
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
          <textarea className="form-control rounded-0" id="" rows="3" placeholder="Description (optional)"></textarea>
      </Stack>
      <Button className="my-4" onClick={handleSubmit}>Submit</Button>
    </form>
  )
}
