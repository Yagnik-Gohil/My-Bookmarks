
$("#show").on("click",function(){
    $('#form').css("display", "block");
    $('#show').css("display", "none");
    $('#hide').css("display", "block");
})
$("#hide").on("click",function(){
    $('#form').css("display", "none");
    $('#show').css("display", "block");
    $('#hide').css("display", "none");
})
$("#edit").on("click",function(){
    if($('.delete').css("display") == "block"){
        $('.delete').css("display", "none");
    } else {
        $('.delete').css("display", "block");
    }
})