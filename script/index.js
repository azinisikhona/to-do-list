let Items = [];

function add(){
    let input = document.getElementById('input').value;
    if(input == ""){
        alert("add a valid item");
    }else{
        Items.push(input);
        console.log(Items);
    }

    document.getElementById('dis').innerHTML = Items;
}