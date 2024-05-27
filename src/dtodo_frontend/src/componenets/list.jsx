import React from "react";
import {dtodo_backend} from "../../../declarations/dtodo_backend";
import "/src/index.css";

function List_item(props){

  let [isdone, setdone] = React.useState(false);
  // HERE IF 'isdone' IS FALSE THE LIST ITEM IS NOT DELETED.
  // OR IF 'isdone' IS TRUE THE LIST ITEM SHOULD BE DELETED.
  function add_line(){

    setdone((prev)=>{
      dtodo_backend.removeNote(props.index);
      return !prev;
    });
  }
  function delete_item(){
    props.deleteitem(id)
  }
  return (
       <li onClick={add_line}  id={props.index} style={isdone?{textDecoration:"line-through"}:{textDecoration:"none"}}>{props.num}</li>
  ); 
}

export default List_item; 