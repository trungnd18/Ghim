<?php
/**
 * File define.php định nghĩa các hằng số 
 * phục vụ cho ứng dụng
 */
//Định nghĩa đường dẫn đến thư mục ứng dụng
defined('APPLICATION_PATH')
|| define('APPLICATION_PATH', realpath(dirname(__FILE__) . '/../main'));
//Định nghĩa enviroment cho ứng dụng
defined('APPLICATION_ENV')
|| define('APPLICATION_ENV', (getenv('APPLICATION_ENV') 
		? getenv('APPLICATION_ENV') : 'production'));
// Định nghĩa đường dẫn đến thư mục config
defined('CONFIG_PATH')
||define('CONFIG_PATH',realpath(dirname(__FILE__)));
// Định nghĩa đường dẫn đến thư mục includes
define('INCLUDES_PATH', realpath(dirname(__FILE__) . '/../includes'));
// Nạp đường dẫn đến thư mục chứa các thư viện cho ứng dụng
set_include_path(implode(PATH_SEPARATOR, array(
		realpath(APPLICATION_PATH . '/../includes/library'),
		get_include_path(),
)));
define('LIBRARY_PATH',INCLUDES_PATH.'/library');
//Đường dẫn đến thư mục template
define('TEMPLATE_PATH', INCLUDES_PATH . '/templates');
// URL đến thư mục template 
define('TEMPLATE_URL','/includes/templates');
