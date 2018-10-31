$(function(){
    $("a.load_comments").on("click", function(e){
        $.get(this.href).success(function(response){
            $("div.comments_section").html(response)
        })
        e.preventDefault();
    })
})