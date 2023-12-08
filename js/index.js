$(document).ready(function (){
    console.log("Hello World")


    $(".view-character-btn").on('click',function(){
        window.location.href = `characterSheet.html`;
    });

    $("#makeCharacter").on('click',function(){
        window.location.href = `characterBuilder.html`;
    });

    getClass();

});


function getClass(){
    let classToDisp = "";
    $.ajax({
        dataType: 'json',
        type:"GET",
        // gets the first page of results
        url:`https://www.dnd5eapi.co/api/races`,
        
        success: function(data){
        temp = data.results;

        loadClassesIntoCharacterBuilder(temp);    
        
        },
        error: function(error){
        // handle as it comes
        }
    })
}

function loadClassesIntoCharacterBuilder(racesArr){
    console.log(racesArr)
    $("#raceCon").empty();

    racesArr.forEach(race => {
        const listItem= $(`
        <tr class="mt-5 mb-5">
            <td scope="row" class="race-name" >${race.name}</td>
            <td class="read-more-race" data-bs-toggle="modal" data-bs-target="#exampleModal">Read More</td>
        </tr>
        `);

        listItem.on('click','.read-more-race',function(){
            fillRaceModal(race.name);
        });
    
        $("#raceCon").append(listItem);
    
      });
}


function fillRaceModal(race){
    let modalTitle = $("#raceInfo");
    let modalContent = $("#modalBody");

    race = race.toLowerCase();

    $.ajax({
        dataType: 'json',
        type: "GET",
        url: `https://www.dnd5eapi.co/api/races/${race}`,

        success: function(data){
            console.log(data)
            modalTitle.text(data.name)
            let abilityScoresLen = data.ability_bonuses.length;
            let content = "";
            for(i = 0; i < abilityScoresLen; i++){
                content += data.ability_bonuses[i].ability_score.name + " +" + data.ability_bonuses[i].bonus + "\n"
            }
            modalContent.text(content);
        },
        error: function(){
            // deal with
        }
    })

}