#!/bin/bash

start_time=$(date +%s)
echo "Deploying bookcar frontend..."

cd /root/bookcar
git pull
sudo chmod +x -R /root/bookcar/__scripts

/bin/bash /root/bookcar/__scripts/free-mem.sh

cd /root/bookcar/frontend

npm install --force
npm run build

sudo rm -rf /var/www/bookcar/frontend
sudo mkdir -p /var/www/bookcar/frontend
sudo cp -rf build/* /var/www/bookcar/frontend

sudo rm -rf /var/cache/nginx
sudo systemctl restart nginx
sudo systemctl status nginx --no-pager

/bin/bash /root/bookcar/__scripts/free-mem.sh

finish_time=$(date +%s)
elapsed_time=$((finish_time - start_time))
((sec=elapsed_time%60, elapsed_time/=60, min=elapsed_time%60))
timestamp=$(printf "bookcar frontend deployed in %d minutes and %d seconds." $min $sec)
echo "$timestamp"

#$SHELL
