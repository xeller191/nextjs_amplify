pipeline {
    agent any

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
                dir('/home/ubuntu/nextjs') {
                    sh 'pwd'
                }
                sh 'sudo chmod 775 /home/ubuntu/nextjs'
                sh 'docker build -t nextjs01 .'
                sh 'docker run -p 3000:3000 --name ct-nextjs01 nextjs01'
            }
        }
    }
}
