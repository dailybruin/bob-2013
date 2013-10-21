<?php global $cur_part, $cur_story ?>
<!DOCTYPE html>
<!--[if IE 8]> 				 <html class="no-js lt-ie9" lang="en" > <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" > <!--<![endif]-->

<head>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>In the Shadows | Daily Bruin</title>
  
  <?php if(isset($canonical_url)): ?>
  <link href="<?php echo $canonical_url; ?>" rel="canonical" />
  <?php endif; ?>

  <link rel="shortcut icon" href="http://dailybruin.com/img/favicon.ico"/>
  
  <link type="text/plain" rel="author" href="<?php echo SITE_URL ?>humans.txt" />
  
  <link rel="stylesheet" href="<?php echo SITE_URL ?>css/normalize.css">
  <link rel="stylesheet" href="<?php echo SITE_URL ?>css/foundation.css">
  <link rel="stylesheet" href="<?php echo SITE_URL ?>css/app.css">

  <script src="<?php echo SITE_URL ?>js/vendor/custom.modernizr.js"></script>

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
      <li class="disabled"><a href="#" data-dropdown="part2">Chapter Two (Tuesday)</a></li>
      <li class="disabled"><a href="#">Chapter Three (Wednesday)</a></li>
      <li class="disabled"><a href="#">Columns (Wednesday)</a></li>
      <li <?php if ($cur_part == 'photos'): ?>class="active"<?php endif; ?>><a href="/photos/revealing-voices">Photo Essay</a></li>
    </ul>
  </nav>
  <div class="dropdowns">
    <ul id="part1" class="f-dropdown" data-dropdown-content>
      <li><a href="#">Story 1</a></li>
      <li><a href="#">Story 2</a></li>
    </ul>
  </div>
  
