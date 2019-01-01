const fs = require('fs');
exports.handler = async event => {
  // Log http request
  console.log(event);

  const responseBody = fs.readFileSync('./welcome.html', 'utf8');
  // Build an HTTP response.
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: responseBody
  };

 var params = {
  FunctionName: 'Process', /* required */
  ClientContext: 'STRING_VALUE',
  InvocationType: Event | RequestResponse | DryRun,
  LogType: None | Tail,
  Payload: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
  Qualifier: 'STRING_VALUE'
};
  lambda.invoke(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
};
