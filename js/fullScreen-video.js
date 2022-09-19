
const videoBackgroundTopImg = document.querySelector('.video-background-top')

function checkImgState(){
    if(window.innerWidth > 1200){
        videoBackgroundTopImg.src = '../img/video-bg-top-pc.png'
    }else if(window.innerWidth < 992){
        videoBackgroundTopImg.src = '../img/video-bg-top-pad.png'
    }else if(window.innerWidth < 576){
        videoBackgroundTopImg.src = '../img/video-bg-top-phone.png'
    }
}

window.addEventListener('resize', function(){
    if(window.innerWidth > 1200){
        videoBackgroundTopImg.src = '../img/video-bg-top-pc.png'
    }else if(window.innerWidth < 992){
        videoBackgroundTopImg.src = '../img/video-bg-top-pad.png'
    }else if(window.innerWidth < 576){
        videoBackgroundTopImg.src = '../img/video-bg-top-phone.png'
    }
})

checkImgState()