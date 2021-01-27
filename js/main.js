$(function(){
    $('.slider li').click(function(){
         $(this).addClass('active').siblings().removeClass('active')
    })
    
    
    
    
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
    
    $('.buy_overwatch').click(function(){
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
    $('.bar_list li').click(function(){
        $(this).addClass('active').prevAll().addClass('active')
        $(this).nextAll().removeClass('active')
        var idx = $(this).index()
        var cont = $('.overwatch_story .story')
        
        if(idx == 0){
            $(cont).siblings().removeClass('active')
            $(cont).eq(idx).addClass('active')
            $('.progress_bar').css('width','12%')
        }else if(idx ==1){
            $(cont).siblings().removeClass('active')
            $(cont).eq(idx).addClass('active')
                      $('.progress_bar').css('width','36%')
        }else if(idx ==2){
            $(cont).siblings().removeClass('active')
            $(cont).eq(idx).addClass('active')
            $('.progress_bar').css('width','60%')
        }else if(idx ==3){
            $(cont).siblings().removeClass('active')
            $(cont).eq(idx).addClass('active')
            $('.progress_bar').css('width','100%')
        }
    })
    
    
    /* 캐릭터 메뉴 */
    $('.character_menu .item').click(function(){
        
        $(this).addClass('active').siblings().removeClass('active')
        
        var value = $(this).attr('data-filter')
        
        if(value == 'all'){
            $('.role').show(2000)
        }else{
            $('.role').not('.' + value).hide(1000)
            $('.role').filter('.' + value).show(1000)
        }
        
    })

    $('.role').mouseenter(function(){
        var name = $(this).find('span').text()
        var hero = $(this).find('p').text()
        var img_src = $(this).attr('data-src')
        
        $('.screen h2').text(name)
        $('.screen p').text(hero)
        $('.screen img').attr('src',img_src)
    })
    
    
    
    
    
})