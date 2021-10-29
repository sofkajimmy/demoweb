pipeline {
    agent any   
    stages {
        stage('build') {            
            steps {
                sh ' npm install'                 
            }
        }
        stage('test') {            
            steps {
                sh ' npm run test'                 
            }
        }
        stage('analisis code') {            
            steps {
                sh ' npm run sonar'                 
            }
        }
    }
}