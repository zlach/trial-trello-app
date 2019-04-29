
function disappear(item){
    item.style.display = "none";
    appear();
}

function appear(){
    var element = document.querySelector('.swim-lane-namer');
    // var clickout = document.querySelector('#clickout-guy')
    // clickout.style.display = "block";
    element.style.display = "inline-block";
    var element_input = document.getElementById('list-title');
    element_input.focus();
}

/*--- Code below forms a new list when you create a 
name and hit the green button, "Add List" --*/
function addList(){
    var byebye = document.getElementById('list-dropdown');
    byebye.style.display = "none";
    var list_name = document.querySelector('.list-title').value;
    if (list_name == ''){
        return;
    } else {
        createEmptyList(list_name);
        document.querySelector('.list-title').value = '';
        document.querySelector('.list-title').focus();
        // replacePlaceholder();
    }
}

let list_array = [];

function replacePlaceholder(){
    
    var namer = document.querySelector(".swim-lane-namer");
    namer.style.display = "none";
    var placeholder = document.querySelector('.swim-lane-placeholder');
    placeholder.style.display = "inline-block";
    // placeholder.innerHTML = "<i class='fas fa-plus'></i> &nbspAdd another list";

    // var clickout = document.querySelector('#clickout-guy');
    // clickout.style.display = 'none';
}

let list_number = 1;
function createEmptyList(list_name){
    // create empty list to hold it all//
    var new_list = document.createElement('div');
    new_list.setAttribute('id', 'list' + list_number);
    new_list.setAttribute('class', 'list');
    // top of list needs own div so it can flex//
    var new_list_top = document.createElement('div');
    new_list_top.setAttribute('id', 'list-top' + list_number);
    new_list_top.setAttribute('class', 'list-top');
    // the title will go in a span that can be edited//
    var new_list_span = document.createElement('span');
    new_list_span.setAttribute('id', 'list-span' + list_number);
    new_list_span.setAttribute('class', 'list-span');
    new_list_span.setAttribute('contenteditable', 'true');
    // // button to add functionality later//
    var new_list_button = document.createElement('button');
    new_list_button.setAttribute('id', 'list-button' + list_number);
    new_list_button.setAttribute('class', 'list-button');
    new_list_button.setAttribute('onclick', 'listDropdown(this)'); //function
    // add the list name via inherited variable//
    new_list_span.innerHTML = list_name;
    // add the button image (ellipsis)//
    new_list_button.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
    // //stick the button in the div for dropdown purposes//
    // var dropdown_container = document.createElement('div');
    // dropdown_container.setAttribute('id', 'dropdown-container' + list_number);
    // dropdown_container.setAttribute('class', 'dropdown-container');
    // dropdown_container.innerHTML = `<button id="list-button${list_number}" class="list-button" onclick="someShit('dropdown-container${list_number}')"><i class="fas fa-ellipsis-h"></i></button><div><a href='#'>Move List</a><a href='#'>Delete List</a></div>`;



    // put the span (list name) and button in that top flex part//
    new_list_top.appendChild(new_list_span);
    new_list_top.appendChild(new_list_button);
    // add the top part to the list//
    new_list.appendChild(new_list_top);
    //add empty middle section to add cards to later//
    var new_cards = document.createElement('div');
    new_cards.setAttribute('id', 'new-cards' + list_number);
    new_cards.setAttribute('class', 'new-cards');
    new_list.appendChild(new_cards);
    // add a bottom button that will activate new card//
    var new_list_add = document.createElement('button');
    new_list_add.setAttribute('id', 'card-add' + list_number);
    new_list_add.setAttribute('class', 'card-add');
    new_list_add.setAttribute('onclick', `nameCard("${new_cards.id}")`); //function//
    new_list_add.innerHTML = '<i class="fas fa-plus"></i> &nbsp<span>Add a card</span>';
    //tie it all together and push it on out//
    new_list.appendChild(new_list_add);
    var new_lists = document.querySelector("#new-lists");
    new_lists.appendChild(new_list);
    
    list_array.push(new_list);
    list_number += 1;
}



let card_number = 1;
function nameCard(id){
    var new_card = document.createElement('button');
    new_card.setAttribute('id', 'new-card' + card_number);
    new_card.setAttribute('class', 'new-card');
    new_card.style.display = "none";
    var new_card_namer = document.createElement('textarea');
    new_card_namer.setAttribute('id', 'card-namer' + card_number);
    new_card_namer.setAttribute('class', 'card-namer');
    new_card_namer.setAttribute('placeholder', 'Enter a title for this card...');
    new_card_namer.setAttribute('onblur', `cardBlur("${new_card.id}", "${new_card_namer.id}", "${id}")`); //function - maybe go back and change this functionality//
    new_card_namer.setAttribute('onkeypress', `detectKey(event, "${new_card.id}", "${new_card_namer.id}", "${id}")`);//function
    var list_destination = document.getElementById(id);
    list_destination.style.padding = "0px 8px";
    list_destination.appendChild(new_card_namer);
    list_destination.appendChild(new_card);
    new_card_namer.focus();
    new_card_namer.value = '';
    card_number += 1;
}

function cardBlur(card, namer, id) {
    var named = document.getElementById(namer);
    var name = named.value;
    if (name == ''){
        named.style.display = 'none';
    } else{
        addCard(card, namer, id);
    }
}


function detectKey(event, card, namer, id){
    if(event.keyCode == 13){
        event.preventDefault();
        var named = document.getElementById(namer);
        if (named.value == ''){
            return;
        } else {
            var name = document.getElementById(namer);
            name.blur(); //blur instead of addCard to prevent calling addCard twice (once on blur and once on this)
            nameCard(id);
        }
    } else {
        return;
    }    
}

function enterDirect(evt){
    if(evt.keyCode == 13){
        addList();
    } else {
        return;
    }
}

function addCard(card, namer, id){
    var list_destination = document.getElementById(id);
    list_destination.style.padding = "0px 8px";
    var named = document.getElementById(namer);
    var name = named.value;
    named.style.display = "none";
    var spanny = document.createElement('span');
    spanny.innerHTML = name;
    var butt = document.createElement('button');
    // NEED TO SET ATTRIBUTES!!!
    butt.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    // butt.style.display = "none";
    var card = document.getElementById(card);
    card.style.display = "flex";
    card.append(spanny);
    card.append(butt);
    card.style.justifyContent = 'space-between';

    // console.log(id[id.length - 1]);
    // showAddCardButton(id);
}

// function showAddCardButton(id){
//     var bottom = document.getElementById('card-add' + id[id.length - 1]);
//     bottom.style.display = "none";
//     var new_bottom = document.createElement('div');
//     new_bottom.innerHTML = "<input type='button' value='fooku'/>";
//     var target = document.getElementById('list' + id[id.length - 1]);
//     target.insertAdjacentHTML('beforeend', new_bottom);
// }


// let swim_lane_namer = document.querySelector(".swim-lane-namer");

// swim_lane_namer.addEventListener("focusout", replacePlaceholder);


function listDropdown (thing){
    resetListDropdown();
    var proxy = document.getElementById('list-proxy');
    var button = document.getElementById(thing.id);
    var list_number = button.id.slice(11);
    for (let i = 0;i < list_array.length;i++){
        if (list_array[i].id == ('list' + list_number)){
            proxy.innerHTML = i + 1;
        }
    }

    var dropdown = document.getElementById('list-dropdown');
    var scroll = document.getElementById('list-group');
    var scrollLeft = scroll.scrollLeft;
    dropdown.style.top = button.offsetTop + 34 + 'px';
    dropdown.style.left = (button.offsetLeft - scrollLeft) + 'px';
    dropdown.style.display = "block";
}

function goAwayDroppy (){
    var dropdown = document.getElementById('list-dropdown');
    dropdown.style.display = "none";
}

function deleteListMenu() {
    var bottom_old = document.getElementById('list-dropdown-bottom');
    bottom_old.style.display = "none";
    var spanny = document.getElementById('list-d-text');
    spanny.innerHTML = "Delete List";
    var back = document.getElementById('list-d-back');
    back.style.visibility = "visible";
    var span = document.createElement('span');
    span.setAttribute('id', 'top-span')
    span.innerHTML = 'Are you sure you want to delete this list?';
    var sub_span = document.createElement('span');
    sub_span.setAttribute('id', 'sub-span');
    sub_span.innerHTML = '(This action cannot be undone)';
    var button_container = document.createElement('div');
    button_container.setAttribute('id', 'list-yes-no');
    var yea = document.createElement('input');
    yea.setAttribute('class', 'green-butt');
    yea.setAttribute('type', 'button');
    yea.setAttribute('value', 'Yes');
    var nay = document.createElement('input');
    nay.setAttribute('class', 'green-butt');
    nay.setAttribute('type', 'button');
    nay.setAttribute('value', 'No');
    button_container.append(yea);
    button_container.append(nay);
    var bottom = document.getElementById('list-dropdown-bottom3');
    bottom.style.display = "flex";
    bottom.append(span);
    bottom.append(sub_span);
    bottom.append(button_container);
}

function moveListMenu() {
    var spanny = document.getElementById('list-d-text');
    spanny.innerHTML = "Move List";
    var back = document.getElementById('list-d-back');
    back.style.visibility = "visible";
    var span = document.createElement('span');
    span.innerHTML = 'Position:';
    var bottom_old = document.getElementById('list-dropdown-bottom');
    bottom_old.style.display = "none";
    var bottom = document.getElementById('list-dropdown-bottom2');
    bottom.style.display = "flex";
    var select = new ListOptions();
    var submit = document.createElement('input');
    submit.setAttribute('class', 'green-butt');
    submit.setAttribute('type', 'submit');
    var form = document.createElement('form');
    form.setAttribute('onsubmit', 'return moveList();');
    var myDiv = document.createElement('div');
    myDiv.append(span);
    myDiv.append(select);
    form.append(myDiv);
    form.append(submit);
    bottom.append(form);
}


function moveList(){
    var list_number = document.getElementById('list-proxy').textContent;
    var index = list_number - 1;
    var selected = document.forms[0].children[0].children[1].options[document.forms[0].children[0].children[1].selectedIndex].value;
    selected = selected - 1;
    console.log(selected);
    if (selected[selected.length - 1] == ')'){
        return false;
    } else {
        for (let i = 0; i < list_array.length;i++){
            if (i == index){
                let move = list_array.splice(i, 1)[0];
                list_array.splice(selected, 0, move);
                console.log(list_array);
            }
        }
    }
    goAwayDroppy();
    reprintLists();
    return false;
}

function reprintLists(){
    var lists = document.getElementById('new-lists');
    lists.innerHTML = '';
    for (let list of list_array){
        console.log(list_array);
        lists.append(list);
    }
}

function ListOptions(){
    var select = document.createElement('select');
    var current = document.getElementById('list-proxy').textContent;
    current = current - 1;
    
    for (let i = 0; i < list_array.length;i++){
        if ( i == current){
            var option = document.createElement('option')
            option.innerHTML = (i + 1) + " (current)";
            option.setAttribute('selected', 'selected');
            select.append(option);
        } else {
            var option = document.createElement('option')
            option.innerHTML = i + 1;
            select.append(option);
        }
    }

    return select;
}


function resetListDropdown(){
    var back = document.getElementById('list-d-back');
    back.style.visibility = "hidden";
    var spanny = document.getElementById('list-d-text');
    spanny.innerHTML = "List Actions";
    var bottom_old = document.getElementById('list-dropdown-bottom');
    bottom_old.style.display = "initial";
    var bottom = document.getElementById('list-dropdown-bottom2');
    bottom.style.display = "none";
    bottom.innerHTML = '';
}

//==Experimental==//

/*--- This is running on every click which may not be great--*/

document.body.addEventListener("click", (evt) => {
    const flyoutElement = document.querySelector(".swim-lane-namer");
    let targetElement = evt.target; // clicked element
    const fly = document.querySelector('.swim-lane-placeholder');
    const fly_guy = document.querySelector('#list-dropdown');
    // const fly_lists = document.getElementsByClassName('list');
        do {
            if (targetElement == flyoutElement || targetElement == fly || targetElement == fly_guy || targetElement.className == 'list') {
                // This is a click inside. Do nothing, just return.
                return;
            }
            // Go up the DOM
            targetElement = targetElement.parentNode;
        } while (targetElement);

    // This is a click outside.
    
    resetListDropdown();
    replacePlaceholder();
    goAwayDroppy ();
});

//==Experimental above==//
