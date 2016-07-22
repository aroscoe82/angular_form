angular
  .module('playground.config', [])
  .constant('sampleConfig', {
      types : [
        {
          name : 'textAnswer',
          value : 'Textbox',
          image: 'images/textbox.png',
          description: 'Textbox'
        },
        {
          name : 'radio',
          value : 'Radio Buttons',
          image: 'images/radio_buttons.png',
          description: 'Radio Buttons'
        }
      ]
  });