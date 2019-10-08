var tabs = [];
var trendTab =[];
var popTab = [];
var hdrTrendCont= [];
var hdrPopCont= [];
var tabState = 0;

trendTab =  $("#trending-tab").children();
popTab = $("#popular-tab").children();
hdrTrendCont = $(".trend-cont").children();
hdrPopCont = $(".pop-cont").children();

//ARTICLES HEADER SLIDER
$(document).ready(function(){
    if ($(window).width() < 985) {
        /*ARTICLES HEADER SLIDER MOBILE*/
        $(".arts-page .contain .btn-prev").css("display", "block");
        $(".arts-page .contain .btn-next").css("display", "block");
        $(hdrTrendCont[0]).css("display", "block");
        $(hdrPopCont[0]).css("display", "block");
        //tabs
        $(".trend-select").click(function (){
            if (!$(this).hasClass("active-tab")) {
                $(this).addClass("active-tab");
                $(".pop-cont").css("display", "none");
                $(".trend-cont").fadeIn(200);
                $(".pop-select").removeClass("active-tab");
                $("#popular-tab").css("display", "none");
                $("#trending-tab").show();
                tabState = 0;
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
                tabState = 1;
            }
        });
        //buttons
        var tIndex = 0;
        var pIndex = 0;
        $(".arts-page .contain .btn-next").click (function() {
            if (tabState == 0) {
                if (tIndex < storslds.length-1) {
                    $(hdrTrendCont[tIndex]).hide();
                    $(hdrTrendCont[tIndex + 1]).fadeIn(400);
                    tIndex++;
                }
            } else if (tabState == 1) {
                if (pIndex < storslds.length-1) {
                    $(hdrPopCont[pIndex]).hide();
                    $(hdrPopCont[pIndex + 1]).fadeIn(400);
                    pIndex++;
                }
            }
        });
        $(".arts-page .contain .btn-prev").click (function() {
            if (tabState == 0) {
                if (tIndex > 0) {
                    $(hdrTrendCont[tIndex]).hide();
                    $(hdrTrendCont[tIndex - 1]).fadeIn(400);
                    tIndex--;
                }
            } else if (tabState == 1) {
                if (pIndex > 0) {
                    $(hdrPopCont[pIndex]).hide();
                    $(hdrPopCont[pIndex - 1]).fadeIn(400);
                    pIndex--;
                }
            }
        });
    } 
    else {
        /*ARTICLES HEADER SLIDER DESKTOP*/
        $(hdrTrendCont[0]).css("display", "block");
        $(hdrPopCont[0]).css("display", "block");
        //tabs
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
        //items
        for (var i = 0; i < trendTab.length; i++){
            trendTab[i].index = i;
            trendTab[i].addEventListener("click", function(e){
                if (!$(this).hasClass("active")) {
                    for (var x = 0; x < trendTab.length; x++) {
                        if($(trendTab[x]).hasClass("active")) {
                            $(trendTab[x]).removeClass("active");
                        }
                        if($(hdrTrendCont[x]).hasClass("active-cont")) {
                            $(hdrTrendCont[x]).removeClass("active-cont");
                            $(hdrTrendCont[x]).hide();
                        }
                    }
                    $(this).addClass("active");
                }
                if (!$(hdrTrendCont[e.target.closest("li").index]).hasClass("active-cont")){
                    $(hdrTrendCont[e.target.closest("li").index]).addClass("active-cont");
                    $(hdrTrendCont[e.target.closest("li").index]).fadeIn(400);
                    console.log("fading in");
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
                if (!$(hdrPopCont[e.target.closest("li").index]).hasClass("active-cont")){
                    $(hdrPopCont[e.target.closest("li").index]).addClass("active-cont");
                    $(hdrPopCont[e.target.closest("li").index]).fadeIn(400);
                }
            });
        }
    }
    
});

/*CENTERED SLIDER*/
var centeredSlideCont = [];
centeredSlideCont = $(".clip");

$('.center').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '240px',
    speed: 500,
    slidesToShow: 3,
    variableWidth: true,
    responsive : [
        {
            breakpoint: 1200,
            settings: {
                centerMode: false,
                variableWidth: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
          },
          {
            breakpoint: 800,
            settings: {
                centerMode: false,
                variableWidth: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
          }
    ]
  });
$('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $(centeredSlideCont[nextSlide]).addClass("active-slide");
  $(centeredSlideCont[currentSlide]).removeClass("active-slide");
});

/*3SLIDE SLIDER*/
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: false,
    responsive : [
        {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
    ]
  });

/*STORIES SLIDER */
var storslds = [];
storslds = $(".stories .slide-content");
$(storslds[0]).find("p").css("display", "block");

var index = 0;
$(".stories .btn-next").click (function() {
    if (index < storslds.length-1) {
        $(storslds[index]).removeClass("active-slide");
        $(storslds[index]).find("p").css("display", "none");
        $(storslds[index + 1]).addClass("active-slide",);
        $(storslds[index + 1]).find("p").fadeIn(400);
        index++;
    }
});
$(".stories .btn-prev").click (function() {
    if (index > 0) {
        $(storslds[index]).removeClass("active-slide");
        $(storslds[index]).find("p").css("display", "none");
        $(storslds[index - 1]).addClass("active-slide");
        $(storslds[index - 1]).find("p").fadeIn(400);
        index--;
    }
});

/*DROPDOWN*/
var dropState = false;
$(".burger-drop").click(function () {
    dropState = !dropState;
    //PUT DROP CONDITIONS HERE
});
