# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Technology stack: React, Bootstrap, MUI. 

After installing React and adding Bootstrap and MUI packages via CDN and NPM, I integrated TextInput, Button and List components into the App file. Then I initialized states using useState hook functionality. Then I added onChange event listener on the TextInput element to listen for the input changes and implemented validation logic, if isEmpty === true the TextInput will show the validation msg. After that I implemented Button element with onClick event that is invoking searchDictionary function, that checks if user has entered a word, if it has API endpoint gets fetched and Respone object is returned which is then parsed into JSON format and responseData state gets updated. The additional logic here could be to check the Response object status and handle when user enters invalid word, which should generate 404 response. Also any errors are handled using catch feature. Finally the responseData gets rendered using map built-in array function. This soultion is not scalable and doesn't use best pracctices, it is just high level representation of my knowledge. For better insights check other repositories too. 
