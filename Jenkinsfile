pipeline {
   agent { label 'agent1' }
    tools {
        nodejs 'nodejenkins' 
    }
    stages {
        stage('build') {            
            steps {
                sh 'ls'
                sh 'npm install'
            }
        }
        stage('unit test') {            
            steps {
                sh ' npm run test'                 
            }
        }
        stage('analisis code') {            
            steps {                    
                sh 'chmod +x sonar.sh && ./sonar.sh 1'
                sh ' npm run sonar'                 
            }
        }
    }
}