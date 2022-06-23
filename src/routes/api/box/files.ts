import { client } from '$lib/box';
import type { Folder } from '$lib/types';

export async function get(): Promise<{ body: any}> {
  const info: Folder = await client.folders.get('0');
  const body = await folderToFolderTree(info);
  return { body };
}

export interface FolderTree {
  name: string;
  folders: FolderTree[];
  files: string[];
}

async function folderToFolderTree(folder: Folder):Promise<FolderTree> {
  const result: FolderTree = {
    name: folder.name ?? '',
    folders: [],
    files: [],
  };

  for (const entry of folder.item_collection?.entries ?? []) {
    if (entry.type === 'folder') {
      const subFolder = await client.folders.get(entry.id);
      result.folders.push(await folderToFolderTree(subFolder));
    } else if (entry.type === 'file' && entry.name) {
      result.files.push(entry.name);
    }
  }

  console.log(result)
  return result;
}
