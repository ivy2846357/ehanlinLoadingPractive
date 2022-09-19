
const campusLeftTree = document.querySelector('.campus-tree-left');
const campusRightTree = document.querySelector('.campus-tree-right');
// let leftTreePosition = -200;
// let rightTreePosition = -370;

window.addEventListener('resize', function(){
    leftTreePosition -= 10;
    rightTreePosition -= 10;
    campusLeftTree.style.left = leftTreePosition + 'px';
    campusRightTree.style.right = rightTreePosition + 'px';
})