// Select - Copy Cells
var __deselect = true;
function copyToClipboard(cell){
  $(cell).on('click', function() {
    var select = window.getSelection();
    select.removeAllRanges();
    var range = document.createRange();
    range.selectNodeContents(cell);
    select.addRange(range);
    var cpyresult = document.execCommand('copy');
    if(__deselect) select.removeAllRanges();
    if(document.getElementById('copyMsg')==null){
      var tooltip = document.createElement('div')
      tooltip.classList.add('copyMsg');
      tooltip.id = "copyMsg";
      tooltip.style = "position: absolute;top: 4px;text-align:center;width:100%;"
      var msg = document.createElement('p');
      msg.innerHTML='Copied!';
      msg.style="opacity:1;background-color:#e7fcb6;display:inline; padding: 1em;"
      tooltip.appendChild(msg);
      document.body.appendChild(tooltip);
      setTimeout( function(){ $('#copyMsg').fadeOut('slow') } , 2000);
    }else{
        $('#copyMsg').fadeIn('slow', function(){
          setTimeout(function() { $('#copyMsg').fadeOut('slow') }, 2000);
        });
    }
  } );
}

// Hook copyables
function hookCopyFor(selector){
  $(selector).each( ( i , cell) => copyToClipboard(cell) );
}
