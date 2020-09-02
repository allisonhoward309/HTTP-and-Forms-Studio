window.addEventListener("load", function() {
    console.log('window loaded');
    let newImage = [ "photos/shelf.jpg", "photos/tray.jpg"];
    let next = document.getElementById("next")

    next.addEventListener("click", function(event){
        for (let i=1; i < newImage.length ; i++) {
        document.getElementById("craftsImg").src = newImage[i];
        }
    });

});
