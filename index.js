function getFirstSelector(selector){
  var finding= document.querySelector(selector)
  return finding
}

function nestedTarget(){
  return document.querySelector("div#nested div.target")
}

function increaseRankBy(n){
  var targets = document.querySelectorAll('ul.ranked-list li')
  for(var i = 0; i < targets.length; i++){
    targets[i].innerHTML =parseInt(targets[i].innerHTML) + n
  }
  
}

function deepestChild() {
  var spot = 1
  var current = document.querySelectorAll('div #grand-node')
  var next = current [0]
  while(next.innerHTML != "boo!"){
   next= next[0].querySelector('div')
    
  }
  
  return next
}