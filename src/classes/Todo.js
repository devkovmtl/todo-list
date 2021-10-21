import { v4 as uuidV4 } from 'uuid'
import { PRIORITY } from '../constants'

class Todo {
  constructor(
    title = 'Default Title',
    description = 'Default Description',
    dueDate = Date.now(),
    priority = PRIORITY[0],
    notes = '',
    checklist = []
  ) {
    this.id = uuidV4()
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.checklist = checklist
  }

  getTitle() {
    return this.title
  }

  setName(title) {
    this.title = title
  }

  getDescription() {
    return this.description
  }

  setDescription(description) {
    this.description = description
  }

  getDueDate() {
    return this.dueDate
  }

  setDueDate(date) {
    this.dueDate = date
  }

  getPriority() {
    return this.priority
  }

  setPriority(priority) {
    this.priority = priority
  }

  getNotes() {
    return this.notes
  }

  setNotes(note) {
    this.notes = note
  }

  getCheckList() {
    return this.checklist
  }

  setCheckList(check) {
    this.checklist.push(check)
  }
}

export default Todo
