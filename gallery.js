$(function(){
  var img = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg'
  ], currImg = 0, firstImg = 0, lastImg = img.length-1, elem = $('#slider img');

  function goImg(val){
    if(val !== 1) {
      currImg = (currImg !== 0) ? currImg -= 1 : lastImg;
    } else{
      currImg = (currImg !== lastImg) ? currImg += 1 : firstImg;
    }
    console.log(currImg);
    return currImg;
  }

  elem.on('mousewheel', function(event){
    goImg(event.deltaY);
    $(this).fadeOut(function(){
      $(this).attr('src', '/images/thumbnails/'+img[currImg]).fadeIn();
    });

  });
});