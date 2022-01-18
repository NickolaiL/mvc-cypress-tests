pipeline {
  agent any

  tools {nodejs "nodejs"}

  stages {
    stage('run test') {
      environment {
        CYPRESS_RECORD_KEY = credentials('todo-mvc-record-key')
      }

      steps {
        sh 'npm ci'
        sh "npm run ci-run"
      }
    }
  }
}