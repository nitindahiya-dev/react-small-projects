import "./to-do-list.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const ToDoList = () => {

  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);


  let addItems = () => {
    if(!inputData){

    }else{
    setItems([...items, inputData])
    setInputData("") 
    }
    
  }

  let del = (id) => {
    let updatedItem = items.filter((elem, ind)=>{
      return ind !== id; 
    })

    setItems(updatedItem)
  }

  let removeAll = () => {
    setItems([])
  }

  return (
    <div className="to-do-container">
      <div className="center-content">
        <div className="todoimg">
          <img src={require('../todolist/img/note.png')} alt="" />
        </div>
        <div className="todoheading">
          <h4>Add Your List Here</h4><img src={require('../todolist/img/victory.png')} alt="" />
        </div>

        <div className="addItems">
          <input type="text" placeholder="✍️ Add Items..."
          value={inputData} onChange={(e) => setInputData(e.target.value)}
          />
          <FontAwesomeIcon icon={faPlus} title="Add Item" onClick={addItems} /> 
        </div>


        {
          items.map((elem,ind) => {
            return(
              <div className="showItem" key={ind}>
            <div className="eachItem">
              <h3>{elem}</h3>
            <FontAwesomeIcon icon={faTrash} title="Delete Item" onClick={() => del(ind)} /> 
            </div>
          </div>
            )
            
          }) 
        }

        <div className="showItem">
          <button className="delete-btn" onClick={removeAll}>REMOVE ALL</button>
        </div>

      </div>
    </div>
  )
}

export default ToDoList;