import { TodoForm } from '../../ui/TodoForm';
import {useTodos} from '../useTodos'

function NewTodoPage() {

    const {stateUpdaters} = useTodos();
    const {addTodo} = stateUpdaters;

    return (
        <TodoForm
        label="Escribe tu nuevo TODO"
        submitText="Añadir"
        submitEvent={(text)=>console.log(addTodo(text))}
        />
    )
}

export {NewTodoPage};