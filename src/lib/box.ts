import BoxSDK from 'box-node-sdk';
import { secrets } from '$lib/secrets';

const sdk = new BoxSDK({
  clientID: secrets.box.clientID,
  clientSecret: secrets.box.clientSecret
});

export const client = sdk.getBasicClient(secrets.box.devToken);
