<script>
	import { sidebarOpen } from '$lib/stores';
	import SidebarItem from '$lib/sidebar/SidebarItem.svelte';
	import SidebarGroup from './SidebarGroup.svelte';
</script>

<div class="sidebar" class:close={!$sidebarOpen}>
	<SidebarGroup title="Dashboard">
		<SidebarItem href="/dashboard/home" icon="home">Home</SidebarItem>
		<SidebarItem href="/dashboard/alert" icon="alert">Alerts</SidebarItem>
		<SidebarItem href="/dashboard/feed" icon="feed">Feed</SidebarItem>
	</SidebarGroup>
	
	<SidebarGroup title="learn">
		<SidebarItem href="/dashboard/news" icon="news">News</SidebarItem>
		<SidebarItem href="/dashboard/blog" icon="support">Blog</SidebarItem>
	</SidebarGroup>
	
	
	<SidebarGroup title="Account">
		<SidebarItem href="/dashboard/settings" icon="profile">Settings</SidebarItem>
		<SidebarItem href="/dashboard/notifcations" icon="notifcations">Notifcations</SidebarItem>
		<SidebarItem href="/dashboard/support" icon="support">Support</SidebarItem>
	</SidebarGroup>
</div>

<style>
	.sidebar {
		padding: 2rem 1.2em;
		width: 100%;
		height: 100%;
		display: flex;
		gap: 6em;
		flex-direction: column;
		background-color: var(--c-black-s2);
		color: var(--c-gray-s1);
		border-right: 1px solid var(--tran-s1);
		font-size: 14px;
		
		transition: transform 0.25s linear, width 0.2s linear;
	}
	.close {
		width: 0;
		transform: translateX(-200px);
	}
</style>
