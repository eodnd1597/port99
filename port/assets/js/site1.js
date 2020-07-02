$("#section-wrap > #section > figure").click(function(){
    let target = $(this);
    let index = target.index();
    //alert(index)
    $(".layer-site").eq(index).addClass("show");
});
$(".close").click(function(){
    $(".layer-site").removeClass("show");
});