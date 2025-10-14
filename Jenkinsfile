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
    always {
      sh 'docker ps --filter "name=$CONTAINER" || true'
      script {
        if (env.DISCORD_WEBHOOK?.trim()) {
          def title = "${env.JOB_NAME} #${env.BUILD_NUMBER}"
          def desc = """**Result:** ${currentBuild.currentResult}
**Branch:** ${env.GIT_BRANCH}
**Commit:** ${env.GIT_SHA}
**Author:** ${env.GIT_AUTHOR}
**Message:** ${env.GIT_MSG}"""
          discordSend(
            description: desc,
            footer: "Docker: ${env.IMAGE} → ${env.CONTAINER}",
            link: env.BUILD_URL,
            result: currentBuild.currentResult,
            title: title,
            webhookURL: env.DISCORD_WEBHOOK
          )
        } else {
          echo 'DISCORD_WEBHOOK not set. Skipping Discord notification.'
        }
      }
    }
  }
}
