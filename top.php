
<section id="intro">
    <div class="logo"><img src="<?php bloginfo('template_url'); ?>/img/logo.svg"></div>
    <div class="arrow"></div>
</section>

<section id="top">
    <div class="subtitle gravurthin" scrollSpeed="2">WE EXPERIMENT WITH COMBINING<br> <span class="red"> STORYTELLING &amp; TECHNOLOGY </span><br>TO CREATE EMOTIONAL EXPERIENCES</div>
 </section>


<section id="selectedworks">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <?php if(get_field('work_show_on_homepage')): ?>

    <?php
    if(get_field('work_title_color')=="white") :
        $class = onblack;
    else:
        $class = onwhite;
    endif;
    ?>

    <a href="<?php the_permalink(); ?>" data-background="<?php the_field('work_hero_image'); ?>">
      <article>
        <hgroup>
            <h1 class="gravurthin <?php echo($class); ?>"><?php the_field('work_title'); ?></h1>
            <dl class="gravurthin <?php echo($class); ?>">
                <dt>Date</dt>
                <dd><?php the_field('work_date') ?></dd>
                <dt>Type</dt>
                <dd><?php the_field('work_type') ?></dd>
                <dt>Client</dt>
                <dd><?php the_field('work_client') ?></dd>
            </dl>
        </hgroup>
      </article> 
    </a>
    <?php endif; ?>

    <?php endwhile; else: ?>


    <?php endif; ?>

</section>



<section id="allwork" class="gravurthin">
    <a href="<?php bloginfo('url'); ?>/work/">
    <img src="<?php bloginfo('template_url'); ?>/img/leftarrow_white.png" width="44" height="35" class="leftarrow">
    <span>View all work</span>
    </a>
</section>     








