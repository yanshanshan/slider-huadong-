/**
 * Created by db on 16/10/3.
 */


;
(function ($) {
    $(function () {
        var $ctrlItem = $('.slider-ctrl-item')
        var $contentItem = $('.slider-content-item')

        function slideTo(index) {
            $contentItem.hide().eq(index).show()
        }

        $ctrlItem.click(function () {
            slideTo($ctrlItem.index(this))
        })

    })
})(jQuery);