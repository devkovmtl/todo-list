class App {
  constructor() {
    this.projects = []
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
    return this.projects.filter((p) => p.id !== projectId)
  }
}

export default App
