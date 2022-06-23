import type * as schemas from 'box-node-sdk/lib/schemas';

export interface File extends schemas.FileMini {
	content_created_at?: string;
	content_modified_at?: string;
	created_at?: string;
	created_by?: UserMini;
	description?: string;
	item_status?: string;
	modified_at?: string;
	modified_by?: UserMini;
	owned_by?: UserMini;
	parent?: schemas.FolderMini;
	path_collection?: PathCollection;
  purged_at?: string;
  shared_link?: SharedLink;
  size?: number;
  trashed_at?: string;
}

export interface Folder extends schemas.FolderMini {
	content_created_at?: string;
	content_modified_at?: string;
	created_at?: string;
	created_by?: UserMini;
	description?: string;
	folder_upload_email?: {
		access?: string;
		email?: string;
	};
	item_collection?: Items;
	item_status?: string;
	modified_at?: string;
	modified_by?: UserMini;
	owned_by?: UserMini;
	parent?: schemas.FolderMini;
	path_collection?: PathCollection;
	purged_at?: string;
	shared_link?: SharedLink;
	size?: number;
	trashed_at?: string;
}

export interface Items {
	entries?: schemas.FolderMini[] | schemas.FileMini[] // TODO | WeblinkMini[]
	limit?: number;
	offset?: number;
	order?: {
		by?: string;
		direction?: string;
	}[];
	total_count?: number;
}

export interface PathCollection {
	entries?: schemas.FolderMini[];
	total_count?: number;
}

export interface Permissions {
  can_download?: boolean;
  can_edit?: boolean;
  can_preview?: boolean;
}

export interface SharedLink {
  access?: string;
  download_count?: number;
  download_url?: string;
  effective_access?: string;
  effective_permission?: string;
  is_password_enabled?: boolean;
  permissions?: Permissions;
  preview_count?: number;
  unshared_at?: string;
  url?: string;
  vanity_name?: string;
}

export interface UserBase {
	id?: string;
	type?: string;
}

export interface UserMini extends UserBase {
	login?: string;
	name?: string;
}
