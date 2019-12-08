declare var monsters: any;
var combatant_names: string[];

combatant_names = ["Hero", "Monster"];
var combatant_selector = get_element("add_combatant");
combatant_selector.appendChild(selection_menu(combatant_names));

function named_input(name: string, size: number, content: string = "") {
    let input = document.createElement("input");
    input.id = name;
    input.size = size;
    input.name = name;
    input.value = content;
    return input;
}

function labeled_input(name: string, size: number, content: string = "") {
    let label = document.createElement("label");
    let input = named_input(name, size, content);
    label.htmlFor = name;
    label.innerText = name;
    label.appendChild(input);
    return label;
}

function get_element(id: string) {
    return document.getElementById(id);
}

function selection_menu(values: string[]) {
    var selectList = document.createElement("select");
    for (var i = 0; i < values.length; i++) {
        var option = document.createElement("option");
        option.value = values[i];
        option.text = values[i];
        selectList.appendChild(option);
    }
    return selectList;
}

function named_textarea(name: string, rows: number) {
    let span = document.createElement("span");
    let textarea = document.createElement("textarea");
    span.title = name;
    textarea.id = name;
    textarea.innerText = name;
    textarea.rows = rows;
    span.appendChild(textarea);
    return span;
}

//https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript
function delete_children(parent_element) {
    while (parent_element.firstChild) {
        parent_element.removeChild(parent_element.firstChild);
    }
}

var monster_names: string[] = monsters.map(e => e.Name);
var monster_selector = selection_menu(monster_names);
combatant_selector.appendChild(monster_selector);
monster_selector.addEventListener("change", display_monster);


function get_monster(name: String) {
    return monsters.filter(e => e.Name == name)[0];
}

function display_monster(ev: any) {
    var display = get_element("combatant_description");
    delete_children(display);
    //console.log(ev.target.value);

    var monster = get_monster(ev.target.value);
    var kys = Object.keys(monster);
    kys.forEach(k => {
        //entweder das Feld enthält einen String oder ein Objekt
        var val: string = monster[k];
        var size = val.length;
        console.log(k, val);
        display.appendChild(labeled_input(k, size, val));
    }
    );
}
