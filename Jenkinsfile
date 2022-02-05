pipeline {
    agent any

    environment {
        IMAGE_NAME = 'nextjs'
        CONTAINER_NAME = "${IMAGE_NAME}-CONTAINER"
        URL_PATH = '/home/ubuntu/nextjs'
    }

    stages {
        stage('RemoveOldImageAndDocker') {
            steps {
                echo 'Build step'
                echo 'Remove Old Docker and Image'
                sh "docker stop ${CONTAINER_NAME} || true && docker rm ${CONTAINER_NAME} || true"
                sh "docker rm -f ${IMAGE_NAME} || true"
            }
        }
        stage('BuildDocker') {
            steps {
                echo 'Deploy..'
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }
        stage('Deploy') {
            steps {
                echo 'Run Docker of Images'
                sh "docker run -d --rm -p 3000:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }

    post {
        always {
            deleteDir() // clean up our workspace
        }
        success {
            echo 'This pipeline run successful.'
        }
        failure {
            echo 'This pipeline is Fail.'
        }
    }
}
