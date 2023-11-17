import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

function Addtodolist(props){
    var [state,setState] = useState({newTask : ""});
    function handleChange(evnt){
        setState({newTask:evnt.target.value}) 
    }

    var dispatch = useDispatch();
    function addNewTask(event){
        event.preventDefault();
        //console.log(event);
        if (state.newTask===""){
            alert ("Empty task is not allowed")
        }

        dispatch(addTodo(state.newTask));
        setState({newTask:''})
    }
    return <div style={{marginBottom :"80px" }} className="col-md-4 offset-md-4">

        <form onSubmit={addNewTask}>

            <div className="form-group">

                <label>Enter your new task </label>
                <input value={state.newTask} onChange={handleChange} type="text" className="form-control"/>

            </div>

            <button style={{float:"right"}} type="submit" className="btn btn-success">submit</button>

        </form>

        <h2>{state.newTask}</h2>

    </div>
}
export default Addtodolist;