

<section id="inquiry">

	<p class="contactheader gravurthin"><?php the_field('contact_lead_copy'); ?></p>

	<a class="contactemail gravurthin" href="mailto:<?php the_field('contact_email'); ?>?Subject=Hello%Party!">
		<img src="<?php bloginfo('template_url'); ?>/img/leftarrow_black.png" class="arrowleftcontact" width="44" height="35">
		<?php the_field('contact_email'); ?>
	</a>

</section>

<section id="locations">

<?php 

	if(have_rows('contact_locations')) :
		while(have_rows('contact_locations')) : the_row();
			if(get_row_layout()=='location_full') : ?>

				<address class="addresslarge">

			<?php elseif(get_row_layout()=='location_half') : ?>

				<address class="address_small">

		<?php endif; 

		$office = get_sub_field('location_office');
		$address = get_sub_field('location_address');
		$location = get_sub_field('location_map');
		?>

	<h2 class="addresstitle gravurregular"><?php echo($office); ?></h2>
	<p class="addressrest gravurlight"><?php echo($address); ?></p>

	<?php if(get_row_layout()=='location_full') : ?>
	<div class="address_largemap">
	<?php elseif(get_row_layout()=='location_half') : ?>
	<div class="address_smallmap">
	<?php endif; ?>
		<div class="acf-map">
	    	<div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>"></div>
	    </div>
    </div>
		
	</address>


	<?php
		endwhile;
	endif;

 	?>

	
</section>
