<?php
/**
 * 
 * @author Đức Trung
 * @version 1.0
 * Class thao tác với cơ sở dữ liệu trong bảng q_subject
 * Làm việc với kiểu video
 *
 */
class Subject_Model_Video extends Quac_Db_Table {
	protected $_primary='id';
	protected $_name='q_subject';
	protected $_secondname='q_subjectmeta';
	protected $_type='video';
	public function __construct($entity=null) {
		parent::__construct ($entity);
	
	}
	/**
	 * 
	 * @param array $entity
	 * Lấy từ CSDL ra thông tin của một video theo id
	 */
	public function getVideo($entity=null){
		$this->createEntity($entity);
	}
	/**
	 * 
	 * @param  array $entity
	 * Lấy ra thông tin của nhiều video
	 * Phân loại theo :
	 * + lấy video theo bảng
	 * + lấy video theo của một người
	 * + Lấy toàn bộ video
	 * Điều kiện :
	 * + Lấy theo trạng thái public 
	 * + Lấy theo trạng thái private
	 * + Lấy theo trạng thái public so với người dùng
	 * Sắp xếp :
	 * + Theo thời gian
	 * + Theo lượt xem
	 * + Theo lượt theo dõi
	 * + Theo lượt đánh giá 
	 * + Theo lượt bình luật
	 */
	public function getVideos($entity=null){
		$this->createEntity($entity);
		
	}
	/**
	 * 
	 * @param unknown_type $entity
	 * Kiểm tra video có bị private so với người dùng :
	 * + Quyền xem
	 * + Quyền bình luận
	 * + Quyền đánh giá
	 */
	public function isPrivate($entity=null){
		
	}
	/**
	 * 
	 * @param array $entity
	 * Kiểm tra video tồn tại, giữa vào link
	 * + Trong bảng
	 * + Trong toàn bộ bảng
	 */
	public function  isExist($entity=null){
		
	}
	/**
	 * 
	 * Lấy tất cả comment video
	 * Sắp xếp theo :
	 * + Thời gian
	 * + Bình chọn
	 * + Hoạt động
	 * @param array $entity
	 */
	public function  getComments($entity=null){
		$this->createEntity($entity);		
	}
	
}

?>