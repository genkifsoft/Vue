<template>
	<div id="app">
		<div class="wrapper">
			<nav-element></nav-element>
			<slidebar-left-element></slidebar-left-element>
			<router-view></router-view>
			<footer-element></footer-element>
			<slidebar-right-element></slidebar-right-element>
		</div>
	</div>
</template>

<script>

// import HeaderElement from "./view/component/header";
import NavElement from "./view/components/nav";
import SlidebarLeftElement from "./view/components/slidebar-left";
import SlidebarRightElement from "./view/components/slidebar-right";
import FooterElement from "./view/components/footer";

export default {
	name: 'app',
	components: {
		"slidebar-left-element": SlidebarLeftElement,
		"slidebar-right-element": SlidebarRightElement,
		"nav-element": NavElement,
		"footer-element": FooterElement,
	},
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
}
</script>