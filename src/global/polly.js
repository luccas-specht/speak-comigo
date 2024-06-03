// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/*
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-browser.html.

Purpose:
polly.ts demonstrates how to convert text to speech using Amazon Polly.

Inputs (replace in code):
- OUTPUT_FORMAT
- SAMPLE_RATE
- TEXT_TYPE
- POLLY_VOICE
- REGION
- IDENTITY_POOL_ID

Running the code:
Follow the steps in https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-browser.html.
*/
// snippet-start:[Polly.JavaScript.BrowserExample.completeV3]
// snippet-start:[Polly.JavaScript.BrowserExample.configV3]
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { Polly, DescribeVoicesCommand } from '@aws-sdk/client-polly';
import { getSynthesizeSpeechUrl } from '@aws-sdk/polly-request-presigner';

// Create the Polly service client, assigning your credentials
const client = new Polly({
  region: 'us-east-2',
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: 'us-east-2' }),
    identityPoolId: 'us-east-2:89799f06-a100-48f8-aa5d-8aa5558465f0', // IDENTITY_POOL_ID
  }),
});

// Set the parameters
const speechParams = {
  OutputFormat: 'mp3', // For example, 'mp3'
  SampleRate: '16000', // For example, '16000
  Text: 'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  // The 'speakText' function supplies this value
  TextType: 'text', // For example, "text"
  VoiceId: 'Matthew', // For example, "Matthew"
};
// snippet-end:[Polly.JavaScript.BrowserExample.configV3]
// snippet-start:[Polly.JavaScript.BrowserExample.synthesizeV3]
(async () => {
  // Update the Text parameter with the text entered by the user
  //speechParams.Text = document.getElementById('textEntry').value;
  try {
    const url = await getSynthesizeSpeechUrl({
      client,
      params: speechParams,
    });

    const command = new DescribeVoicesCommand({
      // DescribeVoicesInput
      LanguageCode: 'en-US',
      IncludeAdditionalLanguageCodes: true,
    });
    const response = await client.send(command);
    console.log({ response });
    console.log(url);
    // Load the URL of the voice recording into the browser
    document.getElementById('audioSource').src = url;
    document.getElementById('audioPlayback').load();
  } catch (err) {
    console.log('Error', err);
  }
})();

// snippet-end:[Polly.JavaScript.BrowserExample.synthesizeV3]
// snippet-end:[Polly.JavaScript.BrowserExample.completeV3]
