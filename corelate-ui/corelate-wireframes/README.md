Trade UI 
===========================

##Setup

You must have [npm](https://nodejs.org/en/download/) installed.

After pulling from repo, install npm and bower packages:

`npm install`


On the app directory, start the server:

`npm start`

You can now access the markup on:

`http://localhost:9090/templates/`


##Development Process

[grunt](http://gruntjs.com/) for building the app.

For development, you will also need to install the grunt cli:

`sudo npm install -g grunt-cli`

Everything is in /src folder, if you edit stuff inside this directory, execute `grunt` to build the app again. It will be deployed to the /dist directory. You can also execute `grunt watch` so it automatically rebuilds.
