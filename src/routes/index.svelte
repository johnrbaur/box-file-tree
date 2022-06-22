<script context="module" lang="ts">
	export async function load({ fetch }) {
		const response = await fetch('api/box/client');
		const client = await response.json();

		return {
			props: {
				client
			}
		};
	}
</script>

<script lang="ts">
	export let client: any;
</script>

User: <pre>{JSON.stringify(client, null, 2)}</pre>
