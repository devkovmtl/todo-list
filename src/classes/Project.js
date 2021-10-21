import { v4 as uuidV4 } from 'uuid'

class Project {
  constructor(name = 'Default Name') {
    this.id = uuidV4()
    this.name = name
    this.todoList = []
  }

  getName() {
    return this.name
  }

  setName(name) {
    this.name = name
  }

  getTodoList() {
    return this.todoList
  }

  getSpecificTodo(todoId) {
    return this.todoList.find((t) => t.id === todoId)
  }

  addTodoToProject(todo) {
    this.todoList.push(todo)
  }

  removeTodofromProject(todoId) {
    this.todoList = this.todoList.filter((t) => t.id !== todoId)
  }
}

export default Project
