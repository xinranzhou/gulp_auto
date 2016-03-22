/**table-ui
 * version:1.0.0
 * Created by zxr on 16/3/22.
 * 实现隔行变色功能和鼠标经过文字变色
 */
(function($){
    $.fn.table_Ui = function(options){
        var def= {
            oddClass:'odd',
            addClass:'add',
            active:'active',
            tdLen:'4',
            tdWidth:'25%',
            tdHeight:'40px'
        };
        var obj = $.extend(def,options);
        return $(this).each(function(){
            var $tab = $(this);
            $tab.css('width','100%');
            for(var i =0 ;i < obj.tdLen ; i++ ){
                $tab.append('<tr></tr>');
            }
            for(var i =0 ;i < obj.tdLen ; i++ ){
                $tab.find('tr').append('<td></td>');
                $tab.find('td').css({
                    width:$tab/_td,
                    height:obj.tdHeight
                }).text(obj.tdLen);
            }
            var _td = $('td').length;

            $tab.find('tr:even').addClass(obj.oddClass);
            $tab.find('tr:odd').addClass(obj.addClass);
            $tab.find('tr').mouseover(function(){
                $(this).addClass(obj.active);
            });
            $tab.find('tr').mouseout(function(){
                $(this).removeClass(obj.active);
            });
        });
    }
})(jQuery);