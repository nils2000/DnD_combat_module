heroes = ["Konstantin","Walter","Olaf"]
monster = ["Ork","Riese","Drache"]

initiative =
    "Konstantin":3
    "Walter":1
    "Olaf":5

sort_by_initiative = (a,b) -> initiative[a] < initiative[b]

#console.log(heroes.sort())
#console.log(heroes.sort(sort_by_initiative))

li = (thing) -> 
    ret = document.createElement("li")
    ret.innerText = thing
    return ret

div = document.getElementById("add_combatant")
ul = document.createElement("ul")
ul.appendChild(li(k + initiative[k])) for k in heroes.sort(sort_by_initiative)
div.appendChild(ul)


#https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random
getRandomInt = (min,max) -> 
    _min = Math.ceil(min)
    _max = Math.floor(max)
    Math.floor(Math.random() * (_max - _min)) + _min
console.log(getRandomInt(1,21) for a in [1...100])
w20 = () -> getRandomInt(1,21)
console.log(w20())
w6 = () -> getRandomInt(1,7)
console.log(w6())

runup = ([h,w20()+initiative[h]] for h in heroes).sort((a,b)->a[1] < b[1])
console.log(runup)
