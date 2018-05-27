//to Scrape new Articles
$("#scrapping").on("click", function () {
    $.ajax({
        type: "GET",
        url: "/scrape"
    }).then(function (data) {
        console.log(data);
        

    });
    // $.ajax({
    //         type: "GET",
    //         url: "/scrape",

    //     })
    //     .then(function (data) {


    //         console.log(data);
         
    //     });
    // return false;
    alert("clicked");
});
