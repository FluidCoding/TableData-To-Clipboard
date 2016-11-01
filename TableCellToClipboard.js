// Select - Copy Cells
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

// Hook copyables
function hookCopyFor(selector){
  $(selector).each( ( i , cell) => copyToClipboard(cell) );
}
