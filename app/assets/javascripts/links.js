// Show comments on click

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
});

// Submit comment via AJAX

$(function() {
    $("#new_comment").on("submit", function(e){
    url = this.action
    var commentText = document.getElementById("comment_body").innerHTML
    var myJSON = JSON.stringify(commentText);

    data = {
        'authenticity_token': $("input[name='authenticity_token']").val(),
        'comment': {
            'content': $(myJSON).val()
        }
    };

    $.ajax({
        type: "POST",
        url: url,
        data: data,
        headers: {'Content-Type': 'application/json' },
        success: function(response){
            var $div = $("div.comments ul");
            $div.append(response)
        }
    })
    e.preventDefault();
    })
});

// Show a User's Links

$(function(){
    $("a.load_links").on("click", function(e){
        $.get(this.href).success(function(response){
            $("div.link").html(response)
            var link_section = document.querySelector('.links_section')

            response.forEach(function(link) {
              var link_title = `${link.title}`
                link_section.innerHTML += `${link_title} <br> `
            });
        })
        e.preventDefault();
    })
});
