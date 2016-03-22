/**
 * Created by zxr on 16/3/22.
 */
(function($){
    $.fn.imgScroll = function(options){
        var def = {
            width:'300px',
            height:'500px',
            left:'30px',
            top:'500',
            backGround:'#fff',
            href:'javascript:void(0);'
        };
        var obj = $.extend(def,options);
        return $(this).each(function(){
           var $this = $(this);
            var doc = $(document);
            var eH = obj.height;
            $this.css({
                position:'absolute',
                left:obj.left
            });
            doc.scroll(function(){
                var scrollTop = doc.scrollTop();
                //console.log(scrollTop);
                //console.log($this);
                var all = obj.top ;
                console.log(all + scrollTop);

                $this.css('top',all + scrollTop);
            })
        });
    }


})(jQuery);