$(document).ready(function(){

    $("#new_burger").on("click", function(event){

        event.preventDefault();

        let request = {
            type: "post",
            url: "/newburger",
            data: {
                name: $("#burger").val()
            },
            success: function(){
                $("#burger").val("");
            }
        };
        $.ajax(request);
    });
});
