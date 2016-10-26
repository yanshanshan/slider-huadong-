/**
 * Created by db on 16/10/3.
 */
;(function($){
    $(function(){
        var $content = $('.slider-content-item')





        function switchs(index){
            $content.removeClass('slider-content-item-cur').hide()
            $content.eq(index).addClass('slider-content-item-cur').show()

        }
        function getIndex(){
            var $contentCur =  $content.filter('.slider-content-item-cur')
            var index = $content.index($contentCur)
            return index
        }


        //按钮导航绑定
        ;(function(){
            var $button = $('.slider-ctrl-item')
            $button.hover(function(){
                console.log($button.index(this))
                switchs($button.index(this))
            })
        })();





        //左右点击绑定
        ;(function(){
            var $prev = $('.slider-prev')
            var $next = $('.slider-next')

            $prev.click(function(){
                var index = getIndex()
                console.log(index)
                var  index = ++index >= $content.length ? 0 : index
                //index ++
                //if(index >= $content.length ){
                //    index = 0
                //}

                switchs(index)
            })
            $next.click(function(){
                var index = getIndex()
                console.log(index)
                var index = --index < 0 ? $content.length -1 : index

                switchs(index)

            })
        })();



        function setInter(){
            var t =  setInterval(function(){
                var index = getIndex()
                console.log(index)
                var index = --index < 0 ? $content.length -1 : index

                switchs(index)
            },2000)
            return t
        }
        var t = setInter()
       $('.slider').hover(function(){
           clearInterval(t)
       },function(){
           t = setInter()
       })

    })
})(jQuery)
