#!/bin/bash

start_time=$(date +%s)
echo "Deploying BookCars backend..."

cd /root/bookcars
git pull
chmod +x -R /root/bookcars/__scripts

/bin/bash /root/bookcars/__scripts/free-mem.sh

cd /root/bookcars/backend

npm install

sudo systemctl restart bookcars
sudo systemctl status bookcars --no-pager

/bin/bash /root/bookcars/__scripts/free-mem.sh

finish_time=$(date +%s)
elapsed_time=$((finish_time - start_time))
((sec=elapsed_time%60, elapsed_time/=60, min=elapsed_time%60))
timestamp=$(printf "BookCars backend deployed in %d minutes and %d seconds." $min $sec)
echo "$timestamp"

#$SHEL
