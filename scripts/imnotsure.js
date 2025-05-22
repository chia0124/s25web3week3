/*const textA = document.getElementById("pContent");

//now that you have the element, you can find out info about it
console.log(textA.id);
console.log(textA.name);

//querySelector lets you select by any CSS selector (any way you style the element)
const buttons = document.querySelector(".b");

console.log(buttons.id);

//querySelector selects only the first thing that matches the selector
//querySelectorAll selects them all
const allButtons = document.querySelectorAll(".b");

console.log(allButtons[2].textContent);

//using querySelector, you can be very specific about which element you select
const para = document.querySelector("#addAt p");
//once you have the element, you can get info about it - including its children
const spans = para.children;

console.log(spans);

//another way to do the thing above, using querySelectorAll...
const otherSpans = document.querySelectorAll("#addAt p span");
*/


//add an event listener to the element that will add a list item to the end of the list
document.querySelector("#addEnd").addEventListener("click", addToEnd);

//type the function to add an element to the end of the list
function addToEnd(){
    //create a new HTML list item (this element will not yet be added to the page)
    const newListItem = document.createElement("li");

    //get the content of the text area, and add it as text to the new list item
    newListItem.textContent = document.querySelector("#pContent").value;

    //add the new list item to the UL (with the ID adder)
    const adder = document.querySelector("#adder");

    //check to see if there are a certain number of children (more than 16)
    //and if there are, make the text white
    if(adder.children.length > 16){
        //add a class to the element to make it white
        newListItem.classList.add("bright");
    }

    adder.appendChild(newListItem);
}


//add an event listener to the element that will remove the last list item in the list
document.querySelector("#removeLast").addEventListener("click", removeItem);
//add an event listener to the element that will remove the first list item in the list
document.querySelector("#removeFirst").addEventListener("click", removeItem);

function removeItem(){
    //get the adder element (the UL that holds the list items)
    const adder = document.querySelector("#adder");

    //check to see which button was actually clicked...
    //two equals makes a comparison (asks a question)
    //declare the variable cRemove, which will be changed inside the if statement
    let cRemove;
    
    //get the list of children to count them
    const listItems = adder.children;

    //check to make sure there actually are list items to remove...
    if(listItems.length > 0){
        if(this.id == "removeLast"){

            //set the child to remove variable to be the last child
            cRemove = listItems.length - 1;
        }else{
            cRemove = 0;
        }
        //remove the child element based on which button was clicked
        adder.removeChild(listItems[cRemove]);
    }

    

    /*//check the length first to make sure there is a list item to remove
    if(listItems.length > 0){
        //use the length of the list of children to remove the last child
        //have to do length-1 because arrays always start at 0
        const lastC = listItems.length - 1;

        //tell the UL to remove the last child specifically
        adder.removeChild(listItems[lastC]);
    }*/
}