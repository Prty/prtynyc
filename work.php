
<?php 
/*
Template Name: Archives
*/
 ?>

<div class="work_wrapper">
<?php query_posts('posts_per_page=10000'); ?>
<?php if (have_posts()) : ?><?php while (have_posts()) : the_post(); ?>
	<?php 
		$id = get_the_ID();
	 ?>

	<article>
		<a href="<?php the_permalink() ?>" data-background="<?php the_field('work_thumbnail', $id);?>">
		<div>
			<dl class="gravurthin">
				<dt>Date</dt>
				<dd><?php the_field('work_date', $id);?></dd>
				<dt>Type</dt>
				<dd><?php the_field('work_type', $id);?></dd>
				<dt>Client</dt>
				<dd><?php the_field('work_client', $id);?></dd>
			</dl>
			<h2 class="gravurthin">
				<?php the_field('work_title', $id);?>
			</h2>	
		</div>
		</a>
	</article>

<?php endwhile; ?>
<?php endif; ?>
</div>



