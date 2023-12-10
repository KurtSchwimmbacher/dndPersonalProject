$(document).ready(function (){
    console.log("Hello World")


    $(".view-character-btn").on('click',function(){
        window.location.href = `characterSheet.html`;
    });

    $("#makeCharacter").on('click',function(){
        window.location.href = `characterBuilder.html`;
    });

    // hide active states for side nav
    $("#raceActiveSelect").hide();
    // show side nav active state on hover
    $("#raceSelector").on('mouseenter',function(){
        $("#raceActiveSelect").show();
        $("#raceImgCon").css("margin-top","2px")
    });
    // hide side nav active state when not hovering
    $("#raceSelector").on('mouseleave',function(){
        $("#raceActiveSelect").hide();
        $("#raceImgCon").css("margin-top","0px")
    });

    // hide active states for side nav
    $("#classActiveSelect").hide();
    // show side nav active state on hover
    $("#classSelector").on('mouseenter',function(){
        $("#classActiveSelect").show();
        $("#classImgCon").css("margin-top","2px")
    });
    // hide side nav active state when not hovering
    $("#classSelector").on('mouseleave',function(){
        $("#classActiveSelect").hide();
        $("#classImgCon").css("margin-top","0px")
    });

    // populate build a character page
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
            <td class="read-more-race" data-bs-toggle="modal" data-bs-target="#exampleModal" style="margin-bottom:-2px">Read More</td>
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