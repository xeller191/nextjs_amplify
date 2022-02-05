pipeline {
    agent any

    environment {
        IMAGE_NAME = 'NextJS'
        CONTAINER_NAME = "${IMAGE_NAME}-CONTAINER"
        URL_PATH = '/home/ubuntu/nextjs'
    }

    stages {
        stage('prepare') {
            steps {
                echo 'prepare build'
                sh 'echo STAGE01 Build'
                git branch: 'main', url: 'https://github.com/xeller191/nextjs_amplify.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Build step'
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
                dir("${URL_PATH}") {
                    sh 'pwd'
                    sh 'sudo chown -R jenkins:jenkins /var/lib/jenkins/'
                    sh "docker build -t ${IMAGE_NAME} ."
                    sh "docker run -p 3000:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
                }
            }
        }
    }
}
