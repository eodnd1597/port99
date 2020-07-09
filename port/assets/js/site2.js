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


let index1;
$(".list").click(function(){
    let target = $(this);
    index1 = target.index();
    $(".code-tit").removeClass("active");
    $(".code-tit").eq(index1).addClass("active");
    //제목 변경
    $(".btn-wrap").removeClass("show");
    $(".btn-wrap").eq(index1).addClass("show");
    //전체 틀 변경
    $(".list").removeClass("active");
    $(".list").eq(index1 -1).addClass("active");
    console.log(index1)
});

$(".last-btn").click(function(){
    let target = $(this)
    let index = target.index();
    
    //console.log($(".a").eq(index1 -1).find(".btn-cont").eq(index));
    $(".a").find(".btn-cont").removeClass("show");
    $(".a").eq(index1 -1).find(".btn-cont").eq(index).addClass("show");
    
    
   
    //html,css,js 변경
    
});








//레이어 팝업 탭메뉴
