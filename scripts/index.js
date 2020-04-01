var modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close",
  cssClass: ['custom-class-1', 'custom-class-2'],
  onOpen: function() {
    console.log('modal open');
  },
  onClose: function() {
    console.log('modal closed');
  },
  beforeClose: function() {
    // here's goes some logic
    // e.g. save content before closing the modal
    return true; // close the modal
    return false; // nothing happens
  }
});

// set content
modal.setContent('<h4>Are you sure you want to Restart?</h4>');

// add a button
modal.addFooterBtn('<h5>RESTART</h5>', 'tingle-btn tingle-btn--primary tingle-btn--pull-right', function() {
  // here goes some logic
  modal.close();
});

// add another button
modal.addFooterBtn('<h5>CANCEL</h5>', 'tingle-btn tingle-btn--pull-right tingle-btn--danger', function() {
  // here goes some logic
  modal.close();
});

VanillaTilt.init(document.querySelectorAll(".floating-box"), {
  max: 20,
  speed: 800,
  reverse: true,
  scale: 1,
});

mediumZoom(document.querySelectorAll('.zoom', {
  scrollOffset: 0,
  margin: 100,
  container: '#zoom-container',
  template: '#zoom-template',
}))

document.getElementById("open-modal").onclick = function() {
  modal.open();
}

window.onload = function() {
  PR.prettyPrint();
  document.body.className += " loaded";
}
