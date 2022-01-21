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
  
  return(
    <form></form>
  )
}