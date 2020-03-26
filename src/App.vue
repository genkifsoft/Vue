<template>
	<div id="app">
		<div v-if="!$auth.check()">
			<header-element></header-element>
			<footer-element></footer-element>
		</div>
		
		<div class="wrapper" v-if="$auth.check()">
			<admin-nav-element></admin-nav-element>
			<admin-slidebar-left-element></admin-slidebar-left-element>

			<router-view></router-view>

			<admin-footer-element></admin-footer-element>
			<admin-slidebar-right-element></admin-slidebar-right-element>
		</div>
		
		<div v-if="page_login">
			<login-element></login-element>
		</div>
	</div>
</template>

<script>

// import HeaderElement from "./view/component/header";
import AdminNavElement from "./view/admin/components/nav";
import AdminSlidebarLeftElement from "./view/admin/components/slidebar-left";
import AdminSlidebarRightElement from "./view/admin/components/slidebar-right";
import AdminFooterElement from "./view/admin/components/footer";

import HeaderElement from "./view/user/components/header";
import FooterElement from "./view/user/components/footer";

import LoginElement from "./view/login";

import $ from 'jquery'

export default {
	name: 'app',
	components: {
		"admin-slidebar-left-element": AdminSlidebarLeftElement,
		"admin-slidebar-right-element": AdminSlidebarRightElement,
		"admin-nav-element": AdminNavElement,
		"admin-footer-element": AdminFooterElement,

		"header-element": HeaderElement,
		"footer-element": FooterElement,
		"login-element": LoginElement,
	},
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			page_login: false,
			is_admin: false,
		}
	},
	created() {
		
	},
	mounted() {
		this.page_login = (this._route.name == 'login');
		this.is_admin = (this._route.link.match(/admin/g) != null);

		if (this.page_login) {
			this.addClassInBody();
		} else {
			this.removeClassInBody();
		}
	},
	methods: {
		addClassInBody() {
			$("body").addClass("login-page");
		},
		removeClassInBody() {
			if ($("body").hasClass("login-page")) {
				$("body").removeClass("login-page");	
			}
			if ($("body").hasClass("login-page")) {
				$("body").removeClass("login-page");
			}
        }
	}
}
</script>