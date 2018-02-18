#!/usr/bin/env bash


HOST="77.55.229.236"
APP_DIRECTORY="/app/piotrbrek"
RUN_DATE=`date '+%Y%m%d%H%M%S'`

function buildProdVersion(){
    pushd piotr-brek-webapp
    ng build --prod
    popd
}

function makeCopyOfCurrentProdVersion(){
    echo "> Making copy of current app $RUN_DATE"
    ssh root@$HOST "mv $APP_DIRECTORY ${APP_DIRECTORY}_${RUN_DATE}"
    ssh root@$HOST "mkdir -p $APP_DIRECTORY"
    echo "< Finished"
}

function copyVersionToProd(){
    echo "> Copy version to prod"
    scp piotr-brek-webapp/dist/* root@$HOST:$APP_DIRECTORY
    echo "< Finished"
}

function restartDocker(){
    echo "> Restart docker"
    ssh root@$HOST "docker stop jb-nginx"
    ssh root@$HOST "docker start jb-nginx"
    echo "< Finished"
}


buildProdVersion
makeCopyOfCurrentProdVersion
copyVersionToProd
restartDocker