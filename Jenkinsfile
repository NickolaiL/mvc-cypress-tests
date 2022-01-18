pipeline {
  agent {
      docker {
      image 'cypress/base:10'
    }
  }

  stages {
    stage('run test') {
      environment {
        CYPRESS_RECORD_KEY = credentials('todo-mvc-record-key')
      }

      steps {
        sh 'npm ci'
        sh "npm run cypress --record "
      }
    }
  }
}