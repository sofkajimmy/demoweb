pipeline {
   agent { label 'aceptest' }
    tools {
        nodejs 'nodejenkins' 
    }
    stages {
        stage('build') {            
            steps {
                bat 'dir'
                bat 'npm install'
            }
        }
        stage('test') {            
            steps {
                bat ' npm run test'                 
            }
        }
        stage('analisis code') {            
            steps {
                bat ' echo " sonar"'                 
            }
        }
    }
}