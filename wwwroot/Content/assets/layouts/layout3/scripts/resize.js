    var images=[];
function myFunction() {
    images.push(document.getElementById("logo"));
    if (document.getElementById("ConvertedImage") != null) {
        images.push(document.getElementById("ConvertedImage"));
    }
    else if (document.getElementById("Cekilis") != null) {
        images.push(document.getElementById("Cekilis"));
    }
    var win = $(window).width();
    if (win > 625) {
        for (var i = 0; i < images.length; i++) {
            switch (images[i].id) {
                case "ConvertedImage": images[i].width = 833;
                case "logo": images[i].width = 600; break;
                case "Cekilis": images[i].width = 600;images[i].height = 600; break;
                default: break;
            }
            if (win > 858) {
                if (images[i].id == "ConvertedImage") {
                    images[i].width = 833;
                }
            } else {
                if (images[i].id == "ConvertedImage") {
                    images[i].width = win-25;
                }
            }
        }
    }
    else {
        for (var i = 0; i < images.length; i++) {
            switch (images[i].id) {
                case "Cekilis": images[i].width = win - 25; images[i].height = win - 25; break;
                default: images[i].width = win - 25; break;
            }
        }
    }
}
