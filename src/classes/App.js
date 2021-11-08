class App {
  constructor() {
    this.projects = []
    this.defaultProject = null
    this.selectedProject = null
  }

  setDefaultProject(project) {
    this.defaultProject = project
  }

  getDefaultProject() {
    return this.defaultProject
  }

  setSelectedProject(project) {
    this.selectedProject = project
  }

  getSelectedProject() {
    return this.selectedProject
  }

  addProject(project) {
    this.projects.push(project)
  }

  getProjectsList() {
    return this.projects
  }

  getProjectById(projectId) {
    return this.projects.find((p) => p.id === projectId)
  }

  deleteProjectById(projectId) {
    this.projects = this.projects.filter((p) => p.id !== projectId)
  }
}

export default App
