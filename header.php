<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title><?php bloginfo( 'name' ); ?><?php wp_title( '&mdash;' ); ?></title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="PARTY New York" />
    <meta property="og:type" content="company" />
    <meta property="og:image" content="http://prty.nyc/shared/images/ogimage.jpg" />
    <meta property="og:url" content="http://prty.nyc/shared/images/favicon.ico" />
    <meta name="format-detection" content="telephone=no" />
    <meta http-equiv="Imagetoolbar" content="no" />
    <meta name="description" content="PARTY New York. We experiment with combining storytelling &amp; technology to create emotional experiences." />
    <meta name="keywords" content="PARTY, Qanta Shimizu,Masashi Kawamura,Tom Galle,Jamie Carreiro,Eiji Muroichi" />

    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/css/normalize.css">
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/css/main.css">

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" type="text/javascript" charset="utf-8"></script>

    
    <?php if ( !is_singular() ) : //index ?>

    <script src="<?php bloginfo('template_url'); ?>/js/script.js" type="text/javascript" charset="utf-8"></script>

    <?php else : //individual page ?>

      <?php if(is_page('work')): //work) ?>
      <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/css/work.css">
      <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/work.js"></script>

      <?php elseif(is_page('about')): //about) ?>
      <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/css/about.css">
      <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/about.js"></script>

      <?php elseif(is_page('contact')): //contact) ?>
      <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/css/contact.css">
      <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/contact.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>

      <?php else: //Project individual page ?>

      <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/css/project.css">
      <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jquery.slides.min.js"></script>
      <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/project.js"></script>


      <?php endif; ?>

    <?php endif; ?>

    <?php wp_head(); ?>
  </head>


  <body>

      
    <!-- Header -->
    <header>
        <h1 class="smalllogo"><a href="<?php bloginfo('url'); ?>#top"><img src="<?php bloginfo('template_url'); ?>/img/logo.svg" width="140" height="42" alt="PARTY NY"></a></h1>
        <nav class="menu sabonbold">

        <?php if ( !is_singular() ) : //index ?>

          <a href="<?php bloginfo('url'); ?>/work/">Work</a>
          <a href="<?php bloginfo('url'); ?>/about/">About Us</a>
          <a href="<?php bloginfo('url'); ?>/contact/">Contact</a>

        <?php else : //individual page ?>

          <?php if(is_page('about')): //about) ?>
          <a href="<?php bloginfo('url'); ?>/work/">Work</a>
          <a class="current" href="<?php bloginfo('url'); ?>/about/">About Us</a>
          <a href="<?php bloginfo('url'); ?>/contact/">Contact</a>

          <?php elseif(is_page('contact')): //contact) ?>
          <a href="<?php bloginfo('url'); ?>/work/">Work</a>
          <a href="<?php bloginfo('url'); ?>/about/">About Us</a>
          <a class="current" href="<?php bloginfo('url'); ?>/contact/">Contact</a>

          <?php else: //Project individual page or work?>
          <a class="current" href="<?php bloginfo('url'); ?>/work/">Work</a>
          <a href="<?php bloginfo('url'); ?>/about/">About Us</a>
          <a href="<?php bloginfo('url'); ?>/contact/">Contact</a>
          <?php endif; ?>

        <?php endif; ?>


        </nav>
    </header>
    <!-- /Header -->

    <div class="wrapper">





