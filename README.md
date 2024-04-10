# github-pages-mermaid-plugin

For support mermaid in gh-pages

## How to use?

Add follow tmplate in `_includes/head-custom.html`.

> It depends on your Jekyll theme.
>
> If you don't use Jekyll with GH Pages,
> You should find the best way with your Site generator.
> 

```html
<script type="module" src="https://github.com/xyy94813/github-pages-mermaid-plugin/tree/main/mermaid-plugin.mjs" defer></script>
```

## Note!!!

All code write with ESNext, 
the plugin not working in lower verion browser.

The cost of building, compiling and publishing is too high 
and will not be considered at this stage.