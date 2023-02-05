# Unit203 Technical Interview
## Technolgies
- NextJS + Typescript
- Express

# Installation
Installation of the project requires NodeJS to be installed. Once installed,

```npm install```

is required to be run for both the folders `server` and `frontend`.

To be able to start the Frontend server, you may need to run

```npm run build```

after initial install to create the required files NextJS needs to run.

# To start API Server
- In your CLI, `cd server` 
- Run the command `node index.js` to start the server
- To test if server is running, navigate to `https://localhost:3001`

# To start Web Server
- In your CLI, type `cd frontend`
- Run the command `npm run server` to start the webserver
- To test if the frontend is running, navigate to `https://localhost:3000`


# Overview Questions
1) What are some programming paradigms

```
Some programming paradigms are object-orientated progamming also known as OOP and functional programming.
```

2) What’s JSX

```
JSX is similar to HTML and allows for HTML like elements to be written within Javascript.
```

3) What’s a props

```
Props are attributes/arguments that passed to the component in order to be used and consumed by the component.
```

4) What’s a state

```
A state acts very similar to a variable but not the same. A state cannot be manipulated directly and it's value is updated asynchronously.
```

5) What are refs

```
A ref is a way of holding and storing a reference to something. A ref is generally used to reference a DOM node, but can be used to hold values as well. Changing a value to a ref does not cause re-renders.
```

6) What’s redux / use context

```
Redux is a global state management library that allows for the progammer to handle states and data at a global level.

UseContext is a React Hook that allows for components to retrieve data without having to pass that data via props (aka prop drilling). This data is accessable via the component tree using via Provider.
```

7) What’s node

```
Node is a server environment that runs a Javascript runtime to execute javascript code outside of a browser.

```
8) What is express js

```
Express JS is a backend framework that gives the programmer tools to quickly consume and return user requests on the backend.
```

9) What’s a route
```
A route is an endpoint in which defines where a client request is directed and what actions are performed.
```

10) What’s a middleware
```
Middleware, simply put, is an application that sits between a one software to another. In the case of web development, it's generally an application that sits between the client request and the response that is sent back.

Middleware can be API calls that will deal with a client request for data, and the response data back from a database. The middleware simplifies the process for the end user by taking the request and operating the correct procedures to retrieve the data from a database and return it back to the client.
```
11) What’s unit testing
```
Unit testing is the act of testing the smallest possible (and testable) part of an application (ie. a function). This is to verify and validate that it is working as expected.
```
12) Name some unit testing framework
```
Jest and Cypress are some unit testing frameworks that can be used. React Testing Library is becoming popular as well. Storybook is a good UI unit testing library as well for web development.
```