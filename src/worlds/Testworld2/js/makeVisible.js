AFRAME.registerComponent('makeVisible', {
    init: function() {
      const Context_AF = this;
  
      Context_AF.el.addEventListener('click', function() {
        console.log('button clicked');
        const portalIndustrialRoom = document.querySelector('#Portal-IndustrialRoom');

        portalIndustrialRoom.setAttribute('visible', true);

      });
    },
  });
  