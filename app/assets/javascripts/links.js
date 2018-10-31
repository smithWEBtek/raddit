$(function(){
    $("a.load_comments").on("click", function(e){
        $.get(this.href).success(function(response){
            $("div.comments").html(response)
        })

        e.preventDefault();
    })
})