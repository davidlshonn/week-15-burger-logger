$(".eatBurger").on("submit", function(event){
    event.preventDefault();

    var id = $(this).children(".burger_id").val();
    console.log(id)
    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + id
    }).then(() => {
        location.reload();
    })
})