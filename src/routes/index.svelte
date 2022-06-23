<script context="module" lang="ts">
	export async function load({ fetch }) {
		const response = await fetch('api/box/files');
		const files = await response.json();

		return {
			props: {
				files
			}
		};
	}
</script>

<script lang="ts">
	import type { FolderTree } from './api/box/files';

	export let files: FolderTree;
</script>

<pre>{JSON.stringify(files, null, 2)}</pre>
