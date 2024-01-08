### 1. React 
 - React is javascript library building for creating interactive user Interface (UI's). 
 - It allow to reuse the same 'component' again and again whenever you needed.
 - The most useful part is that it create a single page application also know as [SPA]...
---
### 2. Who made React
 - React is Made and Manipulated By facebook. it is made in 2011 and later on 2013 it has been open sourced for public use...
---
### 3. What is Babel ?
 - Babel is basically a javascript compiler that is widely used to transform **JSX** over React.
 - it allows you to write HTML like code in javascript ...
---
#### 4. How does Babel convert html code in React into valid code?
 - It's very Simple.
 - As we write any html tag in javascript the babel work in this way that it create a React component using **React.createElement** and i already know this create element can receive three parameters.
 1. Name Of Tag
 2. Properties || as well as Children
 3. Children  
 - Now the babel is just create a React.createElement environment and convert it to JSX and From which js engine can execute this code easily ...
---
#### 5. What is ReactDOM used for ? & Write an example ?
 - ReactDOM is basically component of react library that is used to render the data od the [DOM].
 - ReactDOM has a method called createRoot by which we can render the data inside the root element. and shown on the DOM ...
```
let render  = ReactDOM.createRoot(document.body)

```
---
#### 6. What are the packages that you need to import for react to work with?
 - There are Generally two packages that we need for simple work with React.
```
1. import React from 'react';
2. import ReactDOM from 'react-dom';

``` 
###### For deep work with React
 - We need to import These all are packages that are mention bellow .
1. **For Routing** we use [ React Router ]
```
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
```
2. **For State Managment** we use [ Redux ]
```
import  {createStore} from 'redux';
```
3. **For HTTP Requests** we use [ axios ]
```
import axios from "axios";
```
4. **For Styling** we use [ Style Component ]
```
import styleComponent from "style"
```
---
#### 7. How do you add react to a web application ?
 - After installing **node.js** it will automatically install the **npm** as node package manager as well as **npx** node package executer.
 - We can start our project with the following two way 
1. using npx 
```
npx create-react-app [Your App Name]

1. Go to the your app folder using [cd/Your App Name]
2. Hit **npm start** in the terminal
3. Your App is Ready ... 
```
---
#### 8. What is React.createElement ?
 - This basically create an HTML element using React.
 - Syntex => React.createElement("div",{},optional)  
---
#### 9. What are the three properties that createElement accept?
```
let render = React.createElement("div",Attribute [optional],Children [optional])
First Property  - TagName
Second Property - Attribute As well as Children
Third Property  - Children 
``` 

#### 10. What is the meaning of render and root ?
1. **Root**
 - Root is a basically a container or place where we append or push the information in the HTML body.
2. **Render**
 - Render is a react-dom method that renders the root element on the browser web page;