$(function(){
    
    
    /* 메뉴클릭시 */
    $('.hamburger').click(function(){
        
        if($(this).hasClass('open')){
            $(this).removeClass('open')
            $('nav>ul').removeClass('open')
        }else{
            $(this).addClass('open')
            $('nav>ul').addClass('open')
        }
         
        $(window).resize(function(){
            var win_w =$(this).outerWidth()
            
            
            if(win_w > 768){
                $('.hamburger').removeClass('open') 
                $('nav>ul').removeClass('open')
            }
        })
    })
    
    /* 서브메뉴 클릭시 */
    
    $('nav>ul>li>a').click(function(){
        var target = $(this)
        
        if(target.siblings('ul').hasClass('open')){
            target.siblings('ul').removeClass('open')
        }else{
            $('nav>ul>li>a').siblings('ul').removeClass('open')
            target.siblings('ul').addClass('open')
        }
        
    
        
        $(window).resize(function(){
            var win_w =$(this).outerWidth()
            
            
            if(win_w > 768){
                $('nav>ul>li>a').siblings('ul').removeClass('open')   
            }
            
        })
       
    })
    
})