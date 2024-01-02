import { initBeforeAfterSlider } from "./_beforeAfterSlider"
import { detectAvifSupport } from "./_detectAvifSupport"
import { initFancyBox } from "./_fancyBox"
import { initNav } from "./_nav"
import { initPiktogtams } from "./_piktogtams"

document.addEventListener("DOMContentLoaded", () => {
  detectAvifSupport()
  initBeforeAfterSlider()
  initFancyBox()
  initNav()
  initPiktogtams()
})