function getFirstSelector(selection) {
    return document.querySelector(selection)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function deepestChild() {
    let id = document.getElementById('grand-node')
    let child = id.children[0]
    
    while(child) {
        id = child
        child = id.children[0]
    }
    
    return id
}

function increaseRankBy(n) {
    let rankedList = document.querySelectorAll('ul.ranked-list li')
    
    for (let i = 0; i < rankedList.length; i++) {
        rankedList[i].innerHTML = (parseInt(rankedList[i].innerHTML) + n)
    }
}
