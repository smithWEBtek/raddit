$(function(){
    $("a.load_comments").on("click", function(e){
        $.get(this.href).success(function(response){
            $("div.comment").html(response)
            var comment_section = document.querySelector('.comments_section')

            response.forEach(function(comment) {
              var comment_body = `${comment.body}`
                comment_section.innerHTML += `${comment_body} <br> `
            });
        })
        e.preventDefault();
    })
})

// Submit comment via AJAX

$(function() {
    $("#new_comment").on("submit", function(e){
    alert("You clicked it")
    url = this.action

    data = {
        'authenticity_token': $("input[name='authenticity_token']").val(),
        'comment': {
            'content': $("comment_content").val()
        }
    };

    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function(response){
            var $
        }
    })
    e.preventDefault();
    })
});