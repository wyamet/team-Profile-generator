const generateTeam = (team) => {
  const generateManager = (manager) => {
    return ` 
    <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success">Manager</div>
    <div class="card-body text-success">
      <h5 class="card-title">${manager.name}</h5>
      <p class="card-text">${manager.description}</p>
      <p class="card-text">${manager.email}</p>
      <p class="card-text">${manager.officeNumber}</p>
    </div>
     `;
  };

  const generateEngineer = (engineer) => {
    return `
    <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success">Manager</div>
    <div class="card-body text-success">
      <h5 class="card-title">${engineer.name}</h5>
      <p class="card-text">${engineer.id}</p>
      <p class="card-text">${engineer.email}</p>
      <p class="card-text">${engineer.github}</p>
    </div>
    
    `;
  };

  const generateIntern = (intern) => {
    return `
    <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success">Manager</div>
    <div class="card-body text-success">
      <h5 class="card-title">${intern.name}</h5>
      <p class="card-text">${intern.id}</p>
      <p class="card-text">${intern.email}</p>
      <p class="card-text">${intern.school}</p>
    </div>
    
    `;
  };

  const html = [];
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
  return html.join("");
};

module.exports = (team) => {
  return `

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
  </head>
  <body>
    <h1>Hello, Team!</h1>
    ${generateTeam(team)}
  </body>
</html>

`;
};
