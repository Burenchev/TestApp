This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Start with Node.js

Download the app's 'build' directory from Github to your PC.

For environments using Node, the easiest way to start the app would be to install serve and let it handle the rest:

    npm install -g serve
    serve -s build
    
The last command shown above will serve your static site on the port 5000. Like many of serve’s internal settings, the port can be adjusted using the -l or --listen flags:

    serve -s build -l 4000
    
Run this command to get a full list of the options available:

    serve -h

More information here: https://facebook.github.io/create-react-app/docs/deployment

