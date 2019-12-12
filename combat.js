var combatant_names;
function max_input_size() { return 40; }
combatant_names = ["Hero", "Monster"];
var combatant_selector = get_element("add_combatant");
combatant_selector.appendChild(selection_menu(combatant_names));
function named_input(name, size, content) {
    if (content === void 0) { content = ""; }
    var input = document.createElement("input");
    input.id = name;
    input.size = size;
    input.name = name;
    input.value = content;
    return input;
}
function label(name, describing) {
    var ret = document.createElement("label");
    ret.htmlFor = name;
    ret.innerText = name;
    ret.appendChild(describing);
    return ret;
}
function labeled_input(name, size, content) {
    if (content === void 0) { content = ""; }
    var input = named_input(name, size, content);
    var lbl = label(name, input);
    return lbl;
}
function get_element(id) {
    return document.getElementById(id);
}
function selection_menu(values) {
    var selectList = document.createElement("select");
    for (var i = 0; i < values.length; i++) {
        var option = document.createElement("option");
        option.value = values[i];
        option.text = values[i];
        selectList.appendChild(option);
    }
    return selectList;
}
function named_textarea(name, rows, content) {
    if (content === void 0) { content = ""; }
    var span = document.createElement("span");
    span.title = name;
    var t_area = textarea(name, rows, content);
    span.appendChild(t_area);
    return span;
}
function labeled_textarea(name, rows, content) {
    if (content === void 0) { content = ""; }
    var t_area = textarea(name, rows, content);
    return label(name, t_area);
}
function textarea(name, rows, content) {
    if (content === void 0) { content = ""; }
    var textarea = document.createElement("textarea");
    textarea.id = name;
    textarea.innerText = name;
    textarea.rows = rows;
    textarea.value = content;
    return textarea;
}
function table_row(list) {
    var row = document.createElement("tr");
    for (var k in list) {
        var data = table_data(list[k]);
        row.appendChild(data);
    }
    return row;
}
function table_data(item) {
    var td = document.createElement("td");
    td.appendChild(item);
    return td;
}
function table(list) {
    var ret = document.createElement("table");
    list.forEach(function (e) { return ret.appendChild(e); });
    return ret;
}
function text(t) {
    var ret = document.createTextNode(t);
    return ret;
}
//https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript
function delete_children(parent_element) {
    while (parent_element.firstChild) {
        parent_element.removeChild(parent_element.firstChild);
    }
}
var monster_names = monsters.map(function (e) { return e.Name; });
var monster_selector = selection_menu(monster_names);
combatant_selector.appendChild(monster_selector);
monster_selector.addEventListener("change", display_monster_as_table);
function get_monster(name) {
    return monsters.filter(function (e) { return e.Name == name; })[0];
}
function display_key_and_value(key, value, display) {
    if (value.length < max_input_size())
        display.appendChild(labeled_input(key, value.length, value));
    else
        display.appendChild(labeled_textarea(key, 5, value));
}
function display_object(obj, display) {
    var kys = Object.keys(obj);
    kys.forEach(function (k) {
        //field either contains an object or a string
        var val = obj[k];
        //console.log(k, val);
        if (typeof (val) == "string")
            display_key_and_value(k, val, display);
        else
            display_object(val, display);
    });
}
;
function display_monster(ev) {
    var display = get_element("combatant_description");
    delete_children(display);
    //console.log(ev.target.value);
    var monster = get_monster(ev.target.value);
    display_object(monster, display);
}
function display_monster_as_table(ev) {
    var display = get_element("combatant_description");
    delete_children(display);
    //console.log(ev.target.value);
    var monster = get_monster(ev.target.value);
    display.appendChild(tabulize_object(monster));
}
function rowalize_key_value(key, value) {
    if (typeof (value) == "string")
        return table_row([text(key), text(value)]);
    else
        return table_row([text(key), tabulize_object(value)]);
}
function tabulize_object(o) {
    var kys = Object.keys(o);
    var list = [];
    kys.forEach(function (k) { list.push(rowalize_key_value(k, o[k])); });
    return table(list);
}
