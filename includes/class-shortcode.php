<?php
/**
 * Handles the [resume_builder] shortcode and enqueues React assets.
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class Resume_Builder_Shortcode {
    public function __construct() {
        add_shortcode( 'resume_builder', array( $this, 'render_shortcode' ) );
    }

    public function render_shortcode() {
        return '<div id="resume-builder-root">Loading Resume Builder...</div>';
    }
}