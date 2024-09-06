<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="wrapper">
	<div class="center">
		<div class="wavy-rainbow-text">
			<span style="--i:1">S</span>
			<span style="--i:2">p</span>
			<span style="--i:3">o</span>
			<span style="--i:4">t</span>
			<span style="--i:5">r</span>
			<span style="--i:6">a</span>
			<span style="--i:7">c</span>
			<span style="--i:8">k</span>
			<span style="--i:9">y</span>
		</div>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Count</th>
				</tr>
			</thead>
			<tbody>
				{#each data.users as user}
					<tr>
						<td>{user.name}</td>
						<td>{user.count}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	/* ----------- */
	/* Wavy Header */
	/* Yoinked doce*/
	/* ----------- */

	.wavy-rainbow-text {
		display: flex;
		justify-content: space-between;

		padding-top: 1em;

		font-size: 3.5em;
		font-weight: 700;
	}

	.wavy-rainbow-text span {
		display: inline-block;
		position: relative;

		color: white;

		animation: wavy-rainbow-text 3.69s infinite;
		animation-delay: calc(0.1s * var(--i));
	}

	@keyframes wavy-rainbow-text {
		0% {
			color: #ff0000;
		}
		20% {
			color: #ff7f00;
		}
		40% {
			color: #ffff00;
		}
		60% {
			color: #00ff00;
		}
		80% {
			color: #0000ff;
		}
		100% {
			color: #9400d3;
		}

		0%,
		40%,
		100% {
			transform: translateY(0);
		}

		20% {
			transform: translateY(-20px);
		}
	}
	.wrapper {
		display: flex;
		justify-content: center;
	}
	.center {
		flex-direction: column;
	}
	table {
		border-collapse: collapse;
		margin: 25px 0;
		font-size: 0.9em;
		font-family: sans-serif;
		min-width: 400px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
	}
	table thead tr {
		background-color: #009879;
		color: #ffffff;
		text-align: left;
	}
	table th,
	table td {
		padding: 12px 15px;
	}
	table tbody tr {
		border-bottom: 1px solid #dddddd;
	}

	table tbody tr:nth-of-type(even) {
		background-color: #f3f3f3;
	}

	table tbody tr:last-of-type {
		border-bottom: 2px solid #009879;
	}
	table tbody tr.active-row {
		font-weight: bold;
		color: #009879;
	}
</style>
