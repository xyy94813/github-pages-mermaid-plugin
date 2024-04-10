import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.mjs'
import panAndZoom from './pan-and-zoom.mjs'

await mermaid.run({
    querySelector: 'pre code.language-mermaid',
})

const allSVGList = document.querySelectorAll('pre code.language-mermaid svg')
allSVGList.forEach((svg) => {
    svg.setAttribute('height', '500px')
})
allSVGList.forEach(panAndZoom)
