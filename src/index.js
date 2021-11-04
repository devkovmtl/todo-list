import './styles/index.css'

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

// body.innerHTML += `
// <header class="flex items-center justify-between">
// <h2 class="text-lg leading-6 font-medium bg-gray-900 text-green-500">Projects test</h2>
// </header>
// `
// import { App, Todo, Project } from './classes'

// const root = document.querySelector('#root')

// const app = new App()

// function appInitialization() {
//   const project = new Project('Default Project')

//   const newTodo = new Todo('My New Todo', 'Some new Description')
//   project.addTodoToProject(newTodo)

//   app.addProject(project)
// }

// ;(() => appInitialization())()
// console.log(app)
