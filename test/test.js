const test = require('ava');
const cfntest = require('@cfn-modules/test');

test('defaults', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/defaults.yml`, stackName, {}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

test('invalid dashboard name', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/invalid-dashboard-name.yml`, stackName, {}));
    // what could we test here?
    t.fail();
  } catch (e) {
    t.pass();
  } finally {
    t.log(await cfntest.deleteStack(stackName));
  }
});
