import BoxSDK from 'box-node-sdk';
import { secrets } from '$lib/secrets';

const sdk = new BoxSDK({
  clientID: secrets.box.clientID,
  clientSecret: secrets.box.clientSecret
});

const client = sdk.getBasicClient(secrets.box.devToken);

export async function get(): Promise<{ body: any}> {
  return { body: await client.users.get(client.CURRENT_USER_ID) };
}
