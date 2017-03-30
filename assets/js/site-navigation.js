var open = $('.open'),
    a = $('ul').find('a');

console.log(a.hasClass('active'));

open.click(function(e){
    e.preventDefault();
    var $this = $(this),
        speed = 300;
    if($this.hasClass('active') === true) {
        $this.removeClass('active').next('.box').slideUp(speed);
    } else if(a.hasClass('active') === false) {
        $this.addClass('active').next('.box').slideDown(speed);
    } else {
        a.removeClass('active').next('.box').slideUp(speed);
        $this.addClass('active').next('.box').slideDown(speed);
    }
});
