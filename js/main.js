var trendTab =[];
trendTab =  $("#trending-tab").children();
var headerConts= [];
headerConts = $(".arts-page .left-cont").children();

$("#fst-sel").click(function(){
    for (var i = 0; i < trendTab.length; i++) {
        if($(trendTab[i]).hasClass("active")) {
            $(trendTab[i]).removeClass("active");
        }
        if($(headerConts[i]).hasClass("active-cont")) {
            $(headerConts[i]).removeClass("active-cont");
        }
    }if (!$(this).hasClass("active")){
        $(this).addClass("active");
    }
    if (!$(headerConts[0]).hasClass("active-cont")){
        $(headerConts[0]).addClass("active-cont");
    }
});

$("#sec-sel").click(function(){
    for (var i = 0; i < trendTab.length; i++) {
        if($(trendTab[i]).hasClass("active")) {
            $(trendTab[i]).removeClass("active");
        }
        if($(headerConts[i]).hasClass("active-cont")) {
            $(headerConts[i]).removeClass("active-cont");
        }
    }if (!$(this).hasClass("active")){
        $(this).addClass("active");
    }
    if (!$(headerConts[1]).hasClass("active-cont")){
        $(headerConts[1]).addClass("active-cont");
    }
    
});

$("#thr-sel").click(function(){
    for (var i = 0; i < trendTab.length; i++) {
        if($(trendTab[i]).hasClass("active")) {
            $(trendTab[i]).removeClass("active");
        }
        if($(headerConts[i]).hasClass("active-cont")) {
            $(headerConts[i]).removeClass("active-cont");
        }
    }if (!$(this).hasClass("active")){
        $(this).addClass("active");
    }
    if (!$(headerConts[2]).hasClass("active-cont")){
        $(headerConts[2]).addClass("active-cont");
    }
});