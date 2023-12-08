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
            <td scope="row" class="race-name">${race.name}</td>
            <td class="read-more-race">Read More</td>
        </tr>
        `);
    
        $("#raceCon").append(listItem);
    
      });
}