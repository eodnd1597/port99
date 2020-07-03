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
    $(".btn").removeClass("active");
    $(".btn").eq(index).addClass("active");
    $(".btn-cont").removeClass("show");
    $(".list").removeClass("active");
    $(".list").eq(index).addClass("active");
    $(".last-btn").removeClass("active")
});

$(".last-btn").click(function(){
    let target = $(this);
    let index = target.index();
    $(".btn-cont").removeClass("show");
    $(".btn-cont").eq(index).addClass("show");
    $(".last-btn").removeClass("active");
    $(".last-btn").eq(index).addClass("active");
});

//레이어 팝업 탭메뉴
