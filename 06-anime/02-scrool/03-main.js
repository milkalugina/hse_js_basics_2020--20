let controller = new ScrollMagic.Controller()

let sections = document.querySelectorAll('section')

let count = 0
while (count < sections.length) {
  new ScrollMagic.Scene({
    triggerHook: 'onLeave',
    triggerElement: sections[count]
  })
  .addTO(controller)
  .setPin(sections[count])
  count += 1
}
