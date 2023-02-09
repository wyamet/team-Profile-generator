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

};










const generateHTML = (html) => 