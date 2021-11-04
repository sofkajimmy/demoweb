pipeline {
   agent { label 'agent1' }
    tools {
        nodejs 'nodejenkins' 
    }
    stages {
        stage('build') {            
            steps {
                sh 'ls'
                sh 'npm install && npm run build'
            }
        }
        stage('container') {            
            steps {
                sh 'docker build -t demoweb .'                 
            }
        }
        stage('test') {            
            steps {
                sh ' npm run test'                 
            }
        }
        stage('analisis code') {            
            steps {    
                sh 'sed -i "s~_Organization_~${organization}~" sonar-project.properties'
                sh 'sed -i "s~_ProjectKey_~${projectKey}~" sonar-project.properties'
                sh 'sed -i "s~_Url_~${url}~" sonar-project.properties'
                sh 'sed -i "s~_Login_~${login}~" sonar-project.properties'
                sh ' npm run sonar'                 
            }
        }
    }
}