// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const path = require("path");
const components = require("./components")

app.get("/", (request, response) => {
  response.send(`
  ${components.head('home')}
    <body>
        <h1>My portfolio</h1>
    </body>
  `);
});

app.get("/contact", (request, response) => {
  response.send(`
  ${components.head('Contact')}
    <body>
        <h1>Contact</h1>
        <p>This is a contact page</p>
    </body>
  `);
});

app.get("/education", (request, response) => {
  response.send(`
  ${components.head('Education')}
    <body>
        <h1>Education</h1>
        <p>This is a Education page</p>
    </body>
  `);
});

app.get("/skills", (request, response) => {
  response.send(`
  ${components.head('Skills')}
    <body>
        <h1>Skills</h1>
        <p>This is a Skills page</p>
    </body>
  `);
});

app.get("/projects", (request, response) => {
  response.send(`
  <html>
      ${components.head('Projects')}
      <body>
        <h1>Projects</h1>
        <ul>
          <li>
            <p>codeUrl:
            <a href="https://github.com/mahakarzoun/hyf-homework/blob/master/javascript/javascript2/week3/theGame.js.js">the press game</a>
            </p>
            <p>previewUrl:</p>
            <img alt="homework folder" src="https://github.com/HackYourFuture-CPH/JavaScript/raw/master/javascript2/week3/homework/fastest-clicker.gif" width="400" style="max-width:100%;">
          <li>
        </ul>
      </body>
    </html>
  `);
});


app.get('/test-report', function (requset, response) {
  response.sendFile(path.join(__dirname + '/test-report.html'));
});

const server = app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

// Export app for testing purposes
module.exports = app;
