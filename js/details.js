detailsarr = JSON.parse(localStorage.getItem("details"));

detailsarr.map(function(elem){
    i = document.createElement("img");
    i.src = elem.imgUrl
    document.querySelector("#img").append(i);

    document.querySelector("#top").append(elem.shirtname);
    document.querySelector("#name").append(elem.shirtname);
    document.querySelector("#price").append(elem.member);
});