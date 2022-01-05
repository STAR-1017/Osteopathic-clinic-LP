var $html = $(".js-html"),
    $body = $(".js-body"),
    scrollFlug = !0,
    isMobile = function() { return window.matchMedia("(max-width: 959px)").matches },
    $elms = $(".js-inview");
$elms.addClass("is-out"), $(window).on("load.scrollInView scroll.scrollInView", function() { scrollFlug && (scrollFlug = !1, setTimeout(function() { for (var o = $(this).height() - 0, t = $(this).scrollTop(), e = 0, s = $elms.length; e < s; e++) t > $($elms[e]).offset().top - o && $($elms[e]).removeClass("is-out"); return t > 50 ? $html.addClass("is-scroll") : $html.removeClass("is-scroll"), scrollFlug = !0 }, 100)) }), $(window).on("load.pageLoading", function() { $html.addClass("is-complete") }), $('a[href^="#"]').on("click.smoothScroll", function() { var o = $(this.hash); if (void 0 === o[0]) return console.log("not valid"), !1; var t = $(o[0]).offset().top; return $html.add($body).animate({ scrollTop: t }, 600, "easeInOutCubic"), !1 });
var responsiveImage = function(o) {
    var t = ".",
        e = function() {
            var e = isMobile();
            o.each(function() {
                var o = $(this),
                    s = "";
                void 0 !== o.attr("src") && (s = e ? o.attr("src").replace(t, ".").replace(".", t) : o.attr("src").replace(t, "."), o.attr("src", s)), "VIDEO" === o[0].tagName ? (s = e ? o.attr("poster").replace(t, ".").replace(".", t) : o.attr("poster").replace(t, "."), o.attr("poster", s)) : "OBJECT" === o[0].tagName && (s = e ? o.attr("data").replace(t, ".").replace(".", t) : o.attr("data").replace(t, "."), o.attr("data", s))
            })
        };
    e();
    var s;
    $(window).on("resize.responsiveImage", function() { clearTimeout(s), s = setTimeout(function() { e() }, 200) })
};
responsiveImage($(".js-switch"));
var touchLink = { start: function() { thisAnchor = $(this), touchPos = thisAnchor.offset().top, moveCheck = function() { nowPos = thisAnchor.offset().top, touchPos == nowPos && thisAnchor.addClass("is-touch") }, setTimeout(moveCheck, 100) }, end: function() { thisAnchor = $(this), hoverRemove = function() { thisAnchor.removeClass("is-touch") }, setTimeout(hoverRemove, 500) } };
$(document).on("touchstart.touchLink mousedown.touchLink", "a", touchLink.start), $(document).on("touchend.touchLink mouseup.touchLink", "a", touchLink.end);