$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/BackgroundColor.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios TODO List Page Background Color Validation",
  "description": "",
  "id": "techfios-todo-list-page-background-color-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to set Sky Blue Background",
  "description": "",
  "id": "techfios-todo-list-page-background-color-validation;user-should-be-able-to-set-sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Set SkyBlue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the \"Set SkyBlue Background\" button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundColorStepDefinition.Set_SkyBlue_Background_button_exists()"
});
formatter.result({
  "duration": 3813575600,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundColorStepDefinition.I_click_on_the_Set_SkyBlue_button()"
});
formatter.result({
  "duration": 2161239900,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundColorStepDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 796840400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should be able to set Sky Blue Background",
  "description": "",
  "id": "techfios-todo-list-page-background-color-validation;user-should-be-able-to-set-sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "\"Set White Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on the \"Set White Background\" button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundColorStepDefinition.Set_SkyWhite_Background_button_exists()"
});
formatter.result({
  "duration": 2340158300,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundColorStepDefinition.I_click_on_the_Set_White_button()"
});
formatter.result({
  "duration": 2097961500,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundColorStepDefinition.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 764913900,
  "status": "passed"
});
});