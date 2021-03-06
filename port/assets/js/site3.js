$(".site-menu > li > a").click(function(){
    $(".site-menu > li > a").removeClass("active");
    $(this).addClass("active");
});
//메인 탭메뉴



$("#section-wrap > #section").click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    // alert(index)
    $(".site-wrap").find(".layer-site").removeClass("show")
    $(".site-wrap").find(".layer-site").eq(index).addClass("show");
    $("body").css("overflow-y", "hidden");
});

$(".close").click(function(){
    $(".layer-site").removeClass("show");
    $("body").css("overflow-y", "visible");
});
//레이어 팝업


$(".cont-title .menu ul li").click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    let num = target.parent().data("nav");
    //console.log(num);
    $(".layer-site"+num+" .cont-title").find("li").removeClass("active");
    $(".layer-site"+num+" .cont-title").find("li").eq(index).addClass("active");

    $(".layer-site"+num+" .code-cont > div").removeClass("active");
    $(".layer-site"+num+" .code-cont > div").eq(index).addClass("active");
});

//$(".theme").hover(function(){
//    $(".theme-set").addClass("show");
//}, function(){
//    $(".theme-set").removeClass("show");
//});

$(".theme > i").click(function(){
    $(".theme-set").slideToggle(200);
});

$(".theme-set:nth-child(1)").click(function(){
    $(".code-view").removeClass("over-night-owl");
    $(".code-view").removeClass("white");
    $(".code-view").addClass("night-owl");
});
$(".theme-set:nth-child(2)").click(function(){
    $(".code-view").removeClass("night-owl");
    $(".code-view").removeClass("white");
    $(".code-view").addClass("over-night-owl");
});

$(".theme-set:nth-child(3)").click(function(){
    $(".code-view").removeClass("night-owl");
    $(".code-view").removeClass("over-night-owl");
    $(".code-view").addClass("white");
});

$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if($(".section1").offset().top/2 <= scroll){
        gsap.to($(".section1"),{opacity:1, filter:"blur(0px)",y:"0%",duration:.5})
    }else{
        gsap.to($(".section1"),{opacity:0, filter:"blur(50px)",y:"20%",duration:.5})
    }
    if($(".section2").offset().top/1.7 <= scroll){
        gsap.to($(".section2"),{opacity:1, filter:"blur(0px)",y:"0%",duration:.5})
    }else{
        gsap.to($(".section2"),{opacity:0, filter:"blur(50px)",y:"20%",duration:.5})
    }
    if($(".section3").offset().top/1.5 <= scroll){
        gsap.to($(".section3"),{opacity:1, filter:"blur(0px)",y:"0%",duration:.5})
    }else{
        gsap.to($(".section3"),{opacity:0, filter:"blur(50px)",y:"20%",duration:.5})
    }
    if($(".section4").offset().top/1.4 <= scroll){
        gsap.to($(".section4"),{opacity:1, filter:"blur(0px)",y:"0%",duration:.5})
    }else{
        gsap.to($(".section4"),{opacity:0, filter:"blur(50px)",y:"20%",duration:.5})
    }
    if($(".section5").offset().top/1.3 <= scroll){
        gsap.to($(".section5"),{opacity:1, filter:"blur(0px)",y:"0%",duration:.5})
    }else{
        gsap.to($(".section5"),{opacity:0, filter:"blur(50px)",y:"20%",duration:.5})
    }
    if($(".section6").offset().top/1.2 <= scroll){
        gsap.to($(".section6"),{opacity:1, filter:"blur(0px)",y:"0%",duration:.5})
    }else{
        gsap.to($(".section6"),{opacity:0, filter:"blur(50px)",y:"20%",duration:.5})
    }
});




//로딩 애니메이션
setTimeout(function(){
    gsap.fromTo($(".loading-wrap"),{opacity:1},{opacity:0});
    gsap.fromTo($(".loading-wrap"),{"z-index":1000},{"z-index":-1});
    gsap.to($(".site-tit span"),{opacity:1,filter:"blur(0px)",duration:1.3, stagger:0.1 ,delay:.7})
    gsap.to("body",{overflow:"visible",delay:1})
},2000);

//레이어 팝업 탭메뉴
