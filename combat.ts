declare var monsters: any;
var combatant_names: string[];

function max_input_size() { return 40; }

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

function label(name: string, describing: HTMLElement) {
    var ret = document.createElement("label");
    ret.htmlFor = name;
    ret.innerText = name;
    ret.appendChild(describing);
    return ret;
}

function labeled_input(name: string, size: number, content: string = "") {
    var input = named_input(name, size, content);
    var lbl = label(name, input);
    return lbl;
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


function named_textarea(name: string, rows: number, content: string = "") {
    var span = document.createElement("span");
    span.title = name;
    var t_area = textarea(name, rows, content);
    span.appendChild(t_area);
    return span;
}

function labeled_textarea(name: string, rows: number, content: string = "") {
    var t_area = textarea(name, rows, content);
    return label(name, t_area);
}

function textarea(name: string, rows: number, content: string = "") {
    var textarea = document.createElement("textarea");
    textarea.id = name;
    textarea.innerText = name;
    textarea.rows = rows;
    textarea.value = content;
    return textarea;
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

function display_key_and_value(key: string, value: string, display: HTMLElement) {
    if (value.length < max_input_size())
        display.appendChild(labeled_input(key, value.length, value));
    else
        display.appendChild(labeled_textarea(key, 5, value))
}

function display_object(obj: object, display: HTMLElement) {
    var kys = Object.keys(obj);
    kys.forEach(k => {
        //field either contains an object or a string
        var val = obj[k];
        //console.log(k, val);
        if (typeof (val) == "string") display_key_and_value(k, val, display);
        else display_object(val, display);
    })
};

function display_monster(ev: any) {
    var display: HTMLElement = get_element("combatant_description");
    delete_children(display);
    //console.log(ev.target.value);
    var monster = get_monster(ev.target.value);
    display_object(monster, display);
}
