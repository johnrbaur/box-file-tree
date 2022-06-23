<script context="module" lang="ts">
	export async function load({ fetch }) {
		const response = await fetch('api/box/user');
		const user = await response.json();

		return {
			props: {
				user
			}
		};
	}
</script>

<script lang="ts">
	export let user: any;
</script>

User: <pre>{JSON.stringify(user, null, 2)}</pre>
