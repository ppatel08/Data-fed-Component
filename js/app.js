
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("/js/data.json", function (text) {
    var data = JSON.parse(text);
    console.log(data);
    let elements = ""
data.forEach(element => {
    elements += '<div style="padding: 10px;" class="item col-xs-4 col-lg-4"> <div class="thumbnail card"> <div class="img-event"> <img class="group list-group-image img-fluid" src="'+element.imgURL+'" alt="" /> </div> <div class="caption card-body"> <h4 class="group card-title inner list-group-item-heading"> '+element.title+'</h4> <p class="group inner list-group-item-text"> '+element.description+'</p> <div class="row"> <div class="col-xs-12 col-md-6"> <p class="lead"> $'+element.price+'</p> </div> <div class="col-xs-12 col-md-6"> <a class="btn btn-success" href="javascript(0);">Add to cart</a> </div> </div> </div> </div> </div>'
});
    document.getElementById("products").innerHTML = elements;

});

