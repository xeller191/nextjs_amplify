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
                sh 'cd /var/lib/jenkins/workspace/TestBuildDocker'
                sh 'docker build -t dokcer123 .'
                sh 'docker run -p 3000:3000 --name Docker-Nextjs dokcer123'
            }
        }
    }
}
