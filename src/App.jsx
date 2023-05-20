

import { useState } from "react"
import "./styles.css"


export default function App(){
  const [newItem,setNewItem] = useState("")

  return(
    
    <>
    
    <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">
        New Item
      </label>
      <input 
      value={newItem}
      onChange={e => setNewItem(e.target.value)
      }
      type = "text"
       id="item"/>
    </div>

    <button className="btn">ADD</button>
  </form>
  <h1 className="header">To Do List</h1>
  <ui className="list"> 
  <li>
    <label>
      <input type="checkbox"/>
        Item1
    </label>
      <button className="btn btn-danger">Delete</button>
    
  </li>
  </ui>

  </>
  )
}
