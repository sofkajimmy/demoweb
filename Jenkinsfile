pipeline {
    agent any
    stages {
        stage('build') {
            agent {
                docker {
                    image 'node:12.16.2'
                    args '-p 3000:3000'
                    // Run the container on the node specified at the top-level of the Pipeline, in the same workspace, rather than on a new node entirely:
                    reuseNode true
                }
            }
            steps {
                sh ' npm install'                 
            }
        }
    }
}