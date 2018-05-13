# WAI

This project is to demostrate knowledge in Vue-cli

# Installation for local enviroment

## Cloning the Codebase
`git clone https://github.com/JATaber/WAI.git`

## Setting up the production build

You'd need to set your NODE_ENV to production and run, because the project has web pack configured for both development and production

`NODE_ENV=production npm run build`

Then you will copy dist/ directory into your website root directory.

If you're deploying with Docker, you'd need an express server, serving the dist/ directory.

## Dockerfile

```
FROM node:carbon

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm install

ENV NODE_ENV=production

RUN npm run build

# Remove unused directories
RUN rm -rf ./src
RUN rm -rf ./build

# Port to expose
EXPOSE 8080
CMD [ "npm", "start" ]
```
## Note
You can use Apache or Nginx as proxy, port 80

# Failed to Release Procedure

## This project utilizes the following

* VueTwitchPlayer
* Firebase
* axios
* Bootstrap Vue
* LoadScript
* VueAwesome (font awesome)
* vuefire
* vue-youtube
* Vuelidate
