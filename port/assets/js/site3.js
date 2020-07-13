$(".site-menu > li > a").click(function(){
    $(".site-menu > li > a").removeClass("active");
    $(this).addClass("active");
});
//메인 탭메뉴



$("#section-wrap > #section").click(function(){
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
    $(".theme-set").toggleClass("show");
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


//레이어 팝업 탭메뉴
