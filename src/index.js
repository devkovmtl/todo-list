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

const projectForm = document.querySelector('.project-form')
const todoForm = document.querySelector('.todo-form')

const defaultProject = new Project(DEFAULT_PROJECT)
const app = new App()
app.addProject(defaultProject)

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

projectForm.addEventListener('submit', addProject)

function addProject(e) {
  e.preventDefault()
  const projectName = this.querySelector('[name=name]').value
  if (!projectName) {
    alert('Project Name is required')
    console.log('Project Name is required')
    return
  }
  const project = new Project(projectName)
  console.log('Project created', project)
  app.addProject(project)
  console.log(app)
  projectModal.classList.add('hidden')
}

// console.log(app)ssss

// body.innerHTML += `
// <header class="flex items-center justify-between">
// <h2 class="text-lg leading-6 font-medium bg-gray-900 text-green-500">Projects test</h2>
// </header>
// `
// import { App, Todo, Project } from './classes'

// const root = document.querySelector('#root')

// function appInitialization() {
//   const project = new Project('Default Project')

//   const newTodo = new Todo('My New Todo', 'Some new Description')
//   project.addTodoToProject(newTodo)

//   app.addProject(project)
// }

// ;(() => appInitialization())()
// console.log(app)
