"use strict";
function GSPB_render_Swiper(e, t=document) {
    let a = "auto" == e.dataset.slidesperview ? "auto" : parseFloat(e.dataset.slidesperview)
      , s = "auto" == e.dataset.slidesperviewmd ? "auto" : parseFloat(e.dataset.slidesperviewmd)
      , r = "auto" == e.dataset.slidesperviewsm ? "auto" : parseFloat(e.dataset.slidesperviewsm)
      , o = "auto" == e.dataset.slidesperviewxs ? "auto" : parseFloat(e.dataset.slidesperviewxs)
      , l = parseFloat(e.dataset.slidespergroup) || 1
      , i = parseFloat(e.dataset.slidespergroupmd)
      , d = parseFloat(e.dataset.slidespergroupsm)
      , n = parseFloat(e.dataset.slidespergroupxs)
      , c = parseInt(e.dataset.spacebetween)
      , p = parseInt(e.dataset.spacebetweenmd)
      , u = parseInt(e.dataset.spacebetweensm)
      , f = parseInt(e.dataset.spacebetweenxs)
      , w = parseInt(e.dataset.speed)
      , g = JSON.parse(e.dataset.loop)
      , v = JSON.parse(e.dataset.autoheight)
      , y = JSON.parse(e.dataset.grabcursor)
      , h = JSON.parse(e.dataset.freemode)
      , b = e.dataset.keyboard
      , m = e.dataset.onlyinviewport
      , $ = e.dataset.mousewheel
      , S = e.dataset.forcetoaxis
      , x = e.dataset.releaseonedges
      , _ = e.dataset.freemodesticky
      , k = JSON.parse(e.dataset.vertical)
      , E = JSON.parse(e.dataset.centered)
      , q = JSON.parse(e.dataset.autoplay)
      , L = e.dataset.autoplayrestore
      , T = e.dataset.disablepause
      , I = e.dataset.stoponlastslide
      , P = e.dataset.reversedirection
      , B = e.dataset.watchoverflow
      , O = e.dataset.loopadditionalslides || 0
      , G = e.dataset.clickablebullets
      , A = e.dataset.clicktoslide
      , C = e.dataset.disablefinger
      , Y = e.dataset.disablemove
      , N = e.dataset.parallax
      , V = parseInt(e.dataset.autodelay)
      , M = e.dataset.pagecurrentindex;
    1 == V && (V = 0);
    let X = e.dataset.effect
      , Z = parseInt(e.dataset.coverflowrotate)
      , R = parseInt(e.dataset.coverflowdepth)
      , z = parseFloat(e.dataset.coverflowscale)
      , D = parseInt(e.dataset.coverflowstretch)
      , H = JSON.parse(e.dataset.coverflowshadow)
      , F = e.dataset.customparams ? JSON.parse(e.dataset.customparams) : ""
      , j = ""
      , J = ""
      , K = e.closest(".gs-slider-root");
    K || (K = e.closest(".gspb_row")),
    K && (j = K.querySelector(".gs-slider-custom-btn-right"),
    J = K.querySelector(".gs-slider-custom-btn-left"));
    let Q = e.dataset.syncedcontainer
      , U = 992
      , W = 768
      , ee = 576;
    "undefined" != typeof gs_swiper ? (U = parseInt(gs_swiper.breakpoints.desktop) || 992,
    W = parseInt(gs_swiper.breakpoints.tablet) || 768,
    ee = parseInt(gs_swiper.breakpoints.mobile) || 576) : "undefined" != typeof gs_swiper_params && (U = parseInt(gs_swiper_params.breakpoints.desktop) || 992,
    W = parseInt(gs_swiper_params.breakpoints.tablet) || 768,
    ee = parseInt(gs_swiper_params.breakpoints.mobile) || 576);
    let et = {
        preloadImages: false,
        spaceBetween: c,
        slidesPerView: a,
        slidesPerGroup: l,
        speed: w,
        loop: g,
        autoHeight: v,
        direction: k ? "vertical" : "horizontal",
        grabCursor: y,
        freeMode: !!h && {
            sticky: _ || !1,
            enabled: !0
        },
        keyboard: !!b && {
            onlyInViewport: m || !1
        },
        mousewheel: !!$ && {
            forceToAxis: S || !1
        },
        threshold: x ? 0 : 5,
        centeredSlides: E,
        slideToClickedSlide: A,
        watchOverflow: !!B,
        loopAdditionalSlides: O || 0,
        autoplay: !!q && {
            delay: V,
            pauseOnMouseEnter: !T,
            disableOnInteraction: !L,
            stopOnLastSlide: !!I,
            reverseDirection: !!P
        },
        effect: "coverflow" == X || "creative" == X || "cards" == X ? X : null,
        coverflowEffect: "coverflow" == X ? {
            rotate: Z,
            slideShadows: H,
            depth: R,
            scale: z || 1,
            stretch: D || 0
        } : null,
        creativeEffect: "creative" == X ? {
            limitProgress: F.limitProgress || 1,
            prev: {
                translate: [F.prev.translateX, F.prev.translateY, F.prev.translateZ],
                rotate: [F.prev.rotateX, F.prev.rotateY, F.prev.rotateZ],
                opacity: F.prev.opacity,
                scale: F.prev.scale,
                shadow: F.prev.shadow,
                origin: F.prev.origin
            },
            next: {
                translate: [F.next.translateX, F.next.translateY, F.next.translateZ],
                rotate: [F.next.rotateX, F.next.rotateY, F.next.rotateZ],
                opacity: F.next.opacity,
                scale: F.next.scale,
                shadow: F.next.shadow,
                origin: F.next.origin
            },
            perspective: !0
        } : null,
        breakpoints: {},
        on: {
            slideChange: function(e) {
                x && $ && setTimeout(function() {
                    e.params.mousewheel.releaseOnEdges = !1,
                    e.params.touchReleaseOnEdges = !1
                }, 500);
                let a = e.el
                  , s = a.closest(".gs-slider-root");
                if (s || (s = a.closest(".gspb_row")),
                s) {
                    let r = s.querySelectorAll(".gs-slider-control-btn");
                    Array.prototype.forEach.call(r, function(e) {
                        e.classList.remove("active")
                    });
                    let o = e.activeIndex + 1
                      , l = s.querySelectorAll(".gs-slideto-" + o);
                    Array.prototype.forEach.call(l, function(e) {
                        e.classList.add("active")
                    })
                }
                if (M) {
                    let i = t.querySelector(M);
                    null != i && (i.innerHTML = e.realIndex + 1)
                }
                if (Q && "." != Q && "#" != Q) {
                    let d = t.querySelectorAll(Q);
                    d.length > 0 && Array.prototype.forEach.call(d, function(t) {
                        let a = t.children;
                        if (a.length > 0) {
                            Array.prototype.forEach.call(a, function(e) {
                                e.classList.remove("active")
                            });
                            let s = (a = Array.from(a).filter(e => "STYLE" !== e.tagName))[e.realIndex];
                            s && (s.classList.add("active"),
                            s.classList.contains("gs-accordion-item") && !s.classList.contains("gsopen") && "function" == typeof GSPB_Accordion_Toggle) && GSPB_Accordion_Toggle(s.querySelector(".gs-accordion-item__title"))
                        }
                    })
                }
            },
            reachEnd: function(e) {
                x && $ && setTimeout(function() {
                    e.params.mousewheel.releaseOnEdges = !0,
                    e.params.touchReleaseOnEdges = !0
                }, 1e3)
            }
        },
        pagination: {
            el: e.querySelector(".swiper-pagination"),
            type: "bullets",
            clickable: G
        },
        a11y: {
            slideRole: "link"
        },
        navigation: {
            nextEl: j || e.querySelector(":scope > .swiper-button-next"),
            prevEl: J || e.querySelector(":scope > .swiper-button-prev")
        },
        scrollbar: {
            el: e.querySelector(".swiper-scrollbar"),
            draggable: !0
        }
    };
    C && (et.followFinger = !1),
    Y && (et.allowTouchMove = !1),
    N && (et.parallax = !0);
    e.querySelector(".swiper-slide[data-hash]") && (et.hashNavigation = {
        watchState: !0
    }),
    et.breakpoints[236] = {
        slidesPerView: o || a,
        spaceBetween: f || c,
        slidesPerGroup: n || l
    },
    et.breakpoints[ee] = {
        slidesPerView: r || a,
        spaceBetween: u || c,
        slidesPerGroup: d || l
    },
    et.breakpoints[W] = {
        slidesPerView: s || a,
        spaceBetween: p || c,
        slidesPerGroup: i || l
    },
    et.breakpoints[U] = {
        spaceBetween: c,
        slidesPerView: a,
        slidesPerGroup: l
    },
    new Swiper(e.querySelector(".swiper:not(.swiper-initialized)"),et)
}
function GSPB_Swiper_Init(e=document) {
    var t = e.getElementsByClassName("gs-swiper-init");
    for (let a = 0; a < t.length; a++)
        GSPB_render_Swiper(t[a], e);
    for (let s = 0; s < t.length; s++) {
        let r = t[s]
          , o = r.dataset.syncedslider
          , l = r.dataset.syncedsliderboth;
        if (o) {
            let i = r.querySelector(".swiper").swiper
              , d = e.querySelector(o);
            if (null !== d) {
                let n = JSON.parse(r.dataset.loop)
                  , c = JSON.parse(d.querySelector(".gs-swiper-init").dataset.loop)
                  , p = d.querySelector(".swiper");
                if (null !== p) {
                    let u = p.swiper;
                    void 0 !== u && (i.on("slideChange", function() {
                        !n && c ? u.slideToLoop(i.activeIndex, 500, !1) : n && !c ? u.slideTo(i.realIndex, 500, !1) : n && c ? u.slideToLoop(i.realIndex, 500, !1) : u.slideTo(i.activeIndex, 500, !1)
                    }),
                    l && u.on("slideChange", function() {
                        !n && c ? i.slideTo(u.realIndex, 500, !1) : n && !c ? i.slideToLoop(u.activeIndex, 500, !1) : n && c ? i.slideToLoop(u.realIndex, 500, !1) : i.slideTo(u.activeIndex, 500, !1)
                    }))
                }
            }
        }
        let f = r.dataset.syncedcontainer;
        if (f && "." != f && "#" != f) {
            let w = e.querySelectorAll(f);
            if (w.length > 0) {
                let g = r.querySelector(".swiper").swiper
                  , v = JSON.parse(r.dataset.loop);
                Array.prototype.forEach.call(w, function(e) {
                    let t = e.children;
                    t.length > 0 && (t = Array.from(t).filter(e => "STYLE" !== e.tagName),
                    Array.prototype.forEach.call(t, function(a) {
                        a.addEventListener("click", function(s) {
                            e.classList.contains("gs-accordion") && (s.preventDefault(),
                            s.stopPropagation());
                            let r = Array.prototype.indexOf.call(t, a);
                            v ? g.slideToLoop(parseInt(r)) : g.slideTo(parseInt(r))
                        })
                    }))
                })
            }
        }
    }
    let y = e.getElementsByClassName("gs-slider-control-btn");
    for (let h = 0; h < y.length; h++) {
        let b = y[h]
          , m = b.closest(".gs-slider-root");
        if (m || (m = b.closest(".gspb_row")),
        m) {
            let $ = m.querySelector(".swiper");
            if ($) {
                let S = $.swiper
                  , x = b.getAttribute("class").match(/gs-slideto-([0-9]+)/)[1];
                b.addEventListener("click", function(e) {
                    S.slideTo(parseInt(x) - 1)
                })
            }
        }
    }
}
GSPB_Swiper_Init();
