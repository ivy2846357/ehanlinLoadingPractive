
const classroomTalkBlockImg = document.querySelector('.classroom-talk-block')
const classroomBackgroundBottomImg = document.querySelector('.classroom-background-bottom')

function checkClassroomTemplateState(){
    if(window.innerWidth <= 768){
        classroomTalkBlockImg.src = './img/classroom-talk-block-sm.png'
        classroomBackgroundBottomImg.src = './img/classroom-bottom-mobile.png'
    }else{
        classroomTalkBlockImg.src = './img/classroom-talk-block-lg.png'
        classroomBackgroundBottomImg.src = './img/classroom-bottom-pc.png'
    }
}

window.addEventListener('resize', function(){
    checkClassroomTemplateState()
})

checkClassroomTemplateState()