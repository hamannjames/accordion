# Accordion

This is V.01 of an accordion plugin. It is initiated by providing a query selector, which should be unique.
All direct children of the query element become accordion items. The first child of an accordion item becomes
a toggle, and the second child becomes the content that is hidden. This is an un-opinionated approach to what
is passed into the function, toggles and content can be any html element. All animations are done in CSS by adding
and removing classes.

## Planned changes:

* Adding an options object into arguments to override styles
* Adding option to have a default toggle open
* Adding an option to limit open toggles