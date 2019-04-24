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
    // button to add functionality later//
    var new_list_button = document.createElement('button');
    new_list_button.setAttribute('id', 'list-button' + list_number);
    new_list_button.setAttribute('class', 'list-button');
    // add the list name via inherited variable//
    new_list_span.innerHTML = list_name;
    // add the button image (ellipsis)//
    new_list_button.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
    // put the span (list name) and button (ellipsis) in that top flex part//
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
    new_list_add.setAttribute('id', 'list-add' + list_number);
    new_list_add.setAttribute('class', 'list-add');
    new_list_add.setAttribute('onclick', `nameCard("${new_cards.id}")`);
    new_list_add.innerHTML = '<i class="fas fa-plus"></i> &nbsp<u>Add a card</u>';
    new_list.appendChild(new_list_add);
    var new_lists = document.querySelector("#new-lists");
    new_lists.appendChild(new_list);
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
    new_card_namer.setAttribute('onchange', `addCard("${new_card.id}", "${new_card_namer.id}", "${id}")`);
    var list_destination = document.getElementById(id);
    list_destination.style.padding = "0px 8px 8px 8px";
    list_destination.appendChild(new_card_namer);
    list_destination.appendChild(new_card);
    card_number += 1;
}

function addCard(card, namer, id){
    var list_destination = document.getElementById(id);
    list_destination.style.padding = "0px 8px";
    var named = document.getElementById(namer);
    var name = named.value;
    named.style.display = "none";
    var card = document.getElementById(card);
    card.style.display = "block";
    card.innerHTML = name;
}

function replacePlaceholder(){

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