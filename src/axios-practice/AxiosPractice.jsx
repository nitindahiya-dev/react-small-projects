import './axiosPactice.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AxiosPractice = () => {

  const [data, setData] = useState([]);
  const [err, setErr] = useState([]);

  const useeApi = async() =>{
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setData(res.data)
    } catch (error) {
      setErr(error.message)
    }
  }

  useEffect(() => {
    useeApi();
  }, []);

  return (
    <div>
      <div className="axios-heading">
        <h1>Axios Tutorials</h1>
      </div>
      
      { err !== "" && <h2> {err}</h2> }

<div className="grid-container">
  {
    data.slice(0,9).map((post)=>{
      return(
        <div key={post.id} className="card">
          <h2>{post.title.slice(0,15).toUpperCase()}</h2>
          <p>{post.body.slice(0, 100)}</p>
        </div>
      )
    })
  }
</div>
    </div>
  )
}

export default AxiosPractice
