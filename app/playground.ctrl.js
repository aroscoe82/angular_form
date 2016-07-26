var __indexOf = [].indexOf || function(item) {
  for (var i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) return i;
  }
  return -1;
};

angular
.module('playground')
.controller('editCtrl', ['$scope', 'sampleConfig', function($scope, sampleConfig){
  $scope.questionConfigTypes = sampleConfig.questionTypes; 
  $scope.tempQuestion = {
      type: "",
      requiredFlag: "false",
      text: ""
    };

  $scope.updateEditView = function(view){
    $scope.tempQuestionConfig = sampleConfig.questionTypes[view];
  };

  $scope.addOption = function(tempQuestion){
    if(!tempQuestion.options)
        tempQuestion.options = new Array();

      var lastOptionID = 0;

      if(tempQuestion.options[tempQuestion.options.length-1])
        lastOptionID = tempQuestion.options[tempQuestion.options.length-1].option_id;

        // new option's id
        var option_id = lastOptionID + 1;

        var newOption = {
          "option_id" : option_id,
          "option_title" : "Option " + option_id,
          "option_value" : option_id
        };

        // put new option into field_options array
        tempQuestion.options.push(newOption);
  };

  $scope.deleteOption = function(tempQuestion, option){
    for(var i = 0; i < tempQuestion.options.length; i++){
      if(tempQuestion.options[i].option_id == option.option_id){
        tempQuestion.options.splice(i, 1);
        // need to call service to remove
        break;
      }
    }
  };

  $scope.addRow = function(tempQuestion){
    if(!tempQuestion.rows)
      tempQuestion.rows = new Array();

    var lastRowID = 0;

    if(tempQuestion.rows[tempQuestion.rows.length-1])
      lastRowID = tempQuestion.rows[tempQuestion.rows.length-1].row_id;

    // new option's id
    var row_id = lastRowID + 1;

    var newRow = {
      "row_id" : row_id,
      "row_title" : "Row " + row_id,
      "row_value" : row_id
    };

    // put new option into field_options array
    tempQuestion.rows.push(newRow);
  };

  $scope.deleteRow = function(tempQuestion, row){
    for(var i = 0; i < tempQuestion.rows.length; i++){
      if(tempQuestion.rows[i].row_id == row.row_id){
        tempQuestion.rows.splice(i, 1);
        // need to call service to remove
        break;
      }
    }
  };
}])
.controller('mainCtrl', ['$scope', 'sampleConfig', function($scope, sampleConfig){
  $scope.types = sampleConfig.types;

  $scope.ans = {};

  $scope.singleChoice = {
   "type": "singleChoice",
   "requiredFlag": true,
   "text": "Set your goal for this course",
   "options":[
   {
     "displayValue": "Application-I would like to have a deeper understanding and apply it to my work."
   },
   {
     "displayValue": "Knowledge-I want a deeper understanding of this topic."
   },
   {
     "displayValue": "Exposure-I want an introduction to this topic."
   },
   {
     "displayValue": "No Goal-Setting a goal will help to maximize your experience in this course."
   }  
   ]
 };

 $scope.singleChoice2 = {
   "type": "singleChoice",
   "requiredFlag": true,
   "text": "I use a formal method or framework when I negotiate",
   "options":[
   {
     "displayValue": "Yes (please name the approach you use)",
     "type": "writeIn"
   },
   {
     "displayValue": "Not Sure"
   },
   {
     "displayValue": "No"
   },
   {
     "displayValue": "N/A",
     "type": "NA"
   }        
   ]
 };

 $scope.multipleChoiceListChooseOne = {
   "type": "multipleChoiceListChooseOne",
   "requiredFlag": true,
   "text": "Please rate your level of agreement with the following statements:",
   "rows": ["The CorpU Platform was intuitive and easy to use", "The structure of the CorpU Platform enhanced my ability to learn"],
   "options":[
   {
     "displayValue": "Strongly Disagree"
   },
   {
     "displayValue": "Disagree"
   },
   {
     "displayValue": "Slightly Disagree"
   },
   {
     "displayValue": "Neither Disagree/Agree"
   },
   {
     "displayValue": "Slightly Agree"
   },
   {
     "displayValue": "Agree"
   },
   {
     "displayValue": "Strongly Agree"
   }
   ]
 };

 $scope.multipleChoice = {
   "_id": "abc123",
   "type": "multipleChoice",
   "requiredFlag": true,
   "text": "What days of the week do you work?",
   "options":[
   {
     "displayValue": "Sunday"
   },
   {
     "displayValue": "Monday"
   },
   {
     "displayValue": "Tuesday"
   },
   {
     "displayValue": "Wednesday"
   },
   {
     "displayValue": "Thursday"
   },
   {
     "displayValue": "Friday"
   },
   {
     "displayValue": "Saturday"
   }
   ]
 };

 $scope.textAnswer = {
   "type": "textAnswer",
   "requiredFlag": true,
   "text": "Please enter your email address so we may send you the results of this assessment."
 };

 $scope.number = {
   "type": "number",
   "requiredFlag": true,
   "text": "Here is another exercise to test your memory. In the text box below, write down the last three digits of your phone number.",
   "scaleFormat": {
     "startingValue": 0,
     "minimum": 0,
     "maximum": 999
   }
 };

 $scope.slider = {
   "_id": "abc12345",
   "type": "slider",
   "requiredFlag": true,
   "text": "I believe there is a clear need to adopt this new strategy.",
   "scaleFormat": {
     "leftLabel": "Strongly Disagree",
     "rightLabel": "Strongly Agree",
     "incrementBy": 5,
     "startingValue": 25,
     "minimum": 0,
     "maximum": 50
   }
 };
}])
.directive('questionDirective', function($http, $compile, sampleConfig) {
  // preview question
  // var getTemplateUrl = function(field) {
  //   var type = field.type;
  //   var templateUrl = '../app/partials/';
  //   var supported_questions = [
  //   'textAnswer',
  //   'singleChoice'
  //   ];

  //   if (__indexOf.call(supported_questions, type) >= 0) {
  //     return templateUrl += type + '.html';
  //   }
  // }

  var linker = function(scope, element, attrs) {
        // GET template content from path
      scope.$watch('question.type', function(){
        // var templateUrl = getTemplateUrl(scope.question);)
        var templateUrl = sampleConfig.questionTypes[scope.question.type].viewTemplate;
        $http.get(templateUrl).success(function(data) {
          element.html(data);
          $compile(element.contents())(scope);
        }).error(function(err){
          console.log('Template does not exist');
        });
      });
    }

      return {
        template: '<div ng-bind="question"></div>',
        restrict: 'A',
        scope: {
          question: '=',
        },
        // scope: false,
        link: linker
      };
    });