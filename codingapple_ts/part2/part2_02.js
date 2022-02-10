// literal type 과 narrowing
function F(x) {
    if (x.wheel === "4개") {
        console.log('이 차는' + x.color);
    }
    else {
        console.log('이 바이크는' + x.color);
    }
}
