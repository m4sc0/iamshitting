pipeline {
  agent { label 'dev && docker' }
  options { disableConcurrentBuilds() }
  triggers { githubPush() }
  environment {
    IMAGE = 'iamshitting/frontend:dev'
    CONTAINER = 'iamshitting-frontend-dev'
  }
  stages {
    stage('Checkout'){ steps { checkout scm } }
    stage('Build image'){
      steps { sh 'docker build -t $IMAGE .' }
    }
    stage('Deploy'){
      steps {
        sh '''
          docker rm -f $CONTAINER || true
          docker run -d --name $CONTAINER --restart unless-stopped --network proxy $IMAGE
        '''
      }
    }
  }
  post {
    always { sh 'docker ps --filter "name=$CONTAINER" || true' }
  }
}
