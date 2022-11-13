# Docker files

## Building api image

docker build . -t ticket-tracker-api -f docker/api.dockerfile

docker run -p 8000:8000 -d ticket-tracker-api

## Building web image

docker build . -t ticket-tracker-web -f docker/web.dockerfile

docker run -p 3000:3000 -d ticket-tracker-web
