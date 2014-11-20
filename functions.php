<?php

// Register Widget
register_sidebar(array(
	'id' => 'profile-widgets',
	'name' => 'Profile widgets',
	'description' => 'Profile Text. Use Enhanced Text Widget Plugin',
	'before_widget' => '<section id="profile">',
	'after_widget' => '</section>',
	'before_title' => '<div style="display:hidden">',
	'after_title' => '</div>'
	));

// Get Total Posts
function get_totalposts() {
	global $wpdb;
	$totalposts = $wpdb->get_var("SELECT COUNT(ID) FROM $wpdb->posts WHERE post_status = 'publish'") - 1;
	return $totalposts;
}

// Get the latest post URL
function get_latest_post_url() {
	global $wpdb;
	$query = "SELECT ID FROM {$wpdb->prefix}posts WHERE post_type='post' AND post_status='publish' ORDER BY post_date DESC LIMIT 1;";
	$result = $wpdb->get_results($query);
	if(is_object($result[0])) {
		return get_permalink($result[0]->ID);
	} else {
		return '';
	};
}

// Get the oldest post URL
function get_oldest_post_url() {
	global $wpdb;
	$query = "SELECT ID FROM {$wpdb->prefix}posts WHERE post_type='post' AND post_status='publish' ORDER BY post_date ASC LIMIT 1;";
	$result = $wpdb->get_results($query);
	if(is_object($result[0])) {
		return get_permalink($result[0]->ID);
	} else {
		return '';
	};
}

add_filter( 'protected_title_format', 'remove_protected_text' );
function remove_protected_text() {
	return __('%s');
}

// add_filter( 'the_password_form', 'custom_password_form' );
// function custom_password_form() {
// 	global $post;
// 	$label = 'pwbox-'.( empty( $post->ID ) ? rand() : $post->ID );
// 	$o = '<form class="protected-post-form" action="' . get_option('siteurl') . '/wp-pass.php" method="post">' . __( "<p>This post is password protected.<br>To view it please enter your password below:</p>" ) . '<p><input name="post_password" id="' . $label . '" type="password" size="20" /><input type="submit" name="Submit" value="' . esc_attr__( "Submit" ) . '" /></p></form>';
// 	return $o;
// }


/* Disable WordPress Admin Bar for all users but admins. */
show_admin_bar(false);


?>