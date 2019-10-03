var tabs = [];
var trendTab =[];
var popTab = [];
var hdrTrendCont= [];
var hdrPopCont= [];

trendTab =  $("#trending-tab").children();
popTab = $("#popular-tab").children();
hdrTrendCont = $(".trend-cont").children();
hdrPopCont = $(".pop-cont").children();

/*ARTICLES PAGE HEADER*/
$(document).ready(function(){
    $(hdrTrendCont[0]).css("display", "block");
    $(hdrPopCont[0]).css("display", "block");
    /*For TABS */
    $(".trend-select").click(function (){
        if (!$(this).hasClass("active-tab")) {
            $(this).addClass("active-tab");
            $(".pop-cont").css("display", "none");
            $(".trend-cont").fadeIn(200);
            $(".pop-select").removeClass("active-tab");
            $("#popular-tab").css("display", "none");
            $("#trending-tab").show();
        }
    });
    $(".pop-select").click(function (){
        if (!$(this).hasClass("active-tab")) {
            $(this).addClass("active-tab");
            $(".trend-cont").css("display", "none");
            $(".pop-cont").fadeIn(200);
            $(".trend-select").removeClass("active-tab");
            $("#trending-tab").css("display", "none");
            $("#popular-tab").show();
        }
    });


    /*For LIST ITEMS*/
    for (var i = 0; i < trendTab.length; i++){
        trendTab[i].index = i;
        trendTab[i].addEventListener("click", function(e){
            for (var x = 0; x < trendTab.length; x++) {
                if($(trendTab[x]).hasClass("active")) {
                    $(trendTab[x]).removeClass("active");
                }
                if($(hdrTrendCont[x]).hasClass("active-cont")) {
                    $(hdrTrendCont[x]).removeClass("active-cont");
                    $(hdrTrendCont[x]).hide();
                }
            }
            if (!$(this).hasClass("active")){
                $(this).addClass("active");
            }
            console.log(e.target.closest("li"));
            if (!$(hdrTrendCont[e.target.closest("li").index]).hasClass("active-cont")){
                $(hdrTrendCont[e.target.closest("li").index]).addClass("active-cont");
                $(hdrTrendCont[e.target.closest("li").index]).fadeIn(400);
            }
        });
    }

    for (var i = 0; i < popTab.length; i++){
        popTab[i].index = i;
        popTab[i].addEventListener("click", function(e){
            for (var x = 0; x < popTab.length; x++) {
                if($(popTab[x]).hasClass("active")) {
                    $(popTab[x]).removeClass("active");
                }
                if($(hdrPopCont[x]).hasClass("active-cont")) {
                    $(hdrPopCont[x]).removeClass("active-cont");
                    $(hdrPopCont[x]).hide();
                }
            }
            if (!$(this).hasClass("active")){
                $(this).addClass("active");
            }
            console.log(e.target.closest("li"));
            if (!$(hdrPopCont[e.target.closest("li").index]).hasClass("active-cont")){
                $(hdrPopCont[e.target.closest("li").index]).addClass("active-cont");
                $(hdrPopCont[e.target.closest("li").index]).fadeIn(400);
            }
        });
    }
});

/*TRIP GUIDES SLIDER*/
$('.trip-guides .center').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '240px',
    speed: 500,
    slidesToShow: 3,
    variableWidth: true,
  });

$('.rec-tours .multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: false,
  });