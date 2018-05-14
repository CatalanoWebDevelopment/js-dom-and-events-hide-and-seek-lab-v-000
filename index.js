function getFirstSelector(selection) {
    return document.querySelector(selection)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function deepestChild() {
    
}

function increaseRankBy(n) {
    let rankedList = document.querySelectorAll('ul.ranked-list li')
    
    for (let i = 0; i < rankedList.length; i++) {
        rankedList[i].innerHTML = (parseInt(rankedList[i].innerHTML) + n)
    }
}
