import JavaScript from "./java-script";
import Nav from "../../nav";
import Classes from "./classes"
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import ToDoItem from "./todo/to-do-item"
import ToDoList from "./todo/todo-list"
function Assignment3() {
 return (
   <div>
     <Nav/>
     <h1>Assignment 3</h1>
     <ToDoItem/>
     <ToDoList/>
     <ConditionalOutput/>
     <Styles/>
     <Classes/>
     <JavaScript/>
   </div>
 );
}
export default Assignment3;