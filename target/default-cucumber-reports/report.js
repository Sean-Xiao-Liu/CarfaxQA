$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/carfax/features/saveSearchBtn.feature");
formatter.feature({
  "name": "Create account through save this search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create account through Save This Search option",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I am on main Carfax page",
  "keyword": "Given "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_am_on_main_Carfax_page()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class com.carfax_ucl.step_definitions.SaveThisSearchStepDef\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:126)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:66)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:156)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.SessionNotCreatedException: Could not create a session: You must enable the \u0027Allow Remote Automation\u0027 option in Safari\u0027s Develop menu to control Safari via WebDriver.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027A-XF4WBHV29\u0027, ip: \u0027fe80:0:0:0:18da:9b79:489e:64e2%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.1\u0027\nDriver info: driver.version: Driver\nremote stacktrace: \n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:81)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:63)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:41)\n\tat com.carfax_ucl.utilities.Driver.get(Driver.java:42)\n\tat com.carfax_ucl.pages.MainSignUpPage.\u003cinit\u003e(MainSignUpPage.java:11)\n\tat com.carfax_ucl.pages.vdpSaveThisSearchPage.\u003cinit\u003e(vdpSaveThisSearchPage.java:8)\n\tat com.carfax_ucl.step_definitions.SaveThisSearchStepDef.\u003cinit\u003e(SaveThisSearchStepDef.java:23)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to Find a Used Car page",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_navigate_to_Find_a_Used_Car_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I fill out \"make\" , \"model\" , \"zip code\" of the car that I want to search",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_fill_out_of_the_car_that_I_want_to_search(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on next and show me results button",
  "keyword": "When "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_next_and_show_me_results_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on  Save This Search button",
  "keyword": "And "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_click_on_Save_This_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am able to fill out \"email\" , \"zip code\" and click on save This Search button",
  "keyword": "Then "
});
formatter.match({
  "location": "SaveThisSearchStepDef.i_am_able_to_fill_out_and_click_on_save_This_Search_button(String,String)"
});
formatter.result({
  "status": "skipped"
});
});