const Button = ({ type, todo, handler }) => {
  const icon = (type) => {
    switch (type) {
      case 'complete':
        return <i className='fa fa-check-circle'></i>

      case 'edit':
        return <i className='fa fa-edit'></i>

      case 'delete':
        return <i className='fa fa-trash'></i>

      default:
        return null
    }
  }

  return (
    <button className={`task-button button-${type}`} onClick={() => handler(todo)}>
      {icon(type)}
    </button>
  )
}

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    const check = todos.map((item) => {
      if (item.id === todo.id) return { ...item, completed: !item.completed }

      return item
    })

    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }

        return item
      })
    )
  }

  const handleEdit = ({ id }) => {
    const todo = todos.find((todo) => todo.id === id)

    setEditTodo(todo)
  }

  const handleDelete = ({ id }) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id)

    setTodos(filteredTodo)
  }

  return (
    <>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
          <input type='text' value={todo.title} className={` list ${todo.completed ? 'complete' : ''}`} onChange={(e) => e.preventDefault()} />

          <Button type='complete' todo={todo} handler={handleComplete} />

          <Button type='edit' todo={todo} handler={handleEdit} />

          <Button type='delete' todo={todo} handler={handleDelete} />
        </li>
      ))}
    </>
  )
}

export default TodoList
