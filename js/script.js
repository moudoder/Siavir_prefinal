gsap.registerPlugin(ScrollTrigger);

gsap.matchMedia().add('(min-width: 769px)', () => {
    // "smooth-content" = "first-screen" + "page-wrapper" + "footer"
    var bodyHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    document.querySelector('#smooth-content').style.height = `${bodyHeight}px`;

    let dirSection = document.querySelector('.direction');
    dirSection.style.height = `${dirSection.offsetHeight}px`;
    let detSection = document.querySelector('.detailed');
    detSection.style.height = `${detSection.offsetHeight}px`;

    gsap.registerPlugin(ScrollSmoother);
    let scroller = ScrollSmoother.create({
        smooth: 1,
        smoothTouch: 1,
        ignoreMobileResize: true,
    });

    // изображения и текст (ПК)
    scroller.effects(".detailed-content", {speed: 1.2});
    scroller.effects(".detailed-img-1", {speed: 0.95});
    scroller.effects(".detailed-img-2", {speed: 1.05});
    scroller.effects(".detailed-img-3", {speed: 1.1});
    scroller.effects(".detailed-img-4", {speed: 0.85});
    scroller.effects(".detailed-img-5", {speed: 1.4});
    scroller.effects(".detailed-img-6", {speed: 1.05});
    scroller.effects(".detailed-img-7", {speed: 0.9});

    // изображения (ПК)
    let imgRightElems = gsap.utils.toArray('.gsap-img-right');
    let imgLeftElems = gsap.utils.toArray('.gsap-img-left');

    imgRightElems.forEach(imgRightElem => {
        gsap.fromTo(imgRightElem, {x: -50}, {
            x: 0,
            scrollTrigger: {
                trigger: imgRightElem,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
    imgLeftElems.forEach(imgLeftElem => {
        gsap.fromTo(imgLeftElem, {x: 50}, {
            x: 0,
            scrollTrigger: {
                trigger: imgLeftElem,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
});

// заголовки
let titles1 = gsap.utils.toArray('.gsap-title1');
let titles2 = gsap.utils.toArray('.gsap-title2');

titles1.forEach(title1 => {
    gsap.fromTo(title1, {yPercent: 150, opacity: 0}, {
        yPercent: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: title1,
            start: 'top bottom',
            end: 'top center',
            scrub: true
        }
    });
});

titles2.forEach(title2 => {
    gsap.fromTo(title2, {yPercent: 150, opacity: 0}, {
        yPercent: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: title2,
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    });
});

// текст
let textElems = gsap.utils.toArray('.gsap-text');
textElems.forEach(textElem => {
    gsap.fromTo(textElem, {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: textElem,
            start: 'top bottom',
            end: 'top top',
            scrub: true
        }
    });
});

gsap.matchMedia().add('(max-width: 768.9px)', () => {
    document.querySelector('#smooth-wrapper').style.position = 'relative';
    
    // изображения и текст (моб)
    textElems.forEach(textElem => {
        gsap.fromTo(textElem, {y: 100}, {
            y: 0,
            scrollTrigger: {
                trigger: textElem,
                start: 'top bottom',
                end: 'top center',
                scrub: true
            }
        });
    });
    gsap.fromTo('.detailed-img-4', {y: 100}, {
        y: 0,
        scrollTrigger: {
            trigger: '.inner-1',
            start: 'top bottom',
            end: 'bottom center',
            scrub: true
        }
    });
    gsap.fromTo('.detailed-img-6', {y: 100}, {
        y: 0,
        scrollTrigger: {
            trigger: '.inner-2',
            start: 'top bottom',
            end: 'bottom center',
            scrub: true
        }
    });
    let smallImages = ['.detailed-img-1', '.detailed-img-3', '.detailed-img-5', '.detailed-img-7'];
    smallImages.forEach(smallImage => {
        gsap.fromTo(smallImage, {y: 100}, {
            y: 0,
            scrollTrigger: {
                trigger: smallImage,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
});