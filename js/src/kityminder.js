/* global NexT: true */

// setTimeout(function() {
//         var minder = new kityminder.Minder({
//             renderTo: '.mindmap'
//         });
//         var markdownText = $('.mindmap').text().trim();
//         $('.mindmap p').each(function(index, element) {
//             element.style.display = 'none';
//         });
//         minder.importData('markdown', markdownText);
//         minder.disable();
//         minder.execCommand('hand');
//     },
//     3000
// )
$(document).ready(function(){
          var minder = new kityminder.Minder({
              renderTo: '.kitycontainer'
          });
          var markdownText = $('.kitycontainer').text().trim();
          $('.kitycontainer p').each(function(index, element) {
              element.style.display = 'none';
          });
          minder.importData('markdown', markdownText);
          minder.disable();
          minder.execCommand('hand');

          var width = $('.kitycontainer').width();
          var p_length = $('.kitycontainer').children('p').length * 80;
          $('.kitycontainer').height(p_length > width ? width : p_length);
})
