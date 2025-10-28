import { useTodos } from './useTodos'
import { TodoHeader } from '../TodoHeader'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodosError } from '../TodosError'
import { TodosLoading } from '../TodosLoading'
import { EmptyTodos } from '../EmptyTodos'
import { TodoForm } from '../TodoForm'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { ChangeAlert } from '../ChangeAlert'

export default function App() {
  // Estado global del hook personalizado
  const { state, stateUpdaters } = useTodos()

  // Desestructuración de valores de estado
  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    openModal,
    searchValue,
  } = state

  // Desestructuración de funciones actualizadoras
  const {
    setOpenModal,
    addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters

  return (
    <>
      {/* Cabecera */}
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      {/* Lista de tareas */}
      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(text) => (
          <p className="text-center text-gray-600">
            No hay resultados para <strong>{text}</strong>
          </p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {/* Modal para agregar TODO */}
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      {/* Botón flotante */}
      <CreateTodoButton setOpenModal={setOpenModal} />

      {/* Alerta de sincronización */}
      <ChangeAlert sincronize={sincronizeTodos} />
    </>
  )
}
