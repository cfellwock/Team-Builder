// Manager Card
const managerCard = managerData => {
    return `
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${managerData.getRole()}</h5>
                <h5 class="card-title">${managerData.getName()}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${managerData.getID()}</li>
                <li class="list-group-item">Email: ${managerData.getEmail()}</li>
                <li class="list-group-item">Office #: ${managerData.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    `
}

// Engineer Card
const engineerCard = engineerData => {
    return `
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${engineerData.getRole()}</h5>
                <h5 class="card-title">${engineerData.getName()}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${engineerData.getID()}</li>
                <li class="list-group-item">Email: ${engineerData.getEmail()}</li>
                <li class="list-group-item">GitHub: ${engineerData.getGitHub()}</li>
                </ul>
            </div>
        </div>
    `
}

// Intern Card
const internCard = internData => {
    return `
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${internData.getRole()}</h5>
                <h5 class="card-title">${internData.getName()}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${internData.getID()}</li>
                <li class="list-group-item">Email: ${internData.getEmail()}</li>
                <li class="list-group-item">School: ${internData.getSchool()}</li>
                </ul>
            </div>
        </div>
    `
}

// Generates team cards into HTML using a for loop
const employeeCards = teamArray => {
    let teamCardsHTML = ''
  
    for ( i = 0; i < teamArray.length; i++ ) {
      if (teamArray[i].getRole() === "Manager"){
        teamCardsHTML = teamCardsHTML + managerCard(teamArray[i])
      }
      if (teamArray[i].getRole() === "Engineer"){
        teamCardsHTML = teamCardsHTML + engineerCard(teamArray[i])
      }
      if (teamArray[i].getRole() === "Intern"){
        teamCardsHTML = teamCardsHTML + internCard(teamArray[i])
      }
    } return teamCardsHTML
  }

// Generates HTML webpage and inserts the team cards

const templateHTML = data => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&display=swap" rel="stylesheet">

            <title>Team Builder</title>
        </head>

        <header>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
                <p class="lead"></p>
            </div>
            </div>
        </header>

        <body>  
        ${employeeCards(data)}
        </body>
        </html>
    `
}

module.exports = templateHTML;