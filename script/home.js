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

                //????????? ??????(mousemove) ?????????
                //?????? ?????????($smallImg)??? ???????????? ???????????? ?????????
                //??????(???????????? ????????????) : Y(???????????????)?????? 
                //??????(???????????? ????????????) : X(???????????????)??????
                //???????????? ??????(?????? clientX, clientY, pageX or pageY, screenX or pageY )
                //??????????????? ????????? ??????????????? ??????

                //1. ?????????( $smallImg ) ????????? ??????(mousemove) ?????????
                //2. ????????? ????????? ???????????? ???????????? ???????????? ??????.
                $sec4.on({
                  mousemove:function(event){
                    x = event.clientX*.02;
                    y = event.clientY*.02;
                    // x = event.screenX*.03;
                    // y = event.screenY*.03;
                    // x = ($smallImg.offset().left-event.pageX)*.03; //???????????? ??????
                    // y = ($smallImg.offset().top-event.pageY)*.03;  //???????????? ??????


                    $smallImg.css({ bottom: y-5 , left: x });
                    $largeImg.css({ top: -y*3.2 , left: -x*3.2 });
                    //???????????? ???????????? ????????? ????????? ????????? ????????????.
                    //???????????? ???????????? ????????? ????????? ?????????????????? ????????????.
                  }
                });

                // console.log('????????? ??? ?????? offset().top ', $('#footer').offset().top );
                // console.log('footer ?????? ', $('#footer').height() );
                // console.log('??? ?????? ', $(window).height() );
                // console.log('????????? ?????? ?????? ', $(document).height() );
                // console.log('????????? ?????? ?????? ', $(document).width() );




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