let urlTableTeams = "http://api.football-data.org/v2/competitions/2002/standings?seasons=2019";

function loadTableTeams(){
    var source = document.getElementById("team-template").innerHTML;
    var template = Handlebars.compile(source);

    fetch(urlTableTeams, {
        method:"GET",
    
        headers: {
            "x-auth-token": "fdd65a2207314cd884d8deb5c2109d98"
        }
    })
    .then(response => response.json())
    .then(function (data) {
       
        let html="";
        let table = data.standings[0].table;
        table.forEach(element => {
            console.log(template(element));

            html += "<tr onclick=loadTablePlayers(" + element.team.id + ")><td>" + element.team.name + "</td><td>" + element.position + "</td><td><img width='15px' src='" + element.team.crestUrl + "'</td><td>" + element.playedGames
             + "</td><td>" + element.won + "</td><td>" + element.lost + "</td><td>" + element.draw + "</td><td>" + element.points +"</td></tr>";
            console.log(element);

        });
        document.getElementById("tableTeams").innerHTML = html;
    });
}

loadTableTeams();