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
                sh 'exit 1'
            }
            post {
                always {
                    echo 'Pipeline result: Success'
                }
            }
        }
        post {
            always {
                echo 'Pipeline result: Success'
            }
        }
    }
}
