cd /home/yz/project/penote-frontend &&
ng build --prod --build-optimizer &&
scp -P 32323 -r \
    /home/yz/project/penote-frontend/dist/penote-frontend/ \
    yuanzhen@47.93.221.223:/home/yuanzhen/
