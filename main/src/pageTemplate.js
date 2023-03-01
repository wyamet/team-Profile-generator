const generateManager = (manager) => {
  return ` 
  <div class="card" style="width: 18rem;">
    <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success">Manager</div>
    <div class="card-body text-success">
      <h5 class="card-title">${manager.name}</h5>
      <p class="card-text">ID:${manager.id}</p>
      <p class="card-text">Email:${manager.email}</p>
      <p class="card-text">Office #:${manager.officeNumber}</p>
      </div>
    </div>
    </div>
     `;
};

const generateEngineer = (engineer) => {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success">Engineer</div>
    <div class="card-body text-success">
      <h5 class="card-title">${engineer.name}</h5>
      <p class="card-text">ID:${engineer.id}</p>
      <p class="card-text">Email:${engineer.email}</p>
      <p class="card-text">Github:${engineer.github}</p>
      </div>
    </div>
    </div>
    
    `;
};

const generateIntern = (intern) => {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success">Intern</div>
    <div class="card-body text-success">
      <h5 class="card-title">${intern.name}</h5>
      <p class="card-text">ID:${intern.id}</p>
      <p class="card-text">Email:${intern.email}</p>
      <p class="card-text">School:${intern.schoolName}</p>
      </div>
    </div>
    </div>
    
    `;
};

const fs = require("fs");

const generateHTML = function (employees) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href=""
      <title>My Team</title>
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <section class="wrapper">
        ${employees}
      </section>
    </body>
    </html>
    `;
};

module.exports = {
  generateHTML,
  generateManager,
  generateEngineer,
  generateIntern,
};
