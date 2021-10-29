pipeline {
    agent any
    tool name: 'nodejenkins', type: 'nodejs'
    stages {
        stage('build') {            
            steps {
                sh ' npm install'                 
            }
        }
    }
}