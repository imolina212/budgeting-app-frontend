import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <form></form>
  )
}