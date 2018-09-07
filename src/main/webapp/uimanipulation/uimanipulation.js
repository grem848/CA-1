var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

document.getElementById("boys").innerHTML = boys.join('<br>');
document.getElementById("girls").innerHTML = girls.join('<br>');
document.getElementById("all").innerHTML = girls.join('<br>').concat('<br>' + boys.join('<br>'));
var all = girls.concat(boys);

document.getElementById("addboy").addEventListener("click", submitAddBoy);
function submitAddBoy(e) {
    e.preventDefault();
    var name = document.getElementById("newboy").value;
    if (name.length > 0)
    {
        boys.unshift(name);

    }
    document.getElementById("boys").innerHTML = boys.join('<br>');
    all = girls.concat(boys);
    document.getElementById("all").innerHTML = girls.join('<br>').concat('<br>' + boys.join('<br>'));
}

document.getElementById("addgirl").addEventListener("click", submitAddGirl);
function submitAddGirl(e) {
    e.preventDefault();
    var name = document.getElementById("newgirl").value;
    if (name.length > 0)
    {
        girls.unshift(name);

    }
    document.getElementById("girls").innerHTML = girls.join('<br>');
    all = girls.concat(boys);
    document.getElementById("all").innerHTML = all.join('<br>');
}


document.getElementById("removeboy").addEventListener("click", buttonRemoveBoy);
function buttonRemoveBoy(e) {
    e.preventDefault();
    boys.shift();
    document.getElementById("boys").innerHTML = boys.join('<br>');
    all = girls.concat(boys);
    document.getElementById("all").innerHTML = all.join('<br>');
}

document.getElementById("removegirl").addEventListener("click", buttonRemoveGirl);
function buttonRemoveGirl(e) {
    e.preventDefault();
    girls.shift();
    document.getElementById("girls").innerHTML = girls.join('<br>');
    all = girls.concat(boys);
    document.getElementById("all").innerHTML = all.join('<br>');
}

document.getElementById("first").addEventListener("click", buttonRemoveFirst);
function buttonRemoveFirst(e) {
    e.preventDefault();
    all.shift();
    document.getElementById("boys").innerHTML = boys.join('<br>');
    document.getElementById("girls").innerHTML = girls.join('<br>');
    document.getElementById("all").innerHTML = all.join('<br>');
}
/* Can't handle removing from boys and girls, only removes from all*/

document.getElementById("last").addEventListener("click", buttonRemoveLast);
function buttonRemoveLast(e) {
    e.preventDefault();
    all.pop();
    document.getElementById("boys").innerHTML = boys.join('<br>');
    document.getElementById("girls").innerHTML = girls.join('<br>');
    document.getElementById("all").innerHTML = all.join('<br>');
}
/* Can't handle removing from boys and girls, only removes from all*/

document.getElementById("reverse").addEventListener("click", buttonReverseAll);
function buttonReverseAll(e) {
    e.preventDefault();
    all.reverse();
    document.getElementById("all").innerHTML = all.join('<br>');
}

var flipsort = true;
document.getElementById("sort").addEventListener("click", sortAll);
function sortAll(e) {
    e.preventDefault();
    if (flipsort === true)
    {
        all.sort(function (a, b) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if (a !== b)
            {
                return a < b ? -1 : 1;
            }
            return 0;
        });
        flipsort = false;

    } else {

        all.sort(function (a, b) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if (a !== b)
            {
                return a > b ? -1 : 1;
            }
            return 0;
        });
        flipsort = true;
    }
    document.getElementById("all").innerHTML = all.join('<br>');
}