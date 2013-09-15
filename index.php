<?php
/**
 * index.php có nhiệm vụ khởi tạo ứng dụng, load
 * các file cấu hình để chạy trang web
 * file index thực hiện include 2 file define.php
 * và file Application.php
 *  
 */
include_once 'configs/define.php';
/** Lớp Zend_Application */
require_once LIBRARY_PATH.'/Zend/Application.php';
/**
 * Khởi tạo lớp Zend_Application với đầu vào gồm
 * +APPLICATION_ENV: enviroment trong file config.ini
 * + Đường dẫn tới thư mục cấu hình cho ứng dụng config.ini
 */
$application = new Zend_Application(
    APPLICATION_ENV,
    CONFIG_PATH . '/config.ini'
);
// Gọi bootstrap để khởi chạy ứng dụng
$application->bootstrap()
            ->run();