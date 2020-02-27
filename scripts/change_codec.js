function codec_change_color(color_base,color_comp){
    console.log("ni");
    var block_elements = document.getElementsByClassName("text-color-base");
    var other_block_elements = document.getElementsByClassName("text-color-complement");

    for (let index = 0; index < block_elements.length; index++) {
        block_elements[index].style.color=color_base;
    }

    for (let index = 0; index < other_block_elements.length; index++) {
        other_block_elements[index].style.color=color_comp;
    }
}

function serial_management(){
    let input = document.getElementsByTagName("input")[1].value;
    console.log("jeje: "+input)
    switch (input) {
        case "colorblue":
            codec_change_color("rgb(78, 110, 255)","rgb(135, 182, 253)");
            break;
    
        default:
            console.log("nope");
            break;
    }
}