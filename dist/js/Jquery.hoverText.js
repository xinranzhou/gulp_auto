/**
 * Created by zxr on 16/3/22.
 */
(function($){
    $.fn.hoverText = function(options){
        var def = {
            color:'red',
            fontSize:'20px',
            borderColor:'blue'
        };
        var obj = $.extend(def,options);
        return this.each(function(){
            var oldcolor = def.color;
            $(this).hover(function(){
                console.log(obj);
                console.log(obj.color);
                console.log(obj.fontSize);
                console.log(obj.borderColor);
                $(this).css('color',obj.color);
                $(this).css('font-size',obj.fontSize);
                $(this).css('border-color',obj.borderColor);
            },function(){
                $(this).css('color',oldcolor);
            })
        });

    }


})(jQuery);