<script>
	import { NetflixVerticalIcon, ChevronDownIcon, MenuIcon } from '../svg-loader/index';
	import Menus from '../Components/Navbar/Menus.svelte';
	import Modal from '$lib/Components/Common/Modal.svelte';
	import Select from '../Components/Common/Select.svelte';
	import Search from '../Components/Navbar/Search.svelte';

	import { MenuMobile } from '../stores/MenuMobile';

	export let isSearchOpen = false;

	function handleSearch() {
		isSearchOpen = true;
	}

	let lang = [
		{ value: 'En', caption: 'En' },
		{ value: 'Id', caption: 'Id' }
	];
</script>

<style>

</style>

<header
	class="sticky top-0 z-50 backdrop-blur-[2px] bg-gradient-to-b from-[#0f161db7]
	transition-opacity-0 ">
	<nav
		class="text-white w-full py-4 px-7 container md:mx-auto flex {isSearchOpen ? 'flex-row' : 'justify-between'}">
		<!-- LOGO NETFLIX -->
		<a href="/">
			<div class="hidden md:block">
				<NetflixVerticalIcon height="21.52" width="80.54" color={'#FFF'} />
			</div>
			<div class="block md:hidden">
				<NetflixVerticalIcon height="21.52" width="81.54" color={'#FFF'} />
			</div>
		</a>

		{#if isSearchOpen === true}
			<!-- <Search on:blur={() => isSearchOpen = false}/> -->
			<Search bind:isSearchOpen />
		{:else}
			<!-- MIDDLE MENU DESKTOP -->
			<Menus on:click={() => handleSearch()} />

			<!-- LANG -->
			<div class="self-center hidden md:flex">
				<Select data={lang}>
					<div class="self-center px-2">
						<ChevronDownIcon size="20" />
					</div>
				</Select>
			</div>
		{/if}
		<div
			class="{$MenuMobile ? 'hidden' : 'block'} md:hidden self-center"
			on:click={() => ($MenuMobile = true)}>
			<MenuIcon width="16" height="14" color={'#FFF'} />
		</div>
		{#if $MenuMobile === true}
			<!-- <MenusMobile /> -->
			<Modal />
		{/if}
	</nav>
</header>
