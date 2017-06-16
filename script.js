function swapImage(){
    var swapImage = $('#switch').attr('data-swap'),
        currentImage = $('#switch').attr('src');

    $('#switch').attr({
        'src': swapImage,
        'data-swap': currentImage
    });
};