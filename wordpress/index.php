<?php
/*
Plugin Name: RoulettePress
Plugin URI: https://github.com/LUHMLLO/roulette.com/
Description: A truth and dare game where you just insert the players name and start.
Version: 1.0.0
Author: LUHMLLO
Author URI: https://github.com/LUHMLLO
License: GPL2
*/

function roulettepress_shortcode()
{
    $html = file_get_contents(plugin_dir_path(__FILE__) . 'index.html');

    // Wrap the HTML content with shadowDOM
    $html = '<roulettepress shadowroot="open">' . $html . '</roulettepress>';

    return $html;
}

add_shortcode('roulettepress', 'roulettepress_shortcode');