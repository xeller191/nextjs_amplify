pipeline {
    agent any
    environment {
        IMAGE_NAME = 'NextJS'
        CONTAINER_NAME = "${IMAGE_NAME}-CONTAINER"
    }

    stages {
        stage('Build') {
            steps {
                //
                sh 'echo STAGE01 Build'
            }
        }
        stage('Test') {
            steps {
                //
                sh 'echo STAGE02 Test'
            }
        }
        stage('Deploy') {
            sh "docker stop ${CONTAINER_NAME} || true && docker rm ${CONTAINER_NAME} || true"
            sh "docker rm -f ${IMAGE_NAME} || true"
            sh "docker run \
            --name ${IMAGE_NAME} \
            ${CONTAINER_NAME}"
        }
    }
}
