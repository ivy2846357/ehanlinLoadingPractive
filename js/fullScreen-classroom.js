
const classroomTalkBlockImg = document.querySelector('.classroom-talk-block')

function checkImgState(){
    if(window.innerWidth <= 768){
        classroomTalkBlockImg.src = '../img/classroom-talk-block-sm.png'
    }else{
        classroomTalkBlockImg.src = '../img/classroom-talk-block-lg.png'
    }
}

window.addEventListener('resize', function(){
    if(window.innerWidth < 768){
        classroomTalkBlockImg.src = '../img/classroom-talk-block-sm.png'
    }else{
        classroomTalkBlockImg.src = '../img/classroom-talk-block-lg.png'
    }
})

checkImgState()