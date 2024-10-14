import { useState } from "react"

import './Button.css'

export default function Button() {
    const [buy, setBuy] = useState("");

    function handleClick()
    {
        setBuy("Thanks for your purchase!")
    }

  return (
    <>
    <button className="buyButton" onClick={handleClick}>Buy</button>
    <p className="buyResponse">{buy}</p>
    </>
  )
}
