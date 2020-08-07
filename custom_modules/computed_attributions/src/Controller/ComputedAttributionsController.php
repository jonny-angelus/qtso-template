<?php
/**
 * @file
 * Contains \Drupal\computed_attributions\Controller\ComputedAttributionsController.
 */
 
namespace Drupal\computed_attributions\Controller;
 
use Drupal\Core\Controller\ControllerBase;
 
class ComputedAttributionsController extends ControllerBase {
  public function content() {
    return array(
      '#type' => 'markup',
      '#markup' => t('Hello world'),
    );
  }
}