let siteBtn = $(".site-menu > li > a");
let section = $("#section");
let focus = $(".focus");
let sImg = document.querySelectorAll(".s-img");





let bNav = $(".brackets-nav > ul > li ");       //brackets
let bCont = $(".brackets-cont");
let bCircle = $(".focus-circle");
let preCode = $(".pre-wrap");
let listWrap = $(".listWrap");
let list = $(".list")
            
        

        siteBtn.click(function(e){
            $(siteBtn).removeClass("active");
            $(this).addClass("active");
            e.preventDefault();
        });
        //메뉴

        $(".s-img1").click(function(e){
            e.preventDefault();
            focus.addClass("show");
        });
        $(".close").click(function(){
            focus.removeClass("show")
        });
        

        bNav.click(function(e,i){
            let index = $(this).index();
            e.preventDefault();
            bNav.removeClass("active");
            $(this).addClass("active");
            bCont.removeClass("show");
            bCont.eq(index).addClass("show");
            bCont.bind(listClick);
        });
        //브라켓 창

        let listClick = list.click(function(){
            let index = $(this).index();
            let preIndex = preCode.index();
            preCode.removeClass("show");
            preCode.eq(index).addClass("show");
        });


