pipeline {
    agent { label 'dev && docker' }
    options { disableConcurrentBuilds() }
    triggers { githubPush() }
    environment {
        IMAGE = 'iamshitting/frontend:dev'
        CONTAINER = 'iamshitting-frontend-dev'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_MSG = sh(script: 'git log -1 --pretty=%s', returnStdout: true).trim()
                }
            }
        }
        stage('Build image') {
            steps { sh 'docker build -t $IMAGE .' }
        }
        stage('Deploy') {
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
                    def now = new Date().format("yyyy-MM-dd HH:mm:ss 'UTC'", TimeZone.getTimeZone('UTC'))
                    def title = "${env.JOB_NAME} #${env.BUILD_NUMBER}"
                    def desc = """**Result:** ${currentBuild.currentResult}
            **Changes:** ${env.GIT_COMMIT} | ${env.GIT_MSG}
            **Author:** ${env.GIT_AUTHOR}
            **Branch:** ${env.GIT_BRANCH}
            """
                    discordSend(
            description: desc,
            footer: "Finished at ${now}",
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
