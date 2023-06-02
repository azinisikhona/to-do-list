let Items = [];

function add(){
    let input = document.getElementById('input');
    let items = input.value;
    input.value = "";
    if(items == ""){
        alert("add a valid item");
    }else{
        Items.push(items);
        return;
        // console.log(Items);
    }

    let itemsList = document.getElementById('dis');
    let newItem = document.createElement("div");
    newItem.className = "item";
    itemsList.appendChild(newItem);

    document.getElementById('dis').innerHTML = Items;
}