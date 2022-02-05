pipeline {
    agent any

    environment {
        IMAGE_NAME = 'nextjs'
        CONTAINER_NAME = "${IMAGE_NAME}-CONTAINER"
        URL_PATH = '/home/ubuntu/nextjs'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Build step'
                sh "docker stop ${CONTAINER_NAME} || true && docker rm ${CONTAINER_NAME} || true"
                sh "docker rm -f ${IMAGE_NAME} || true"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy..'
                sh "docker build -t ${IMAGE_NAME} ."
                sh "docker run -p 3000:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }

    post {
        always {
            echo 'One way or another, I have finished'
            deleteDir() /* clean up our workspace */
        }
        success {
            echo 'I succeeded!'
        }
        unstable {
            echo 'I am unstable :/'
        }
        failure {
            echo 'I failed :('
        }
        changed {
            echo 'Things were different before...'
        }
    }
}
