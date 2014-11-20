
<?php get_header(); ?>

<?php if ( !is_singular() ) : //Top ?>

  <!-- Top -->
  <?php get_template_part( 'top' ); ?>
  <!-- /Top -->

<?php else : //individual page ?>

  <?php if(is_page('work')): ?>

    <?php get_template_part( 'work' ); ?>

  <?php elseif(is_page('about')): ?>

    <?php get_template_part( 'about' ); ?>

  <?php elseif(is_page('contact')): ?>

    <?php get_template_part( 'contact' ); ?>

  <?php else : ?>
    <!-- Project -->
    <?php get_template_part( 'project' ); ?>
    <!-- /Project -->
  <?php endif; ?>


<?php endif; ////End individual page////////////////////////////////////////////////?>

<?php if ( is_404() ) : //404 ?>
  <div class="left"><a href="<?php bloginfo( 'url' ); ?>">&laquo; Home page</a></div>
<?php endif; ?>


<?php get_footer(); ?>