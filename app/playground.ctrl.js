angular
.module('playground')
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
   "text": "What days of the week do you work? Please check all that apply.",
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

}]);