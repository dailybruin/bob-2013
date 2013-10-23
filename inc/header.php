<?php global $cur_part, $cur_story ?>
<!DOCTYPE html>
<!--[if IE 8]> 				 <html class="no-js lt-ie9" lang="en" > <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" > <!--<![endif]-->

<head>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title><?php if(isset($curtitle)): print $curtitle; ?> | <?php endif; ?>In the Shadows | Daily Bruin</title>
  
  <?php if(isset($canonical_url)): ?>
  <link href="<?php echo $canonical_url; ?>" rel="canonical" />
  <?php endif; ?>

  <link rel="shortcut icon" href="http://dailybruin.com/img/favicon.ico"/>
  
  <link type="text/plain" rel="author" href="<?php echo SITE_URL ?>humans.txt" />
  
  <link rel="stylesheet" href="<?php echo SITE_URL ?>css/normalize.css">
  <link rel="stylesheet" href="<?php echo SITE_URL ?>css/foundation.css">
  <link rel="stylesheet" href="<?php echo SITE_URL ?>css/app.css?t=1382531158">

  <script src="<?php echo SITE_URL ?>js/vendor/custom.modernizr.js"></script>

  <meta property="fb:app_id" content="269701246422391"/>
  <?php if(isset($canonical_url)): ?>
    <meta property="og:url" content="<?php echo $canonical_url; ?>"/>
  <?php endif; ?>
  <meta property="og:site_name" content="Daily Bruin"/>
  <meta property="og:title" content="<?php if (isset($curtitle)): print $curtitle; ?> | <?php endif; ?>In the Shadows | Daily Bruin" />
  <meta property="og:type" content="article"/>
  <meta property="og:image" content="<?php echo SITE_URL; ?>img/gen/thumb.jpg"/>
  <meta property="og:image" content="http://dailybruin.com/images/2013/01/dailybruinicon2.jpeg"/>
  <meta property="og:locale" content="en_us"/>
  
</head>
<body>
    
  <header class="<?php echo $cur_part; ?>">
    <a href="http://dailybruin.com" id="nameplate">
      <img src="<?php echo SITE_URL ?>img/gen/nameplate.svg" alt="Daily Bruin" />
    </a>
    
    <h1 id="package-title"><span id="package-title-first">In the</span> <span id="package-title-last">Shadows</span></h1>
    
  </header>
  
  <nav>
    <ul>
      <li <?php if ($cur_part == 'chapter-one'): ?>class="active"<?php endif; ?>><a href="/" >Chapter One</a></li>
      <li <?php if ($cur_part == 'chapter-two'): ?>class="active"<?php endif; ?>><a href="/chapter-two/" data-dropdown="part2">Chapter Two</a></li>
      <li <?php if ($cur_part == 'chapter-three'): ?>class="active"<?php endif; ?>><a href="/chapter-three/" data-dropdown="part3">Chapter Three</a></li>
      <li <?php if ($cur_part == 'columns'): ?>class="active"<?php endif; ?>><a href="/columns/">Columns</a></li>
      <li <?php if ($cur_part == 'photos'): ?>class="active"<?php endif; ?>><a href="/photos/revealing-voices">Photo Essay</a></li>
    </ul>
  </nav>
  <div class="dropdowns">
    <ul id="part2" class="f-dropdown" data-dropdown-content>
      <li><a href="/chapter-two/looking-for-light/">Health and human rights</a></li>
      <li><a href="/chapter-two/turning-taboos-into-talking-points/">Talking about taboos</a></li>
    </ul>
    <ul id="part3" class="f-dropdown" data-dropdown-content>
      <li><a href="/chapter-three/on-the-fringes/">An unrelieved burden</a></li>
      <li><a href="/chapter-three/lesbians-left-out-of-activism/">Women left out</a></li>
    </ul>
  </div>
  
