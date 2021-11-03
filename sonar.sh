#!/bin/bash

if [[ $1 -eq 1 ]]
then
    echo " ---  Jenkins----"
    sed -i "s~_Organization_~${organization}~" sonar-project.properties
    sed -i "s~_ProjectKey_~${projectKey}~" sonar-project.properties
    sed -i "s~_Url_~${url}~" sonar-project.properties
    sed -i "s~_Login_~${login}~" sonar-project.properties
else
    echo " ---  Azure----"
    sed -i "s~_Organization_~$(organization)~" sonar-project.properties
    sed -i "s~_ProjectKey_~$(projectKey)~" sonar-project.properties
    sed -i "s~_Url_~$(url)~" sonar-project.properties
    sed -i "s~_Login_~$(login)~" sonar-project.properties
    
fi
