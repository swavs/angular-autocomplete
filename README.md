# angular-autocomplete
Autocomplete directive in Angular.js

This plugin is similar to JQuery autocomplete plugin with similar attributes.

1.Easy to understand and use with simple set of attributes

2.With convenient CSS classes for the html elements in template to allow easy customisation of styles

You can also view the demo page here: [Autocomplete Demo](https://angular-autocomplete-demo.herokuapp.com/).

#Installation and Usage
Download the package and include the .js and .css file in your project.

Below is an example of adding autocomplete module to your app

angular.module('myApp', ['AutoCompleteModule'])

In html file the directive can be included like below:

&lt;div auto-complete id="example1" placeholder="Search Languages"
				selected-result="selectedLang" source="languages" &gt;&lt;/div&gt;
				
#Keyboard Interaction

The plugin supports following keys when suggestion list is available:

UP - Move focus to the previous item. If on first item, move focus to the input. If on the input, move focus to last item.

DOWN - Move focus to the next item. If on last item, move focus to the input. If on the input, move focus to the first item.

ESCAPE - Close the menu and rests input.

ENTER - Select the currently focused item and close the menu.

TAB - Select the currently focused item, close the menu, and move focus to the next focusable element.

Supported Attributes

| Attribute name  | Is required    | Description  | Example directive with the attribute |
| --------------- | -------------- |------------- |--------------------------------------|
| id    | True when there are more than one directives in same page   | id of the directive element | &lt;div auto-complete id="example1" placeholder="Search Languages" selected-result="selectedLang" source="languages" &gt;&lt;/div&gt;|
| selected-result   | True   | The object containing selected value from the suggestions. If nothing is selected from suggestion it will have the input value. Sample object when selected from autocomplete list { label:"English", value:"en"} and when nothing selected will be {label:"Eng", value:""} where "Eng" is the value entered in input field. In the example directive, scope.selectedLang will have similar object as its value | &lt;div auto-complete id="example1" placeholder="Search Languages" selected-result="selectedLang" source="languages" &gt;&lt;/div&gt;|
| initial-value    | False | Initial value for the input element, useful for Edit/Reset functionality when value has to be pre populated.  In the example directive, input element will have the value of scope.languageInitial. If the value of scope.languageInitial changes as part of some event handling in application the input will reflect the new value| &lt;div auto-complete id="example1" placeholder="Search Languages" selected-result="selectedLang" source="languages" initial-value="languageInitial" &gt;&lt;/div&gt;|
| placeholder    | False  | place holder text for the input element, a string value | &lt;div auto-complete id="example1" placeholder="Search Languages" selected-result="selectedLang" source="languages" &gt;&lt;/div&gt;|
| minlength    | False  | Minimum length user will have to type to perform search, default is "1". | &lt;div auto-complete id="example1" placeholder="Search Languages" selected-result="selectedLang" minlength="3" source="languages" &gt;&lt;/div&gt;|
| select-handler    | False  | A callback method invoked when user selects a search result from dropdown or when user opts not to select any suggestions. The parameter to the callback function is a boolean variable with the value as "true" when user selects from search result and "false" otherwise. For example scope.selectResultHandler = function(isResultSelected){} | &lt;div auto-complete id="example1" placeholder="Search Languages" selected-result="selectedLang" select-handler="selectResultHandler" source="languages" &gt;&lt;/div&gt;|
| source    | True  | Source indicates the source of data to perform search and it can have two types of values, 1. a local array of objects or Strings 2. a function. More on this attribute is expained below. | Local : &lt;div auto-complete id="example1" placeholder="Search Languages" selected-result="selectedLang" select-handler="selectResultHandler" source="languages" &gt;&lt;/div&gt; Remote :  &lt;div auto-complete id="example1" placeholder="Search Languages" selected-result="selectedLang" select-handler="selectResultHandler" source="formatRemoteCall" &gt;&lt;/div&gt;|
| results-formatter    | False  | A method to format the response from remote call to the necessary JSON format expected by the plugin. By default, if not provided, plugin will assume that the response is the expected JSON. For the expected format of JSON from remote call or from the  results-Formatter, please see the description about "source" attribute below. The method for "results-formatter" takes two arguments : 1. inputvalue - the value of input element typed by user, 2. response- the response from remote call. The method must return JSON data in expected format. |  &lt;div auto-complete id="example1" placeholder="Search Languages" selected-result="selectedLang" results-formatter="resultsResponseFormatter" source="languages" &gt;&lt;/div&gt; |
| override-search    | False  | A method to override the search logic used by the plugin when "source" attribute is having local data as value. The plugin uses the search logic to find the input string to be present in anywhere in data set. The custom search logic can have different logic. The method takes two arguments : 1. inputvalue - the value of input element typed by user, 2. Single object from list of local data. An example will be $scope.customSearch = function(str, singleData) {}; which should return a boolean indicating if the "singleData" object should be part of search result. |  &lt;div auto-complete id="example1" placeholder="Search Languages" selected-result="selectedLang" override-search="customSearch" source="languages" &gt;&lt;/div&gt; |

# Source attribute

The "source" attribute can have two types of values:

1.Array

An array can be used for local data. There are two supported formats:

An array of strings: [ "Choice1", "Choice2" ]

An array of objects with label and value properties: [ { label: "Choice1", value: "value1" }, ... ]

The "label" property is displayed in the suggestion menu and is mandatory in object. If there is no value this will be used as both label and value. 

2.Function

The function will take a single parameter as the value of input typed by user and will return the config object which can be used by $http service. More on config object can be found here [Angular $http config](https://docs.angularjs.org/api/ng/service/$http#usage). 

The plugin will directly use the config and hence remember to use "encodeURIComponent" on the input string if "GET" request is being used. Once the remote call gets its response, function corresponsing to the attribute  "results-formatter" will be called if provided. The response will be used as it is otherwise. The format of response should be same as local Array, specified above.
