# Node.js Server Hang on Client Disconnect

This repository demonstrates a common yet subtle bug in Node.js HTTP servers where the server can hang if a client disconnects prematurely before the server has finished sending the entire response.  The bug and its solution are explained in the respective files.

## Bug (`bug.js`)
The `bug.js` file contains a simple HTTP server.  If a client disconnects before the response is completely sent, the server will hang. This is because Node.js is still attempting to send the data on a closed socket.

## Solution (`bugSolution.js`)
The `bugSolution.js` file shows the corrected version of the server.  The solution lies in listening for the `'close'` event on the request object (`req.on('close', ...)`). This event is fired when the client disconnects, allowing for graceful handling of the situation and preventing the server from hanging.