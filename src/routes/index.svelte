<script lang="ts">
	const files: Promise<string> = fetch('api/box/files')
		.then((res) => res.json())
		.then((json) => JSON.stringify(json, null, 2));
</script>

{#await files}
	<p>Waiting...</p>
{:then fileTree}
	<pre>{fileTree}</pre>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
