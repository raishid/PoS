<?php

  /*
    head
  */

  $this->includeVar('layouts.head');

  /*
    header
  */
  $this->includeVar('layouts.header');


  /*
    sidebar
  */
  $this->includeVar('layouts.left_sidebar');

  /*
    content
  */

  if(isset($content)){
    $this->includeVar($content);
  }

  /*
  footer
  */
  $this->includeVar('layouts.footer');

  /*
  scripts
  */
  $this->includeVar('layouts.scripts');