let tl  = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0 95%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})

tl.to("#fanta",{
    top: "95%",
    left:"5%"
},"fst-scroll")
tl.to("#orange-cut",{
    top: "140%",
    left:"25%",
    rotate:720,
},"fst-scroll")
tl.to("#orange",{
    top: "165%",
    right:"5%",
    height:"30%",
    width:"17%"
},"fst-scroll")
tl.to("#leaf1",{
    top: "120%",
    left:"75%",
    rotate:360
},"fst-scroll")
tl.to("#leaf2",{
    top: "120%",
    right:"75%",
    rotate:360
},"fst-scroll")

let tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0 70%",
    end:"20% 20%",
    scrub: true,
    // markers:true
}})
tl2.from("#last-orange1",{
    top:"50%",
    left:"-200%",
    rotate:720
},"scnd-scroll")
tl2.from("#last-orange2",{
    top:"50%",
    right:"-200%",
    rotate:720
},"scnd-scroll")
tl2.from("#cocaBottle",{
    top:"50%",
    left:"-200%",
    rotate:90
},"scnd-scroll")
tl2.from("#spriteBottle",{
    top:"50%",
    right:"-200%",
    rotate:-90
},"scnd-scroll")
tl2.to("#fanta",{
    top:"208%",
    left:"32.5%",
    height:"73%"
},"scnd-scroll")
tl2.to("#orange-cut",{
    top:"194%",
    left:"34.3%",
    width:"30vw",
    rotate:360
},"scnd-scroll")
tl2.from(".box",{
    y:"580"
},"scnd-scroll")