const core = require('@actions/core');
const github = require('@actions/github');

try {
  const regex = core.getInput('regex');
  const data = core.getInput('data-to-validate');

  console.log('Validating the data:');
  console.log(data);

  console.log('Using the REGEX:');
  console.log(regex);
  
  if (new RegExp("^([a-z0-9]{5,})$").test(data)) {
    core.setOutput("time", "uhu");  
  } else {
    core.setFailed("OOOPS! FAILED");
  }

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}