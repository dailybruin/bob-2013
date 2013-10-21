<?php include('config.php'); 

$stories = array(
  "DEFAULT" => "chapter-one",
  "chapter-one" => array(
    "DEFAULT" => "a-battle-for-care",
    "RELEASE" => "10/16/2013 3:50AM",
    "a-battle-for-care" => array(
      "file" => "inc/day1.story.php",
      "title" => "A Battle for Care"
    )
  ),
  "chapter-two" => array(
    "DEFAULT" => "storytwo",
    "RELEASE" => "10/16/2013 3:30AM",
    "storytwo" => array(
      "file" => "inc/day2.story2.php"
    )
  ),
  "photos" => array(
    "DEFAULT" => "revealing-voices",
    "RELEASE" => "10/16/2013 3:30AM",
    "revealing-voices" => array(
      "file" => "inc/photos.profiles.php",
      "title" => "Revealing Voices"
    )
  ),
);

$cur_part = "";
$cur_story = "";

// Set the part
if(isset($_GET['part']) && !isset($stories[$_GET['part']]))
{
  send_404();
}
else if (!isset($_GET['part']))
{
  $cur_part = $stories["DEFAULT"];
}
else
{
  $cur_part = $_GET['part'];
}

// Set the story
if(isset($_GET['story']) && !isset($stories[$cur_part][$_GET['story']]))
{
  send_404();
}
else if (!isset($_GET['story']))
{
  $cur_story = $stories[$cur_part]["DEFAULT"];
}
else
{
  $cur_story = $_GET['story'];
}

// If the part isn't available, serve a 404
if(time() < strtotime($stories[$cur_part]["RELEASE"]) && !DEBUG)
{
  send_404();
}

// Figure out the canonical URL for SEO
$canonical_url = SITE_URL.$cur_part."/".$cur_story."/";
if($cur_part == $stories["DEFAULT"] && $cur_story == $stories[$stories["DEFAULT"]]["DEFAULT"])
{
  $canonical_url = SITE_URL;
}

$curtitle = $stories[$cur_part][$cur_story]['title'];

// Render the page
include('inc/header.php'); 

include($stories[$cur_part][$cur_story]['file']);

include('inc/footer.php'); ?>