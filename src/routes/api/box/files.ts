import { client } from '$lib/box';
import type { Folder } from '$lib/types';

export async function get(): Promise<{ body: any }> {
	const info: Folder = await client.folders.get('0');
	const body = await folderToFolderTree(info);
	console.log({ body });
	return { body };
}

export interface FolderTree {
	name: string;
	folders?: FolderTree[];
	files?: string[];
}

async function folderToFolderTree(folder: Folder): Promise<FolderTree> {
	const result: FolderTree = {
		name: folder.name ?? ''
	};

	const entries = folder.item_collection?.entries;
	if (!entries) {
		return result;
	}

	await Promise.all(
		entries.map(async (entry) => {
			if (entry.type === 'folder') {
				if (!result.folders) {
					result.folders = [];
				}
				const subFolder = await client.folders
					.get(entry.id)
					.then((f: Folder) => folderToFolderTree(f));
				result.folders.push(subFolder);
			} else if (entry.type === 'file' && entry.name) {
				if (!result.files) {
					result.files = [];
				}
				result.files.push(entry.name);
			}
		})
	);

	return result;
}
