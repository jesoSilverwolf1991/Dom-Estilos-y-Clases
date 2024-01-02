function changeImage(imageUrl) {
   
    var mainImage = document.querySelector('.main-image');

    mainImage.src = imageUrl;

   
    var thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(function(thumbnail) {
        thumbnail.classList.remove('active');
        if (thumbnail.src === imageUrl) {
            thumbnail.classList.add('active');
        }
    });
}
