```js
npm install 'https://github.com/ankammaraod/server'
```

# createRouter
createRouter takes list of handlers and passes the handlers in chain format

ex - handler=createRouter([handler1,hander2])


# server

server simply taks takes port and handler

ex- startServer(1234,handler)

```js
// Import startServer and createRouter.
const {startServer,createRouter}=require('server');

// Pass list of handlers to createRouter to get router back.
const router=createRouter([handlers...]);

// Pass a port number and the router that you created to httpServer.
startServer(port,router);

// All done now you can use the server
```