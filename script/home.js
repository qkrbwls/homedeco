(($, window, document, undefined)=>{

    class Home {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.section11();
            this.footer();
        }
        header(){
            let newTop = $(window).scrollTop();
            let oldTop = newTop;
            let x = '';


        $(window).scroll(function(){
            if($(window).scrollTop()==0){
                $('#header').removeClass('addH120');
                $('#header').removeClass('addShow');
                $('#header').removeClass('addHide');
            }
            else{
                $('#header').addClass('addH120');


                newTop = $(window).scrollTop();

                x = oldTop - newTop > 0 ? 'UP' : 'DOWN';
                
                if(x=='UP'){
                    $('#header').addClass('addShow');
                    $('#header').removeClass('addHide');
                    
                }
                if(x=='DOWN'){
                    $('#header').addClass('addHide');
                    $('#header').removeClass('addShow');

                }

                oldTop = newTop;
            }
        });

            const mainBtn = $('.main-btn');
            const sub = $('.sub');
            const nav = $('#nav'); 
            const subBtn = $('.sub-btn'); 
            const subSub = $('.sub-sub'); 
            
    
                mainBtn.on({
                    mouseenter(e){ 
                        // console.log(e);
                        const $this = $(this);
    
                        sub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                    },
                    focusin(e){ 
                        // console.log(e);
                        const $this = $(this);
    
                        sub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                    }
                });
    
                nav.on({
                    mouseleave(){
                        sub.stop().fadeOut(300);
                        subSub.stop().fadeOut(300);
                        
                    }
                });
    
                subBtn.on({
                    mouseenter(){
                        const $this = $(this);
    
                        subSub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                    },
                    focusin(){
                        const $this = $(this);
    
                        subSub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                    }
                });
       
        }
        section1(){
            let cnt = -1; 
            const slide = $('.slide');
            const pageBtn = $('.page-btn');
            let sec1Top = $('#section1').offset().top-$(window).height()-200;

            
            function mainSlide(){ 
          
                slide                   .css({zIndex:1}).stop().animate({opacity:0}, 0);
                slide.eq(cnt==2?0:cnt+1).css({zIndex:2}).stop().animate({opacity:1}, 0);
                slide.eq(      cnt     ).css({zIndex:3}).stop().animate({opacity:0}, 4000);
            }
            pageEvent();

            $(window).scroll(function(){

                if( $(window).scrollTop() == 0 ){
                  $('#section1').removeClass('addAni');
                }

                if( $(window).scrollTop() > sec1Top ){
                    $('#section1').addClass('addAni');
                }

            });
           
          

            function pageEvent(){
      
                pageBtn.removeClass('addPage');
                
                pageBtn.eq( cnt==2?0:cnt+1 ).addClass('addPage');
            }

            pageBtn.each(function(idx){ 
                const $this = $(this);
                
                $this.on({ 
                    click:function(){
                        cnt = idx;
                        mainSlide();
                    }
                });
            });

            function nextCount(){
                cnt++; 
                if(cnt>2){cnt=0}
                mainSlide();
              }
    
              function autoTimer(){
                  setInterval(nextCount, 5000);
                }
                autoTimer();
                



                
        }
        section2(){
           
            
  
    
        }
        section3(){
            var $sec4     = $('#section3');
            var $smallImg = $('.img2');
            var $largeImg = $('.img1');
            var x         = 0;    
            var y         = 0;

                //마우스 무브(mousemove) 이벤트
                //작은 이미지($smallImg)를 마우스의 움직임에 의해서
                //상하(마우스의 수직이동) : Y(대문자사용)좌표 
                //좌우(마우스의 수평이동) : X(대문자사용)좌표
                //이벤트를 확인(좌표 clientX, clientY, pageX or pageY, screenX or pageY )
                //좌표이동을 이용한 애니메이션 효과

                //1. 선택자( $smallImg ) 마우스 무브(mousemove) 이벤트
                //2. 타겟의 좌표를 가져와서 거기에서 움직임을 준다.
                $sec4.on({
                  mousemove:function(event){
                    x = event.clientX*.02;
                    y = event.clientY*.02;
                    // x = event.screenX*.03;
                    // y = event.screenY*.03;
                    // x = ($smallImg.offset().left-event.pageX)*.03; //현재위치 좌표
                    // y = ($smallImg.offset().top-event.pageY)*.03;  //현재위치 좌표


                    $smallImg.css({ bottom: y-5 , left: x });
                    $largeImg.css({ top: -y*3.2 , left: -x*3.2 });
                    //좌표값이 음수이면 마우스 움직의 반대로 이동한다.
                    //좌표값이 양수이면 마우스 움직의 같은방향으로 이동한다.
                  }
                });

                // console.log('푸터의 탑 위치 offset().top ', $('#footer').offset().top );
                // console.log('footer 높이 ', $('#footer').height() );
                // console.log('창 높이 ', $(window).height() );
                // console.log('웹문서 전체 높이 ', $(document).height() );
                // console.log('웹문서 전체 너비 ', $(document).width() );




        }
        section4(){
            $(window).scroll(function(){

                if( $(window).scrollTop() == 0 ){
                  $('#section4').removeClass('addAni');
                }

                if( $(window).scrollTop() > 500 ){
                    $('#section4').addClass('addAni');
                }

            });

        }
        section5(){
            $(window).scroll(function(){

                if( $(window).scrollTop() == 0 ){
                  $('#section5').removeClass('addAni');
                }

                if( $(window).scrollTop() > 500 ){
                    $('#section5').addClass('addAni');
                }

            });
        }
        section6(){

        }
        section7(){

        }
        section8(){

        }
        section9(){
           
        }
        section10(){
            $(window).scroll(function(){
                let sec9Top = $("#section9").offset().top-$(window).height()+200;

                if( $(window).scrollTop() == 0 ){
                  $('#section10').removeClass('addAni');
                }

                if( $(window).scrollTop() > sec9Top ){
                    $('#section10').addClass('addAni');
                }

            });
        }
        section11(){

        }
        footer(){

        }
    }



const newHome = new Home();
newHome.init();
})(jQuery, window, document, undefined);