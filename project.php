

<article>

  <?php
  $templatePath = get_bloginfo('template_url');
    if(get_field('work_title_color')=="white") :
      $class = onblack;
      $arrowFile = $templatePath . "/img/leftarrow_white.png";
    else:
      $class = onwhite;
      $arrowFile = $templatePath . "/img/leftarrow_black.png";
    endif;
   ?>

  <section id="hero" class="<?php echo($class); ?>" data-background="<?php the_field('work_hero_image'); ?>">
    <div>
      <hgroup>
        <h1 class="gravurthin <?php echo($class); ?>">
          <?php the_field('work_title'); ?>
        </h1>

        <?php if(get_field('work_use_video')): ?>

        <script type="text/javascript">
          embedCode = '<?php the_field('work_embed_source');?>' ;
        </script>


        <p class="itemcta gravurthin">
          <a href="#" class="videocta <?php echo($class); ?>">
          <img class="leftarrowproject" src="<?php echo($arrowFile); ?>" width="44" height="35"> WATCH VIDEO
          </a>
        </p>
        <?php endif; ?>
      </hgroup>
    </div>
  </section>


  <section id="textblock">

    <dl class="gravurregular">
      <dt>Date</dt>
      <dd><?php the_field('work_date'); ?></dd>
      <dt>Type</dt>
      <dd><?php the_field('work_type'); ?></dd>
      <dt>Client</dt>
      <dd><?php the_field('work_client'); ?></dd>
    </dl>    

    <div class="projectblurb gravurthin">
      <?php the_field('work_lead_copy'); ?>
    </div>

    <div class="flexcontainer">

      <div class="projecttext gravurlight">
        <?php the_field('work_body_copy'); ?>
      </div>

      <?php if(have_rows('work_links')): ?>
        <ul class="links">
          <?php while(have_rows('work_links')): the_row(); ?>
          <li class="gravurregular"><a href="<?php the_sub_field('work_links_url'); ?>"><?php the_sub_field('work_links_name'); ?></a></li>
          <?php endwhile; ?>
        </ul>
      <?php endif; ?>

    </div>


  </section>

  <!-- Slide Show  -->
  <?php if(have_rows('work_slideshow')): ?>
  <section id="slideshow">
    <div id="slides">
        <?php while(have_rows('work_slideshow')): the_row(); 

          $img = get_sub_field('work_slideshow_image');
          $url = $img['url']
        ?>
        <img src="<?php echo($url);?>">
        <?php endwhile; ?>
        <a href="#" class="slide_arrow right slidesjs-next slidesjs-navigation"><img src="<?php bloginfo('template_url'); ?>/img/arrow_right.png" height="74" width="38" alt=""></a>
        <a href="#" class="slide_arrow left slidesjs-previous slidesjs-navigation"><img src="<?php bloginfo('template_url'); ?>/img/arrow_left.png" height="74" width="38" alt=""></a>
    </div>
  </section>              
  <?php endif; ?>
  <!-- /Slide Show  -->


  <!-- Credit -->
  <?php if(have_rows('work_credit')): ?>
  <section id="credits">

    <!-- <h2 class="creditstitle gravurregular">CREDITS</h2> -->

    <dl>
      <?php while(have_rows('work_credit')): the_row(); ?>
      <dt class="gravurlight"><?php the_sub_field('work_credit_role'); ?></dt>
      <dd class="gravurlight"><?php the_sub_field('work_credit_names'); ?></dd>
      <?php endwhile; ?>
    </dl>

  </section>
  <?php endif; ?>
  <!-- /Credit -->



  <?php 

  // $next_post = get_next_post();
  $next_post = get_previous_post();

  if(!empty($next_post)) :?>

  <!-- Next -->
  <section id="nextproject" class="gravurthin">

    <?php
    $nextId = $next_post->ID;
    $title = $next_post->post_title;
    $nextLink = get_permalink($next_post->ID);

    $templatePath = get_bloginfo('template_url');
      if(get_field('work_next_cta_color', $nextId)=="white") :
        $class = onblack;
        $arrowFile = $templatePath . "/img/leftarrow_white.png";
      else:
        $class = onwhite;
        $arrowFile = $templatePath . "/img/leftarrow_black.png";
      endif;
     ?>
     
    <div class="<?php echo($class); ?>" data-image="<?php the_field('work_next_cta', $nextId); ?>">
      <a href="<?php echo($nextLink); ?>">
      <p>
        <span>Next</span>
        <span><img src="<?php echo($arrowFile); ?>" width="44" height="35"><?php echo( $title ); ?></span>
      </p>
      </a>
    </div>

  </section>
  <!-- /Next -->

  <?php endif; ?>


</article>



