$(".site-menu > li > a").click(function(){
    $(".site-menu > li > a").removeClass("active");
    $(this).addClass("active");
});
//메인 탭메뉴

$("#section-wrap > #section").click(function(){
    let target = $(this);
    let index = target.index();
    // alert(index)
    $(".site-wrap > .layer-site ").removeClass("show")
    $(".site-wrap > .layer-site ").eq(index).addClass("show");
});

$(".close").click(function(){
    $(".layer-site").removeClass("show");
});
//레이어 팝업


$(".list").click(function(){
    let target = $(this);
    let index = target.index();
    $(".code-tit").removeClass("active");
    $(".code-tit").eq(index).addClass("active");
    //제목 변경
    $(".btn-wrap").removeClass("active");
    $(".btn-wrap").eq(index).addClass("active");
    console.log(index)
});










//레이어 팝업 탭메뉴
