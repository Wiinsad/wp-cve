<?php

/**
 * TODO: Decide exactly what an HTML parser should do.  What format of PHP objects/arrays?
 */
class RESTian_Text_Html_Parser extends RESTian_Parser_Base {
  /**
   * Returns an object or array of stdClass objects from a string containing HTML
   *
   * @param string $body
   * @return array|object|void A(n array of) stdClass object(s) with structure dictated by the passed HTML string.
   * @throws Exception
   */
  function parse( $body ) {
    $error_path = plugin_dir_url(__FILE__) ;
    try {


    if (1)  // This logic here only to get PhpStorm to stop highlighting the return as an error.
      throw new Exception( 'The ' . __CLASS__ . ' class has not yet been implemented.' );
    return $body;
    }
  
  catch (Exception $e) 
  {  
    echo 'Exception Message: ' .$e->getMessage();  
    if ($e->getSeverity() === E_ERROR) {
        echo("E_ERROR triggered.\n");
    } else if ($e->getSeverity() === E_WARNING) {
        echo("E_WARNING triggered.\n");
    }
    echo "<br> $error_path";
  }  
  catch (ErrorException  $er)
  {  
    echo 'ErrorException Message: ' .$er->getMessage();  
    echo "<br> $error_path";
  }  
  catch ( Throwable $th){
    echo 'ErrorException Message: ' .$th->getMessage();
    echo "<br> $error_path";
  }
}
}
