const fs = require('fs');

function managerCard(manager) {
    let {name, id, email, officeNumber} = manager;
    const managerHTML = `
    <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6>Manager</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="malito:${email}" class="card-link">Email</a></li>
                <li class="list-group-item">office: ${officeNumber}</li>
            </ul>
    </div>`
    return managerHTML;
}

function engineerCard(engineers) {
    for (let i = 0; i < engineers.length; i++) {
        let {name, id, email, gitHub} = engineers[i];
        let engineerHTML = `
        <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6>Engineer</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="malito:${email}" class="card-link">Email</a></li>
                <li class="list-group-item"><a href="https://github.com/${gitHub}" class="card-link">GitHub</a></li>
            </ul>
        </div>`
        return engineerHTML;
    }
}

function internCard(interns) {
    for (let i = 0; i < interns; i++) {
        let {name, id, email, school} = interns[i];
        let internHTML = `
        <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6>Intern</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="malito:${email}" class="card-link">Email</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
        </div>`
        return internHTML;
    }
}

function createPage (manager, engineers, interns) {
    console.log(manager);
    console.log(engineers);
    console.log(interns);
    const template = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Page</title>
    <link rel="stylesheet" href="../customCSS/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>

<body>
    <header>
        <h1>Your Team</h1>
    </header>
    <div class="card-deck">
        ${managerCard(manager)}
        ${engineerCard(engineers)}
        ${internCard(interns)}
    </div>
</body>

</html>`;

fs.writeFileSync('./sample/index.html', template)
    console.log('success');
    process.exit();
}

module.exports = {
    createPage
}