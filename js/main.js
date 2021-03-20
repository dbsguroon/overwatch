$(function(){
    
    /* 슬라이드 */
    $('.slider li a').click(function(e){
        
        e.preventDefault()
        
        var target = $(this).parent()
        var idx = target.index()
        
        var header = $('header').offset().top
        var story =$('#story').offset().top
        var mode = $('#mode').offset().top
        var character = $('#character').offset().top
        var etc = $('#etc').offset().top
        
    
        if(idx == 0){
            $('html,body').stop().animate({'scrollTop':header})
        }else if(idx == 1){
            $('html,body').stop().animate({'scrollTop':story})
        }else if(idx == 2){
            $('html,body').stop().animate({'scrollTop':mode})
        }else if(idx == 3){
            $('html,body').stop().animate({'scrollTop':character})
        }else if(idx == 4){
            $('html,body').stop().animate({'scrollTop':etc})
        }         
    })
    
    $(window).scroll(function(){
        
        var win_s = $(this).scrollTop()
        
        if(win_s >= $('header').offset().top){
            $('.slider ul li').removeClass('active')
            $('.slider ul li').eq(0).addClass('active')
        }if(win_s >= $('#story').offset().top){
            $('.slider ul li').removeClass('active')
            $('.slider ul li').eq(1).addClass('active')
        }if(win_s >= $('#mode').offset().top){
            $('.slider ul li').removeClass('active')
            $('.slider ul li').eq(2).addClass('active')
        }if(win_s >= $('#character').offset().top){
            $('.slider ul li').removeClass('active')
            $('.slider ul li').eq(3).addClass('active')
        }if(win_s >= $('#etc').offset().top){
            $('.slider ul li').removeClass('active')
            $('.slider ul li').eq(4).addClass('active')
        }
    })
    

    /* 게임정보 서브 메뉴 클릭시 */
    $('nav .sub a').click(function(){
        
        var story = $('#story').offset().top
        var mode = $('#mode').offset().top
        var character = $('#character').offset().top
        var etc = $('#etc').offset().top
        
        var idx = $(this).parent().index()
        
        if(idx == 0){
            $('html,body').stop().animate({scrollTop:story})
            $('nav .sub').removeClass('open')
        }else if(idx == 1){
            $('html,body').stop().animate({scrollTop:character})
            $('nav .sub').removeClass('open')
        }else if(idx == 2){
            $('html,body').stop().animate({scrollTop:mode})
            $('nav .sub').removeClass('open')
        }
        
    })

    
    /* 뉴스 서브메뉴 클릭시 */
    $('nav .sub_two a').click(function(){
         var etc = $('#etc').offset().top
         
         $('html,body').stop().animate({scrollTop:etc})
         $('nav .sub_two').removeClass('open')
    })
    
    /* 커뮤니티 서브메뉴 클릭시 */
    $('nav .sub_three a').click(function(){
         var etc = $('#etc').offset().top
         
         $('html,body').stop().animate({scrollTop:etc})
         $('nav .sub_three').removeClass('open')
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
            
            if(w_scroll > 600){
            $('.hamburger').removeClass('open')
            $('nav>ul').removeClass('open') 
            }
        })
    })
    
    /* 서브메뉴 클릭시 */
    
    $('nav>ul>li>a').click(function(){
        
        /* 600이상 스크롤내리면 서브메뉴 자동으로 닫침 */
        $(window).scroll(function(){
            var win_s = $(this).scrollTop()
            
            if(win_s > 600){
                $('.sub').removeClass('open')
                $('.sub_two').removeClass('open')
                $('.sub_three').removeClass('open')
            }
            
        })
        
        
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
             height:'100%',
         })
        
    })
    
    /* 로그인창 */
    
    var login_bg = $('.top_btn .login_bg')
    var login_li = $('.top_btn>ul>li')
    
    $(login_li).click(function(){
        
        var idx = $(this).index()
        
        console.log(idx)
        
        if(idx == 0){
            $(login_bg).css({
                left:'0'
            })
            $('.login_group>form').eq(1).removeClass('active')
            $('.login_group>form').eq(0).addClass('active')
        }else{
            $(login_bg).css({
                left:'50%'
            })
            $('.login_group>form').eq(0).removeClass('active')
            $('.login_group>form').eq(1).addClass('active')
        }
        
    })
    
    
    /*로그인 close 버튼 */
    $('.login a').click(function(){
         $('.login_overlay').show() 
         $('body').css({
             overflow:'hidden',
             height:'100%',
         })
    })
    $('.login_form .close_btn').click(function(){
        $('.login_overlay').hide()
          $('body').css({
             overflow:'auto',
             height:'100%',
         })
    })
    
    
    /* stroy  progress bar*/
    $('.bar_list li').click(function(e){
        
        e.preventDefault()
        
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
    $('.character_menu .item').click(function(e){
        
        e.preventDefault()
        
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