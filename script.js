function disappear(item){
    item.style.display = "none";
    appear();
}

function appear(){
    var element = document.querySelector('.swim-lane-namer');
    element.style.display = "inline-block";
}

/*--- Code below forms a new list when you create a 
name and hit the green button, "Add List" --*/
function addList(){
    var list_name = document.querySelector('.list-title').value;
    if (list_name == ''){
        return;
    } else {
        createEmptyList(list_name);
        document.querySelector('.list-title').value = '';
        document.querySelector('.list-title').focus();
    }
}

let list_number = 1;
function createEmptyList(list_name){
    var new_list = document.createElement('div');
    new_list.setAttribute('id', 'list' + list_number);
    new_list.setAttribute('class', 'list');
    var new_list_span = document.createElement('span');
    new_list_span.setAttribute('id', 'list-span' + list_number);
    new_list_span.setAttribute('class', 'list-span');
    var new_list_button = document.createElement('button');
    new_list_button.setAttribute('id', 'list-button' + list_number);
    new_list_button.setAttribute('class', 'list-button');
    new_list_span.innerHTML = list_name;
    new_list_button.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
    new_list.appendChild(new_list_span);
    new_list.appendChild(new_list_button);
    var list_group = document.querySelector("#list-group");
    list_group.prepend(new_list, list_group.childNodes[0]);
}




//==Experimental==//

// document.body.addEventListener("click", (evt) => {
//     const flyoutElement = document.getElementsByTagName("body");
//     let targetElement = evt.target; // clicked element

//     do {
//         if (targetElement == flyoutElement) {
//             // This is a click inside. Do nothing, just return.
//             return;
//         }
//         // Go up the DOM
//         targetElement = targetElement.parentNode;
//     } while (targetElement);

//     // This is a click outside.
//     console.log(document.querySelector('.swim-lane-namer'));
//     document.querySelector(".swim-lane-namer").style.display = "none";
//     document.querySelector('.swim-lane-placeholder').style.display = "inline-block;"
// });