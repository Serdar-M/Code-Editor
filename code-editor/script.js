jQuery(document).ready(function($) {
  
  $('.toggle').on('click', function(event) {
    var $this = $(this)
        allCodeContainers = $('.code-container'),
        width = '';

    $this.toggleClass('active');

    $('#' + $this.data('container')).toggle();

    var showingDivs = allCodeContainers.filter(function(index) {
      return ($(this).css('display') !== 'none');
    }).length;

    width = 100/showingDivs;

    allCodeContainers.css('width', width + '%');
    
  });

  $('#runBtn').on('click', function(event) {
    var $iframe = $('#resultBox');
    $iframe.contents().find('html').html(
      '<style>' +
      $('#cssBox').val() +
      '</style>' +
      $('#htmlBox').val()
    );
    
    // document.getElementById('resultBox').contentWindow.eval($('#jsBox').val());
  });

});