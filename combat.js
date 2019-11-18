var combatants = Object();
var combatant_names;
// Begin Test setup
combatant_names = ["Hero", "Monster"];
var hero_selector = document.getElementById("hero_selector");
hero_selector.appendChild(selection_menue(combatant_names));
// End Test setup
function selection_menue(values) {
    var selectList = document.createElement("select");
    for (var i = 0; i < values.length; i++) {
        var option = document.createElement("option");
        option.value = values[i];
        option.text = values[i];
        selectList.appendChild(option);
    }
    return selectList;
}
//function combatant(name:String, ac:Number, hp:Number, actions:String[],action_details:any, reactions:String[], reaction_details:any){
//var combatant = Object();
//combatant["name"] = name;
//combatant["ac"] = ac;
//combatant["hp"] = hp;
//combatant["number_of_actions"] = number_of_actions;
//combatant["actions"] = actions;
//combatant["action_details"] = action_details;
//combatant["reactions"] = reactions;
//combatant["reaction_details"] = reaction_details;
//combatant["legendary_actions"] = legendary_actions;
//combatant["legendary_action_details"] = legendary_action_details;
//}
//if multiple oponents with the same name want to enter the arena we want a unique identifier
//function combatant_unique_identifier()