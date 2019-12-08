var combatant_names;
// Begin Test setup
combatant_names = ["Hero", "Monster"];
var combatant_selector = get_element("add_combatant");
combatant_selector.appendChild(selection_menue(combatant_names));
// End Test setup
function get_element(id) {
    return document.getElementById(id);
}
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
var monster_names = monsters.map(function (e) { return e.Name; });
combatant_selector.appendChild(selection_menue(monster_names));
