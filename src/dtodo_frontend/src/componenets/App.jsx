import React from "react";
import {Input_field} from "./input";
import List_item from "./list";
import List_head from "./head";
import {dtodo_backend} from "../../../declarations/dtodo_backend";
import "/src/index.css";


// THIS IS THE BASIC TO DO LIST REACT APP.

function App(){
  let [item, setitem] = React.useState("")
  let [arr, setarr] = React.useState([]) 

  // THIS WILL STORE THE INPUT BY USER AS ITEM.
  function update_item(event){
    let value = event.target.value
    setitem(value);
  }
  //-----------------------------------//
  // THIS WILL ADD THE LIST ITEM IN OUR ARRAY(arr).
  // ONCLICK THE 'add' FUNCTION WILL TRIGGER.
  // FOR STORING DATA.
  function add(){
    setarr((pre_item)=>{
      dtodo_backend.createNote(item);  //
      return [...pre_item, item];
    });
  }
  //--------------------------------//
  // FOR RETREIVING THE DATA.
  React.useEffect(()=>{
    fetchData();
  }, []);

  async function fetchData(){
    console.log("data is retreive");
    var read_Notes = await dtodo_backend.readNotes();
    setarr(read_Notes);
  }
  //---------------------------------//

  // THIS FUNCTION IS USED TO DELETE THE LIST ITEM FROM OUR ITEM ARRAY(arr).
  function deleteitem(event){
    let id = event.target.index;
    dtodo_backend.removeNote(id);
    setarr((pre_item)=>{
      return pre_item.filter(index=>{
        return index !== id;
      }) 
    })
  }
  //---------------------------------//
  return (
    <div className="content">
      <List_head></List_head>

      <Input_field
        update_item={update_item}
        add={add}
      ></Input_field>

      <ul className="list_item">
          {arr.map((num, index)=>{
            dtodo_backend.removeNote(index);
            return <List_item num={num}  index={index} key={index} deleteitem={deleteitem}></List_item>
          })}
      </ul>
    </div>
  );
}

export default App;