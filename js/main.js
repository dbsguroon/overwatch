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
        
        $(window).scroll(function(){
            var w_scroll = $(window).scrollTop()
            
            if(w_scroll > 400){
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
    
    
    /* flatform 모달창 */
    $('.header-btn a').click(function(){
        $('.modal').addClass('open')
          $('body').css({
             overflow:'hidden',
             height:'100%',
         })
        
    })
     $('.modal .close_btn').click(function(){
        $('.modal').removeClass('open')
        $('body').css({
             overflow:'auto',
             height:'auto',
         })
        
    })
    
    /* 로그인창 */
    
    var toggle_btn = $('.form_box .toggle_btn'),
        register = $('.form_box #register'),
        user_login = $('.form_box #login'),
        btn_bg = $('.form_box #btn_bg')
    
    toggle_btn.click(function(){
        var target = $(this)
        var idx = target.index()
        
        console.log(idx)
        
        if (idx == 1){
            user_login.show()
            register.hide()
            btn_bg.css('left','0')
            
            
        }else if(idx ==2){
            register.show()
            user_login.hide()
            btn_bg.css('left','166px')
        }
    })
    
    /*로그인 close 버튼 */
    $('.login a').click(function(){
         $('.login_form').show() 
         $('body').css({
             overflow:'hidden',
             height:'100%',
         })
    })
    $('.login_close').click(function(){
        $('.login_form').hide()
          $('body').css({
             overflow:'auto',
             height:'auto',
         })
    })
    
    
    /* stroy  progress bar*/
    $('.story_bar li').click(function(){
        var idx =$(this).index()
        var story_section = $('.story_container>div')
        
        $(this).addClass('active').prevAll().addClass('active')
        $(this).nextAll().removeClass('active')
        story_section.removeClass('open')
        story_section.eq(idx).addClass('open')
        
        if(idx == 0){
            $('.line-process').css('width','5%')
        }else if(idx == 1){
            $('.line-process').css('width','30%')
        }else if(idx == 2){
            $('.line-process').css('width','60%')
        }else if(idx == 3){
            $('.line-process').css('width','100%')
        }
    })
    
    
    
    
    
})