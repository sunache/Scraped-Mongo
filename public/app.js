// $(document).on("click", ".saved", function () {
//     var thisId = $(this).attr("data-id");
//     $.ajax({
//         type: "GET",
//         url: "/saved/" + thisId
//     });
//     alert("Article has been saved!");
// })
$(document).ready(function () {
    $(document).on("click", "#saved", function () {
        var thisId = $(this).attr("data-id");
        $.ajax({
            type: "GET",
            url: "/saved/" + thisId,
            data: {saved: true}
        }).then(function () {
            location.reload();
alert("Article has been saved!");
        })
        
    });

$(document).on("click", "#delete", function () {
            var thisId = $(this).attr("data-id");
            $.ajax({
                type: "GET",
                url: "/delete/" + thisId,
                data: {
                    saved: false
                }
            }).then(function () {
                alert("Article has been deleted!");
                location.reload();
            })

        });
    $(document).on("click", "#addNote", function () {
        var text = prompt("Please add a note", "");
    var thisId = $(this).attr("data-id");
    
    $.ajax({
        type: "GET",
        url: "/articles/" + thisId,
        data: {
          note: text
        }
    }).then(function () {
        alert("note has been added!");
        location.reload();
    })

});

    $(document).on("click", "#viewNote", function () {
          var thisId = $(this).attr("data-id");
        $.ajax({
            type: "GET",
            url: "/articles/" + thisId,
            data: {
                note: note
            }
        }).then(function () {
            alert("note:" + note);
            location.reload();
        })

    });
    
    

});