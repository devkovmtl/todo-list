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

projectForm.addEventListener('submit', addProject)
todoForm.addEventListener('submit', addTodo)

function setAppSelectedProject(projectId) {
  console.log(projectId)
  const project = app.getProjectById(projectId)
  app.setSelectedProject(project)
  console.log(app)
  projectTitleName.innerHTML = `${app.getSelectedProject().name}`
}

function delectProjectFromApp(projectId) {
  const confirm = window.confirm(
    'Are you sure you want to delete this project?'
  )
  if (!confirm) return

  app.deleteProjectById(projectId)

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

  // projectList.innerHTML += `
  // <li class="text-lg p-2 pl-8 flex justify-between" id="projectID#${project.id}">
  //   <button
  //     class="select-project-btn hover:cursor-pointer hover:text-white hover:underline"
  //   >
  //     ${project.name}
  //   </button>
  //   <button class="delete-project-btn
  //   hover:cursor-pointer
  //   hover:text-white
  //   hover:bg-gray-50
  //   hover:bg-opacity-10
  //   p-2
  //   rounded-full">
  //   🗑
  //   </button>
  // </li>
  // `
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
  alert(e)
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
