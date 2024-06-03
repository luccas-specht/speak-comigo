import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { Polly } from '@aws-sdk/client-polly';
import { getSynthesizeSpeechUrl } from '@aws-sdk/polly-request-presigner';

export const client = new Polly({
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
  VoiceId: 'Matthew', // For example, "Matthew"
};

(async () => {
  try {
    const url = await getSynthesizeSpeechUrl({
      client,
      params: speechParams,
    });

    console.log(url);

    document.getElementById('audioSource').src = url;
    document.getElementById('audioPlayback').load();
  } catch (err) {
    console.log('Error', err);
  }
})();

export async function createPreviousURLAudio({ speechParams }) {
  try {
    const url = await getSynthesizeSpeechUrl({
      client,
      params: speechParams,
    });
    return url;
  } catch (err) {
    console.log('Error', err);
  }
}
