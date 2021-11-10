import './styles/index.css'
import { App, Project, Todo } from './classes'
import { DEFAULT_PROJECT } from './constants'

const btnMenuNav = document.querySelector('.btnMenuNav')
const sideNav = document.querySelector('.side-nav')
const overlay = document.querySelector('.overlay')

const addProjectBtn = document.querySelector('.add-project-btn')
const projectModal = document.querySelector('.project-modal')
const submitBtnProject = document.querySelector('.submit-btn-project')
const cancelBtnProject = document.querySelector('.cancel-btn-project')

const addBtnTodo = document.querySelector('.add-btn-todo')
const todoModal = document.querySelector('.todo-modal')
const submitBtnTodo = document.querySelector('.submit-btn-todo')
const cancelBtnTodo = document.querySelector('.cancel-btn-todo')

const projectList = document.querySelector('.project-list')

const projectForm = document.querySelector('.project-form')
const todoForm = document.querySelector('.todo-form')
const projectTitleName = document.querySelector('.project-title-name')
const containerTodoList = document.querySelector('.container-todo-list')

const defaultProject = new Project(DEFAULT_PROJECT)

const app = new App()

app.addProject(defaultProject)
app.setDefaultProject(defaultProject)
app.setSelectedProject(defaultProject)
projectTitleName.innerHTML = `${app.getSelectedProject().name}`
projectList.innerHTML += `
  <li
  class="
    text-lg
    p-2
    pl-8
  "
  id="projectID#${defaultProject.id}"
  >
  <button
  class="select-project-btn hover:cursor-pointer hover:text-white hover:underline"
>
  ${DEFAULT_PROJECT}</button>
  </li>
`

btnMenuNav.addEventListener('click', (e) => {
  sideNav.classList.toggle('-translate-x-full')
  overlay.classList.toggle('hidden')
})

overlay.addEventListener('click', (e) => {
  sideNav.classList.toggle('-translate-x-full')
  overlay.classList.toggle('hidden')
})

addProjectBtn.addEventListener('click', (e) => {
  projectModal.classList.toggle('hidden')
})

addBtnTodo.addEventListener('click', (e) => {
  todoModal.classList.toggle('hidden')
})

cancelBtnProject.addEventListener('click', (e) => {
  projectModal.classList.add('hidden')
})
cancelBtnTodo.addEventListener('click', (e) => {
  todoModal.classList.add('hidden')
})

submitBtnProject.addEventListener('click', (e) => {
  projectModal.classList.add('hidden')
})

submitBtnTodo.addEventListener('click', (e) => {
  todoModal.classList.add('hidden')
})

projectList.addEventListener('click', (e) => {
  if (!e.target.matches('button')) return
  if (e.target.classList.contains('select-project-btn')) {
    const liId = e.target.parentElement.id
    setAppSelectedProject(liId.split('#')[1])
  }
  if (e.target.classList.contains('delete-project-btn')) {
    const liId = e.target.parentElement.id
    delectProjectFromApp(liId.split('#')[1])
  }
})

containerTodoList.addEventListener('click', (e) => {
  if (!e.target.matches('button')) return
  if (e.target.classList.contains('confirm-todo-btn')) {
    //
    const divId = e.target.parentElement.parentElement.id
    const todoList = app.getSelectedProject().getTodoList()
    const todo = todoList.find((el) => el.id === divId)
    todo.setIsDone(!todo.getIsDone())
    populateTodoList(app.getSelectedProject().getTodoList())
  }
  if (e.target.classList.contains('delete-todo-btn')) {
    //
    const divId = e.target.parentElement.parentElement.id
    app.getSelectedProject().removeTodofromProject(divId)
    populateTodoList(app.getSelectedProject().getTodoList())
  }
})

projectForm.addEventListener('submit', addProject)
todoForm.addEventListener('submit', addTodo)

function setAppSelectedProject(projectId) {
  const project = app.getProjectById(projectId)
  app.setSelectedProject(project)

  projectTitleName.innerHTML = `${app.getSelectedProject().name}`
  populateTodoList(project.todoList)
}

function delectProjectFromApp(projectId) {
  const confirm = window.confirm(
    'Are you sure you want to delete this project?'
  )
  if (!confirm) return

  app.deleteProjectById(projectId)

  if (projectId === app.getSelectedProject().id) {
    const defaultProject = app.getDefaultProject()
    app.setSelectedProject(defaultProject)
    projectTitleName.innerHTML = `${app.getSelectedProject().name}`
  }

  populateProjectList(app.projects)
}

function addProject(e) {
  e.preventDefault()
  const projectName = this.querySelector('[name=name]').value
  if (!projectName) {
    return
  }
  const project = new Project(projectName)
  app.addProject(project)
  projectModal.classList.add('hidden')
  populateProjectList(app.projects)
}

function populateProjectList(projects = []) {
  projectList.innerHTML = ''
  projectList.innerHTML = projects
    .map((project, i) => {
      if (project.name === DEFAULT_PROJECT) {
        return `
      <li
      id="projectID#${project.id}"s
      class="
        text-lg
        p-2
        pl-8
      "
    >
      <button
      class="select-project-btn hover:cursor-pointer hover:text-white hover:underline"
    >
      ${project.name}
    </button>
    </li>
      `
      }
      return `
      <li class="text-lg p-2 pl-8 flex justify-between" id="projectID#${project.id}">
        <button
          class="select-project-btn hover:cursor-pointer hover:text-white hover:underline"
        >
          ${project.name}
        </button>
        <button class="delete-project-btn
        hover:cursor-pointer
        hover:text-white
        hover:bg-gray-50
        hover:bg-opacity-10
        p-2
        rounded-full">
        🗑
        </button>
      </li>
    `
    })
    .join('')
}

function addTodo(e) {
  e.preventDefault()
  const title = this.querySelector('[name=title]').value
  const description = this.querySelector('[name=description]').value
  const dueDate = this.querySelector('[name=dueDate]').value
  const priority = this.querySelector('[name=priority]').value

  if (!title) {
    document.alert('Title is required')
    return
  }
  const todo = new Todo(
    title,
    description,
    new Date(dueDate) || Date.now(),
    priority,
    false
  )
  // get the current selected project
  const selectedProject = app.getSelectedProject()

  selectedProject.addTodoToProject(todo)
  populateTodoList(selectedProject.todoList)
  todoModal.classList.add('hidden')
}

function populateTodoList(todos = []) {
  containerTodoList.innerHTML = ''
  containerTodoList.innerHTML = todos.map((todo, i) => {
    return `
    <!-- TODO CARD -->
    <div
      id="${todo.id}"
      class="
        todo
        ${todo.isDone ? 'bg-green-100' : ''}
        border-2 border-gray-400
        p-1
        max-w-sm
        rounded-md
        flex flex-col
        mx-auto
        shadow-md
      "
    >
      <div class="flex justify-between space-x-5 items-center">
        <h3 class="text-lg font-medium p-2 flex-1 ${
          todo.isDone ? 'line-through' : ''
        }">
          ${todo.title}
        </h3>
        <div class="flex flex-col items-end space-y-2 p-2">
          <p class="text-base font-light uppercase ${
            todo.priority === 'low'
              ? 'text-blue-500'
              : todo.priority === 'medium'
              ? 'text-yellow-500'
              : 'text-red-500'
          } ${todo.isDone ? 'line-through' : ''}">${todo.priority}</p>
          <p class="text-xs font-extralight ${
            todo.isDone ? 'line-through' : ''
          }">${todo.dueDate.toLocaleDateString()}</p>
        </div>
      </div>
      <div class="p-3 text-base font-light">
        <p>
        ${todo.description}
        </p>
      </div>
      <div class="flex justify-between px-6 py-1">
        <button
          class="
            confirm-todo-btn
            hover:bg-green-400 hover:bg-opacity-25 hover:text-green-700
            p-2
            rounded-full
            transition
            duration-150
          "
        >
        ✔
        </button>
          <button
            class="
              delete-todo-btn
              hover:bg-red-400 hover:bg-opacity-25 hover:text-red-700
              p-2
              rounded-full
              transition
              duration-150
            "
          >
          🗑
        </button>
      </div>
    </div>
    <!-- End OF TODO CARD -->
    `
  })
}
