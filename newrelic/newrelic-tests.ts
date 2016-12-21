import newrelic = require('newrelic');

function testUsingNewrelicAgent() {
    // var agent = newrelic({
    //     appName: ['test app name'],
    //     lisenceKey: ""
    // });
    var agent: Newrelic.Agent = newrelic();
}
