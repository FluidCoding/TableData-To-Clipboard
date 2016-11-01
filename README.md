## Just some sample dom copying to copyToClipboard

**Uses**

  - [JQuery](https://code.jquery.com/jquery-3.1.1.min.js)
  - [document.execCommand('copy')](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand)

### TLDR; the functionality is this event assignment
1. Pass in a NodeElement to have clickable content copy
2. Select the td's content
3. Execute the copy command of the selected content

```
var __deselect = false;
function copyToClipboard(cell){
  $(cell).on('click', function() {
    var select = window.getSelection();
    select.removeAllRanges();
    var range = document.createRange();
    range.selectNodeContents(cell);
    select.addRange(range);
    var cpyresult = document.execCommand('copy');
    if(__deselect) select.removeAllRanges();
  } );
}
```
