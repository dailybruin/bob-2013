<?php include('config.php'); 

$stories = array(
  "DEFAULT" => "dayone",
  "dayone" => array(
    "DEFAULT" => "storyone",
    "storyone" => array(
      "file" => "inc/day1.story.php"
    )
  ),
  "daytwo" => array(
    "DEFAULT" => "storytwo",
    "storytwo" => array(
      "file" => "inc/day2.story2.php"
    )
  )
);

$cur_part = "";
$cur_story = "";

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

$canonical_url = SITE_URL.$cur_part."/".$cur_story."/";
if($cur_part == $stories["DEFAULT"] && $cur_story == $stories[$stories["DEFAULT"]]["DEFAULT"])
{
  $canonical_url = SITE_URL;
}

// Render the page
include('inc/header.php'); 

include($stories[$cur_part][$cur_story]["file"]);

include('inc/footer.php'); ?>