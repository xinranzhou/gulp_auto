/**
 * Created by zxr on 16/3/22.
 */
(function($){
    $.fn.showF =function(){
        var $this = $(this);
        return $this.each(function(){
                $(this).hover(function(){
                    $(this).addClass('red');
                },function(){
                    $(this).removeClass('red');
                })
            })
    }
})(jQuery);