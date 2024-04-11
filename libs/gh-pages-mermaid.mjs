import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.mjs'
import panAndZoom from './pan-and-zoom.mjs'

await mermaid.run({
    querySelector: 'pre code.language-mermaid',
})

const allSVGList = document.querySelectorAll('pre code.language-mermaid svg')
allSVGList.forEach((svg) => {
    svg.style.setProperty('min-height', '500px')
    // set overflow of `pre` to hidden for reduce shake
    svg.parentNode.parentNode.style.setProperty('overflow', 'hidden')
})
allSVGList.forEach(panAndZoom)
