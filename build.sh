#!/usr/bin/env bash

NODE_MODULES_DIR=node_modules

check_command_success () {
    if [ $? -ne 0 ];then
       echo "Build failed."
       exit
    fi
}

rm_dir () {
    if [ -d $1 ]; then
        rm -rf $1
        check_command_success
    fi;
}

rm_dir ${NODE_MODULES_DIR}

npm install
check_command_success
npm run build
check_command_success

echo "Build successful!"
