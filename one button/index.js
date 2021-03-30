clicked = false;
counter = 0;

function update(){
    if(clicked == false){
        counter = 0;
        clicked = true;
        setTimeout(function(){
            alert("end!");
    alert(`${counter} clicked!`)
    clicked = false;
        }, 5000);
    }
    counter++;
}
