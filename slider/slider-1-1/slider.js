;(function($){
    $(function(){
        var $button = $('.number-content')
        var $imgBox = $('.content-box-in')
        var $prev = $('.prev')
        var $next = $('.next')
        var $imgLen = $('.content-img').length
        var $box = $('.content-box')
        var index = 0

        console.log($imgLen)

        function switchs(index){
            $button.eq(index).addClass('number-content-1').siblings().removeClass('number-content-1')
            $imgBox.animate({'left':index * -500},1000)
        }

        $button.hover(function(){
             index = $button.index(this)

            switchs(index)
        })


        $prev.click(function(){
            index --
            console.log(index)
            if(index < 0){
                index = $imgLen - 1
            }
            switchs(index)
        })

        $next.click(function(){
            index++
            index = index >=$imgLen ? 0 : index
            switchs(index)
        })


        function cl(){
            t = setInterval(function(){
                index --
                console.log(index)
                if(index < 0){
                    index = $imgLen - 1
                }
                switchs(index)
            },2000)
            return t
        }

        var t = cl()
        $box.hover(function(){
            clearInterval(t)
        },function(){
            t = cl()
        })

    })
})(jQuery);

;(function(){
    $(function(){

    })
})();