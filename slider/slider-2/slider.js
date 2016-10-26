/**
 * Created by db on 16/10/3.
 */


;
(function ($) {
    $(function () {
        var $contentContainer = $('.slider-content-container')
        var $ctrlItem = $('.slider-ctrl-item')
        var $contentItem = $('.slider-content-item')
        var $prev = $('.slider-prev')
        var $next = $('.slider-next')
        var t

        function slideTo(index) {
            $contentItem.removeClass('slider-content-item-cur').hide()
            $contentItem.eq(index).show().addClass('slider-content-item-cur')
        }

        function getIndex() {
            var $contentItemCur = $contentItem.filter('.slider-content-item-cur')
            var index = $contentItem.index($contentItemCur)
            return index
        }

        function interval(){
            var t = setInterval(function () {
                var index = getIndex()
                index = ++index >= $contentItem.length ? 0 : index
                slideTo(index)

            }, 1000)

            return t
        }

        $ctrlItem.hover(function () {
            slideTo($ctrlItem.index(this))
        })


        $prev.click(function () {
            var index = getIndex()
            var curr = --index < 0 ? -1 : index
            slideTo(curr)
        })

        $next.click(function () {
            var index = getIndex()
            index = ++index >= $contentItem.length ? 0 : index
            slideTo(index)
        })



        t = interval()

        $contentContainer.hover(function(){
            clearInterval(t)
        }, function(){
            t = interval()
        })

        $ctrlItem.hover(function(){
            clearInterval(t)
        }, function(){
            t = interval()
        })

    })
})(jQuery);