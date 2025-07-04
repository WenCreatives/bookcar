#!/bin/bash

start_time=$(date +%s)
echo "Deploying bookcar backend..."

cd /root/bookcar
git pull
chmod +x -R /root/bookcar/__scripts

/bin/bash /root/bookcar/__scripts/free-mem.sh

cd /root/bookcar/backend

npm install

sudo systemctl restart bookcar
sudo systemctl status bookcar --no-pager

/bin/bash /root/bookcar/__scripts/free-mem.sh

finish_time=$(date +%s)
elapsed_time=$((finish_time - start_time))
((sec=elapsed_time%60, elapsed_time/=60, min=elapsed_time%60))
timestamp=$(printf "bookcar backend deployed in %d minutes and %d seconds." $min $sec)
echo "$timestamp"

#$SHEL
