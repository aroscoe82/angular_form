angular
.module('playground.config', [])
.filter('contains', function() {
  return function (array, needle) {
    return array.indexOf(needle) >= 0;
  };
})
.constant('sampleConfig', {
  questionTypes : {
    singleChoice: {
      sliderImage: '/images/radio_buttons.png',
      description: 'Single Choice',
      editOptions: ['options'],
      viewTemplate: '../app/partials/singleChoice.html',
      displayPreferenceOptions: [ 'radio', 'dropdown']
    },
    multipleChoiceListChooseOne: {
      sliderImage: '/images/radio_buttons_grid.png',
      description: 'Radio Button Grid',
      editOptions: ['options','rows'],
      viewTemplate: '../app/partials/multipleChoiceListChooseOne.html',
      displayPreferenceOptions: []
    },
    multipleChoice: {
      sliderImage: '/images/checkbox.png',
      description: 'Multiple Choice',
      editOptions: ['options'],
      viewTemplate: '../app/partials/multipleChoice.html',
      displayPreferenceOptions: ['checkbox']
    },
    textAnswer: {
      sliderImage: '/images/textbox.png',
      description: 'Text Answer',
      editOptions:[],
      viewTemplate: '../app/partials/textAnswer.html',
      displayPreferenceOptions: ['short', 'long']
    },
    number: {
      sliderImage: '/images/number.png',
      description: 'Number',
      editOptions:['scaleFormat'],
      viewTemplate: '../app/partials/number.html',
      displayPreferenceOptions: ['textbox', 'slider']
    },
    likertScale: {
      sliderImage: '/images/likerScale.png',
      description: 'Likert Scale (1-7)',
      editOptions:['scaleLabels'],
      viewTemplate: '../app/partials/likertScale.html',
      displayPreferenceOptions:[]
    },
    netPromoterScore: {
      sliderImage: '/images/nps.png',
      description: 'NPS (0-10)',
      editOptions:[],
      viewTemplate: '../app/partials/nps.html',
      displayPreferenceOptions:[]
    },
    ranking: {
      sliderImage: '/images/ranking.png',
      description: 'Ranking',
      editOptions:['rows'],
      viewTemplate: '../app/partials/ranking.html',
      displayPreferenceOptions: ['dragAndDrop', 'rankingGrid']
    }
  }
});