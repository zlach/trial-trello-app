function disappear(item){
    item.style.display = "none";
    appear();
}

function appear(){
    var element = document.querySelector('.swim-lane-namer');
    element.style.display = "inline-block";
}

function addList(){
    var list_name = document.querySelector('.list-title').value;
    createEmptyList(list_name);
    document.querySelector('.list-title').value = '';
}

let list_number = 1;
function createEmptyList(list_name){
    var new_list = document.createElement('div');
    new_list.setAttribute('id', 'list' + list_number);
    new_list.setAttribute('class', 'list');
    new_list.innerHTML = list_name;
    var list_group = document.querySelector("#list-group");
    list_group.insertBefore(new_list, list_group.childNodes[0]);
}