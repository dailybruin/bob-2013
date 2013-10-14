$(document).ready(function(){
  // Take care of rollout caption boxes
  $('.caption-rollover').click(function(e){
    e.preventDefault();
    window.clearTimeout($(this).data('rolloverTimeout'));
    $(this).toggleClass('closed');
  });
  $('.caption-rollover').hover(function(e){
    window.clearTimeout($(this).data('rolloverTimeout'));
    $(this).removeClass('closed');
  }, function(e){
    var that = this;
    var rolloverTimeout = window.setTimeout(function(){
      $(that).addClass('closed');
    }, 500);
    $(this).data('rolloverTimeout', rolloverTimeout);
  });
});