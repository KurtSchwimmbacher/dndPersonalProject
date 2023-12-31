$(document).ready(function (){

    $("#chooseClassTable").hide();
    $("#chooseAbilitiesTable").hide();
    $("#chooseDescTable").hide();
    $("#charDetailsCon").hide()
    $("#physCharCon").hide();
    $("#perCharCon").hide();
    $("#charNotesCon").hide();
    $("#chooseEquipTable").hide();

    // change between side nav 
    // =======================================================================================================================

    // on race button click
    $("#raceSelector").on('click',function(){
        let slct = $("#raceSelector");

        $("#charBuildImg").css('opacity', '1');
        $("#charBuildImg").css('background-image' , 'url(../assets/images/paladinClass.jpg)');
        $("#charBuilderTitle").text("Choose a Race");
        $("#charBuilderTitle").parent().removeClass('no-img');

        $("#selecterCon").css('margin-top','-105vh');

        $("#chooseRaceTable").show();
        $("#chooseClassTable").hide();
        $("#chooseAbilitiesTable").hide();
        $("#chooseDescTable").hide();
        $("#chooseEquipTable").hide();

        slct.parent().find(".rs-active").removeClass("rs-active");

        slct.addClass("rs-active");
    });

    // on class button click
    $("#classSelector").on('click',function(){
        let slct = $("#classSelector");

        $("#charBuildImg").css('opacity', '1');
        $("#charBuildImg").css('background-image' , 'url(../assets/images/fighterClass.jpg)');
        $("#charBuilderTitle").text("Choose a Class");
        $("#charBuilderTitle").parent().removeClass('no-img')

        $("#selecterCon").css('margin-top','-105vh');
        
        $("#chooseClassTable").show();
        $("#chooseRaceTable").hide();
        $("#chooseAbilitiesTable").hide();
        $("#chooseDescTable").hide();
        $("#chooseEquipTable").hide();

        slct.parent().find(".rs-active").removeClass("rs-active");

        slct.addClass("rs-active");
    });

    // on abilities button click
    $("#statsSelector").on('click',function(){
        let slct = $("#statsSelector");

        $("#charBuildImg").css('opacity', '0');
        $("#charBuilderTitle").parent().addClass('no-img')
        $("#charBuilderTitle").text("Choose your Abilities");

        $("#selecterCon").css('margin-top','-115vh');
        
        $("#chooseClassTable").hide();
        $("#chooseRaceTable").hide();
        $("#chooseDescTable").hide();
        $("#chooseAbilitiesTable").show();
        $("#chooseEquipTable").hide();

        slct.parent().find(".rs-active").removeClass("rs-active");

        slct.addClass("rs-active");
    });

     // on description button click
     $("#descSelector").on('click',function(){
        let slct = $("#descSelector");

        $("#charBuildImg").css('opacity', '1');
        $("#charBuildImg").css('background-image' , 'url(../assets/images/bardClass.jpg)');
        $("#charBuilderTitle").parent().removeClass('no-img')
        $("#charBuilderTitle").text("Choose a description");

        $("#selecterCon").css('margin-top','-105vh');
        
        $("#chooseClassTable").hide();
        $("#chooseRaceTable").hide();
        $("#chooseAbilitiesTable").hide();
        $("#chooseDescTable").show();
        $("#chooseEquipTable").hide();

        slct.parent().find(".rs-active").removeClass("rs-active");

        slct.addClass("rs-active");
    });


     // on equipment button click
     $("#equipSelector").on('click',function(){
        let slct = $("#equipSelector");

        $("#charBuildImg").css('opacity', '1');
        $("#charBuildImg").css('background-image' , 'url(../assets/images/rogueClass.jpg)');
        $("#charBuilderTitle").text("Choose Equipment");
        $("#charBuilderTitle").parent().removeClass('no-img')

        $("#selecterCon").css('margin-top','-105vh');
        
        $("#chooseClassTable").hide();
        $("#chooseRaceTable").hide();
        $("#chooseAbilitiesTable").hide();
        $("#chooseDescTable").hide();
        $("#chooseEquipTable").show();

        slct.parent().find(".rs-active").removeClass("rs-active");

        slct.addClass("rs-active");
    });

    // =======================================================================================================================

    $(".view-character-btn").on('click',function(){
        window.location.href = `characterSheet.html`;
    });

    $("#makeCharacter").on('click',function(){
        window.location.href = `characterBuilder.html`;
    });

    // =======================================================================================================================
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

    // ======================================================

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

    // ======================================================

    // hide active states for side nav
    $("#statsActiveSelect").hide();
    // show side nav active state on hover
    $("#statsSelector").on('mouseenter',function(){
        $("#statsActiveSelect").show();
        $("#statsImgCon").css("margin-top","2px")
    });
    // hide side nav active state when not hovering
    $("#statsSelector").on('mouseleave',function(){
        $("#statsActiveSelect").hide();
        $("#statsImgCon").css("margin-top","0px")
    });

    // ======================================================

    // hide active states for side nav
    $("#descActiveSelect").hide();
    // show side nav active state on hover
    $("#descSelector").on('mouseenter',function(){
        $("#descActiveSelect").show();
        $("#descImgCon").css("margin-top","2px")
    });
    // hide side nav active state when not hovering
    $("#descSelector").on('mouseleave',function(){
        $("#descActiveSelect").hide();
        $("#descImgCon").css("margin-top","0px")
    });

    // ======================================================

    // hide active states for side nav
    $("#equipActiveSelect").hide();
    // show side nav active state on hover
    $("#equipSelector").on('mouseenter',function(){
        $("#equipActiveSelect").show();
        $("#equipImgCon").css("margin-top","2px")
    });
    // hide side nav active state when not hovering
    $("#equipSelector").on('mouseleave',function(){
        $("#equipActiveSelect").hide();
        $("#equipImgCon").css("margin-top","0px")
    });
    // =======================================================================================================================


    // populate build a character page
    getRacesToBuilder();
    getClassesToBuilder();
    getDescToBuilder();


    $("#AFL").on('click',function(){
        $("#charDetailsCon").toggle()
    });

    $("#closeAFL").on('click',function(){
        $("#charDetailsCon").hide()
    });
    
    $("#lifestyleRange").on('input',function(){
        let val = $("#lifestyleRange").val();
        let cost = `Cost: ${val} GP`;
        $("#lifestyleLabel").text(cost)
    })

    
    $("#physChar").on('click',function(){
        $("#physCharCon").toggle()
    });

    $("#closePhysChar").on('click',function(){
        $("#physCharCon").hide()
    });

    $("#perChar").on('click',function(){
        $("#perCharCon").toggle()
    });

    $("#closePerChar").on('click',function(){
        $("#perCharCon").hide()
    });
    
    $("#charNotes").on('click',function(){
        $("#charNotesCon").toggle()
    });

    $("#closeCharNotes").on('click',function(){
        $("#charNotesCon").hide()
    });
   
    
    $("#slctBG").on('change',function(){
        console.log($("#slctBG").val())
        getBGDetails($("#slctBG").val());
    });

});


function getRacesToBuilder(){
    let racesToDisp = "";
    $.ajax({
        dataType: 'json',
        type:"GET",
        // gets the first page of results
        url:`https://www.dnd5eapi.co/api/races`,
        
        success: function(data){
        temp = data.results;

        loadRacesIntoCharacterBuilder(temp);    
        
        },
        error: function(error){
        // handle as it comes
        }
    })
}

function loadRacesIntoCharacterBuilder(racesArr){
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
            
            $("#raceInfo").text("Race Info");
            $("#modalBody").text("Loading Racial Features");

            setTimeout(
                function() {
                    fillRaceModal(race.name);
                },
                500);
            
        });
    
        $("#raceCon").append(listItem);
    
      });
}


function getClassesToBuilder(){
    $.ajax({
        dataType: 'json',
        type:"GET",
        // gets the first page of results
        url:`https://www.dnd5eapi.co/api/classes/`,
        
        success: function(data){
        temp = data.results;

        loadClassesIntoCharacterBuilder(temp);    
        
        },
        error: function(error){
        // handle as it comes
        }
    })
}

function loadClassesIntoCharacterBuilder(classesArr){
    console.log(classesArr)
    $("#classCon").empty();

    classesArr.forEach(classes => {
        const listItem= $(`
        <tr class="mt-5 mb-5">
            <td scope="row" class="race-name" >${classes.name}</td>
            <td class="read-more-race" data-bs-toggle="modal" data-bs-target="#exampleModal" style="margin-bottom:-2px">Read More</td>
        </tr>
        `);

        listItem.on('click','.read-more-race',function(){
            
            $("#raceInfo").text("Race Info");
            $("#modalBody").text("Loading Racial Features");

            setTimeout(
                function() {
                    fillRaceModal(classes.name);
                },
                500);
            
        });
    
        $("#classCon").append(listItem);
    
      });
}


function getDescToBuilder(){
    $.ajax({
        dataType: 'json',
        type:"GET",
        // gets the first page of results
        url:`https://api.open5e.com/v1/backgrounds`,
        
        success: function(data){
        temp = data.results;

        loadDescIntoCharacterBuilder(temp);    
        
        },
        error: function(error){
        // handle as it comes
        }
    })
}

function loadDescIntoCharacterBuilder(descArr){
    console.log(descArr)
    $("#slctBG").empty();

    descArr.forEach(desc => {
        const selectBGItem = $(`
            <option selected value="${desc.name}">${desc.name}</option>
        `);

        $("#slctBG").append(selectBGItem);
    
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



function getBGDetails(selectedBG){
    selectedBG = selectedBG.toLowerCase();
    let temp = selectedBG.split(" ");
    selectedBG = temp[0];
    for(let i = 1; i < temp.length; i++){
        selectedBG += "-"+temp[i];  
    }

    let BGurl = `https://api.open5e.com/v1/backgrounds/${selectedBG}`;
    console.log(BGurl)
    $.ajax({
        dataType: 'json',
        type:"GET",
        // gets the first page of results
        url: BGurl,
        
        success: function(data){
        temp = data;
        console.log(temp)

        $("#bgDesc").text(`Description: ${temp.desc}`);
        $("#bgSkills").text(`Skills Proficiencies: ${temp.skill_proficiencies}`);
        $("#bgTools").text(`Tool Proficiencies: ${temp.tool_proficiencies}`);
        $("#bgLang").text(`Languages: ${temp.languages}`);
        $("#bgEquip").text(`Equipment: ${temp.equipment}`);
        $("#bgFeature").text(`${temp.feature}`);
        $("#bgFeatureDesc").text(`${temp.feature_desc}`);   
        },
        error: function(error){
        // handle as it comes
        }
    })
}