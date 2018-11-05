$(function(){
    $("a.load_comments").on("click", function(e){
        $.get(this.href).success(function(response){
            $("div.comment").html(response)
            var comment_section =  document.querySelector('.comments_section')

            response.forEach(function(comment) {
              var comment_body = `${comment.body}`
                comment_section.innerHTML = comment_body
             console.log(comment_section) /*comment_section.appendChild(`${comment.body}`)*/
            });
        })
        e.preventDefault();
    })
})