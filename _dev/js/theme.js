document.addEventListener('DOMContentLoaded', function() {

  // Enable toggle menu mecanism
  [].forEach.call(document.getElementsByClassName('menu'), function(element) {
    element.addEventListener('click', function() {
      this.classList.toggle('open');
    });
  });

});
