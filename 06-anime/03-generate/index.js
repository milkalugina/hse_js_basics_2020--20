
let divsNumber = 10
//
// let divsNumber = 10
// let count = 0
// while (count < divsNumber) {
//   let div = document.createElement('div')
//   document.body.append(div)
//   count += 1
// }


for (var i = 0; i < divsNumber; i+=1) {
  let div = document.createElement('div')


  // div = [() => makeRect(div), () =>  makeCircle(div)][anime.random(0,1)]()
  div.style.cssText = [makeRect(), makeCircle()][anime.random(0,1)]


  div.style.background = `rgb(${anime.random(0,255)}, ${anime.random(0,255)},${anime.random(0,255)})`
  // div.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0, 360)}deg)`

  // div.style.background = `rgb(${anime.random(0,255)}, ${anime.random(0,255)},${anime.random(0,255)})`
  // div.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh)`
  // div.style.cssText = `

  // background: rgb(${anime.random(0,255)}, ${anime.random(0,255)},${anime.random(0,255)});
  // transform: translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0, 360)}deg);
  // `

  div.onmouseenter = function(event) {
    event.target.style.transform =  `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0, 360)}deg)`
    event.target.style.background = `rgb(${anime.random(0,255)}, ${anime.random(0,255)},${anime.random(0,255)})`
    event.target.style.width = `${anime.random(0, 500)}px`
    event.target.style.height = `${anime.random(0, 500)}px`
  }
  document.body.append(div)
}

function makeRect(element) {
  // element.style.width =`${anime.random(0, 500)}px`
  // element.style.height = `${anime.random(0, 500)}px`
  // return element
  return `
  width:${anime.random(0, 500)}px;
  height:${anime.random(0, 500)}px;
  `
}

function makeCircle(element) {
  let size = `${anime.random(0, 500)}px`
  // element.style.width = `${size}`
  // element.style.height = `${size}`
  // element.style.borderRadius = '100%'
  // return element
  return `
  width:${size};
  height:${size};
  border-radius: 100%;
  `
}

// let propsAnimation01 = anime({
//   targets: 'div',
//   translateX: {
//     value: 250,
//     duration: 800,
//     autoplay: false
//   },
//   rotate: {
//     value: 360,
//     duration: 1800,
//     easing: 'easeInOutSine'
//   },
//   scale: {
//     value: 2,
//     duration: 1600,
//     delay: 800,
//     easing: 'easeInOutQuart'
//   },
//   delay: 250 // All properties except 'scale' inherit 250ms delay
// })
