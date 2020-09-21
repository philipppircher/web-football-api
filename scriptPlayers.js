
let id = 0;

function loadTablePlayers(teamId){
    id = teamId;

    let urlTablePlayers = "https://api.football-data.org/v2/teams/" + teamId + "/";
    fetch(urlTablePlayers, {
        method:"GET",
    
        headers: {
            "x-auth-token": "fdd65a2207314cd884d8deb5c2109d98"
        }
    })
    .then(response => response.json())
    .then(function (data) {

        let html="";
        data.squad.forEach(element => {
            html +="<tr><td>" + element.name + "</td><td> " + element.position +"</td></tr>"
            console.log(element);
        });

        document.getElementById("playerList").innerHTML = data.name;
        document.getElementById("tablePlayers").innerHTML = html;

    });
}