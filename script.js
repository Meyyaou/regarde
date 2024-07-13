const pupilPixs= document.querySelectorAll(`
            .pixel:nth-child(110), .pixel:nth-child(112), .pixel:nth-child(113), 
            .pixel:nth-child(134), .pixel:nth-child(183), .pixel:nth-child(208), 
            .pixel:nth-child(234), .pixel:nth-child(260), .pixel:nth-child(261), 
            .pixel:nth-child(262), .pixel:nth-child(263),  
            .pixel:nth-child(239), .pixel:nth-child(215), .pixel:nth-child(190), 
            .pixel:nth-child(165), .pixel:nth-child(139), .pixel:nth-child(111), 
            .pixel:nth-child(161), .pixel:nth-child(186), .pixel:nth-child(211), 
            .pixel:nth-child(212), .pixel:nth-child(187), .pixel:nth-child(188), 
            .pixel:nth-child(137), .pixel:nth-child(162), .pixel:nth-child(163), 
            .pixel:nth-child(213), .pixel:nth-child(214), .pixel:nth-child(209), 
            .pixel:nth-child(210), .pixel:nth-child(184), .pixel:nth-child(185), 
            .pixel:nth-child(159), .pixel:nth-child(160), .pixel:nth-child(135), 
            .pixel:nth-child(136), .pixel:nth-child(189), .pixel:nth-child(164), 
            .pixel:nth-child(235), .pixel:nth-child(236), .pixel:nth-child(237), 
            .pixel:nth-child(138), .pixel:nth-child(238)
        `)
document.body.addEventListener('mousemove', (event)=>{
    const rect = document.body.getBoundingClientRect();

    const centerX= rect.left+rect.width/2
    const distX = event.clientX-centerX

    const centerY= rect.top+rect.height/2
    const distY=event.clientY-centerY

    pupilPixs.forEach(pixel =>{
        const moveX = distX*0.05
        const moveY = distY*0.05
        pixel.style.transform=`translate(${moveX}px, ${moveY}px)`
    })
});
document.body.addEventListener('mousrleave', ()=>{
    pupilPixs.forEach(pixel=>{
        pixel.style.transform='translate(0,0)';
    });
});
