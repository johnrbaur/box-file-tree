import { client } from '$lib/box';

export async function get(): Promise<{ body: any}> {
  return { body: await client.users.get(client.CURRENT_USER_ID) };
}
