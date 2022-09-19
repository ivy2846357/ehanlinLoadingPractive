
// 測試用進度條

const progressBar = document.querySelector('.progress-bar')
let currentValue = 0

function updateProgressBar(){
    setInterval(function(){

        if(currentValue >= 100){
            currentValue = 0
        }else{
            currentValue += 1
        }
        progressBar.style.width = currentValue + '%'
        // console.log(currentValue)
    }, 15)
}

updateProgressBar()

// 切換介面樣式

const campusTemplate = document.querySelector('#campus')
const classroomTemplate = document.querySelector('#classroom')
const popupTemplate = document.querySelector('#popup')
const videoTemplate = document.querySelector('#video')

const loadingTemplateSelect = document.querySelector('#loadingTemplateSelect')

loadingTemplateSelect.addEventListener('change',function(){
    // select.selectedIndex 是用來取 select option 的索引值
    // 透過索引值找到相對應的 option value 值
    const selectOptionValue = loadingTemplateSelect.options[loadingTemplateSelect.selectedIndex].value
    
    switch (selectOptionValue) {
        case 'campus':
            // console.log('campus')

            campusTemplate.style.zIndex = 500
            classroomTemplate.style.zIndex = 300
            popupTemplate.style.zIndex = 300
            videoTemplate.style.zIndex = 300
            break;
        case "classroom":
            // console.log('classroom')

            campusTemplate.style.zIndex = 300
            classroomTemplate.style.zIndex = 500
            popupTemplate.style.zIndex = 300
            videoTemplate.style.zIndex = 300
            break;
        case "popup":
            // console.log('popup')

            campusTemplate.style.zIndex = 300
            classroomTemplate.style.zIndex = 300
            popupTemplate.style.zIndex = 500
            videoTemplate.style.zIndex = 300
            break;
        case "video":
            // console.log('video')

            campusTemplate.style.zIndex = 300
            classroomTemplate.style.zIndex = 300
            popupTemplate.style.zIndex = 300
            videoTemplate.style.zIndex = 500
            break;
        default:
            return;
    }
})