
<article>

	<hgroup id="blurb" class="gravurthin">
		<h1><?php the_field('about_blurb'); ?></h1>
		<div class="gravurlight">
			<?php the_field('about_body_copy'); ?>
		</div>
	</hgroup>

<?php if(have_rows('about_members')): ?>


	<div class="members">
		
	<?php while(have_rows('about_members')) : the_row(); ?>
	
	<figure class="member">
        <img src="<?php the_sub_field('about_illustration'); ?>" alt="" width="140" height="360">
        <figcaption>
	        <h2 class="name gravurregular"><?php the_sub_field('about_name'); ?></h2>
	        <p class="title gravurlight"><?php the_sub_field('about_job_title'); ?></p>
	        <?php if(get_sub_field('about_twitter')): ?>
	        <a class="twitter gravurlight" href="https://twitter.com/<?php the_sub_field('about_twitter'); ?>">@<?php the_sub_field('about_twitter'); ?></a>
	        <?php endif ?>
        </figcaption>
    </figure>			

	<?php endwhile; ?>

	</div>
<?php else : ?>

<?php endif; ?>
	
</article>
