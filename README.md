# doc-template
A template for creating custom documents in HTML and CSS. Made for developers who hate overengineered applications like MS Word or Google docs

I created this because I was tired by the hundreds of unnecessary options in MS Word and Google Docs. I hate browsing the menu just to find the simple function. For instance: how do I make a pretty customized divider in Word? In HTML, it's a simple: div, width, height and background. I know enaugh to create customized, outstanding and visually attractive documents and it's much faster than in all the programs I tested.

## Guide
I created a ready to use template. You can just download the files and start creating your documents between `<section class="page"></section>` tags. 
I have also included classes with frequently used styles, and custom HTML elements to simplify often used schemes. Below is a list of these classes and elements.

### Classes
- `.no-split` - prevents element from splitting between pages
- `.break-before` - enforces page break before an element
- `.break-after` - enforces page break after an element

### Custom Elements
#### - Divider
`<doc-divider>` 
Creates a divider. Default is black 1pt x 80mm, but you can customize by adding attributes:
- `size="small"` / `size="medium"` / `size="large"`, where medium is a default option so you don't need to type it. You can also use custom dimensions by attributes `length` and `thickness` instead of `size`. You can add other properties like margins and opacity with css.
- `color="<color>"`, default is black. You can type whatever color you want, rbg, hex... even gradient should work since it's `background` property.

#### - No Split
`<no-split>content</no-split>`
Works exactly like a `div` with class `.no-split`. You can wrap elements with it and the content inside will not split unless longer than one page.
#### - Align Container

`<align-cont></align-cont>`
A container that will align its content. Made mostly for images and tables to center them. You can use attribute `align` with values `"left"`, `"right"` or `"center"`, where `"center"` is a default option.

#### - Page Break
`<page-break></page-break>`
Enforces page break. Works the same as `div` with class `.page-break-after`, but do not enter any content inside of the `<page-break>` tags.

### Elements Customization
You can edit all the default values and tag names in customElements.js. You can do that by changing the properties in configuration panel, marked with `// CONFIGURATION PANEL` comment. Everything is described by comments.