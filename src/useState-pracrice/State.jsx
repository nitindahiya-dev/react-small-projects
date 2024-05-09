import { useState } from "react"
import "./state.css"

const State = () => {
    
    const [name, setName] = useState("Click Here To Update Loading")

    let ChangeText = () => {
        let val = "loading is Done..!!"
        setName(val)
    }

  return (
    <div className="container">
    <div className="main-content">
        <h1>{name}</h1>
        <button className="btn btn-pause" onClick={ChangeText}>
        Submit
        </button>
    </div>
    </div>
  )
}

export default State;
