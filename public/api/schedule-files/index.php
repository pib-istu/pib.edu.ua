<?php

/*
 * Converts a filesystem tree to a PHP array.
 */
function dir_to_array($dir)
{
  if (!is_dir($dir)) {
      return null;
  }

  $url = str_replace($_SERVER['DOCUMENT_ROOT'], '', $dir);
  $data = [];

  foreach (new DirectoryIterator($dir) as $f) {
          if ($f->isDot()) {
            continue;
          }

          $path = $f->getPathname();
          $name = $f->getFilename();

          if ($f->isFile()) {
            $data[] = [
              'type' => 'file',
              'name' => $name,
              'ext' => pathinfo($name, PATHINFO_EXTENSION),
              'url' => "{$url}/$name"
            ];
          } else {
            // $files = dir_to_array($path);

            // $data[] = [
            //   'type' => 'dir',
            //   'name' => $name,
            //   'files' => $files
            // ];
          }
  }

  return $data;
}

function json_response($code = 200, $body = null)
{
    header_remove();
    http_response_code($code);
    header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET');
    header("Access-Control-Allow-Headers: X-Requested-With");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $status = array(
      200 => '200 OK',
      400 => '400 Bad Request',
      422 => 'Unprocessable Entity',
      500 => '500 Internal Server Error'
    );

    header('Status: '.$status[$code]);

    return json_encode($body);
}

echo json_response(200, dir_to_array("{$_SERVER['DOCUMENT_ROOT']}/media/schedule"));
