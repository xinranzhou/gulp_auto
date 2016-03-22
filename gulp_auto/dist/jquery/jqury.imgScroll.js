/**
 * Created by zxr on 16/3/22.
 */
(function($){
    $.fn.imgScroll = function(options){
        var def = {
            width:300,
            height:500,
            left:30,
            top:500,
            backGround:'#fff',
            href:'javascript:void(0);'
        };
        var obj = $.extend(def,options);
        return $(this).each(function(){
           var $this = $(this);
            var doc = $(document);
            var eH = obj.height;
            var eW= obj.width;
            var eL = obj.left;
            var eB = obj.backGround;
            $this.css({
                position:'absolute',
                width:eW,
                height:eH,
                background:eB,
                left:obj.left,
                top:obj.top
            });
            doc.scroll(function(){
                var scrollTop = doc.scrollTop();
                //console.log(scrollTop);
                //console.log($this);
                var all = obj.top ;
                $this.css('top',all + scrollTop);
            })
        });
    }


})(jQuery);