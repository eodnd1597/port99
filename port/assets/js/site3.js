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
});

$(".close").click(function(){
    $(".layer-site").removeClass("show");
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

$(".theme").hover(function(){
    $(".theme-set").addClass("show");
}, function(){
    $(".theme-set").removeClass("show");
})

$(".theme-set").click(function(e){
    e.preventDefault();
    $(".code-view").appendTo();
});




//레이어 팝업 탭메뉴
