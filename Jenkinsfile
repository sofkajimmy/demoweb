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
        stage('Deploy') {            
            steps {
                sh ' docker run -d -p  81:80 cabunga/demoweb:${BUILD_NUMBER}'                 
            }
        }
        stage('Functional Test') {            
            steps {
                sh 'git clone https://github.com/sofkajimmy/aceptestmvn.git && cd aceptestmvn && chmod +x run.sh && ./run.sh'                 
            }
        }
        stage('Performance Test') {            
            steps {
                sh ' git clone https://github.com/sofkajimmy/performancetest.git && cd performancetest \
              ls && chmod +x test.sh \
              ./test.sh'                 
            }
        }
        stage('Security Test') {            
            steps {
                sh ' echo "owasp test"'                 
            }
        }
    }
}