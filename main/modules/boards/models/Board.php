<?php
/**
 * 
 * Lớp Boards_Model_Boards
 * Kế thừa lớp Quac_Db_Table
 * Lớp thực hiện các thao tác truy vấn xử lý csdl lấy được
 * @author Nguyễn Đức Trung
 *
 */
class Boards_Model_Board extends Quac_Db_Table{
	protected $_primary="id"; // Khóa chính
	protected $_name='q_board';// Tên bảng chính
	protected $_nameid='board_id'; // Khóa ngoài
	protected $_secondname='q_boardmeta'; // tên bảng meta
	/**
	 * 
	 * @param array $entity
	 */
	public function __construct($entity=NULL) {
		parent::__construct ($entity);
	}	
	public function count(){
		$select = $this->db->select ()->from ($this->_name.' AS q', array ('count(q.id) AS totalItem' ) );
		$result = $this->db->fetchOne ( $select );
		return $result;
	}
	/**
	 * 
	 * @param array $entity
	 * Lấy thông tin của 1 bảng theo id của bảng
	 * 
	 */
	public function getBoard($entity=null){
		$this->createEntity($entity);
		$select= $this->db->select ()->from ( $this->_name.' AS b' );
		$select=$select->joinLeft ( 'q_user AS u', 'b.user_id=u.id', array ('u.*' ) );
		$select = $select->where("b.id= ?",$this->id);
			$select=$this->db->fetchRow($select);
			$temp=$this->getValue(array('_name'=>$this->_secondname,'id'=>$this->id));
			$select=$this->push_value($select, $temp);
			
		return $select;		
	}
	/**
	 * 
	 * @param array $entity
	 * +Hiện thị các bảng của  1 người dùng 
	 * +Hiển thị các bảng được tất cả người dùng tạo
	 * Phân loại theo :
	 * + Các bảng được public -Các bảng bị private 
	 * + Các bảng chính thức từ trang web-Các bảng của người dùng tạo
	 * + Các bảng community  - Các bảng non-community ( Tiêu chí sẽ nói sau )
	 * + Các bảng theo từng top 10-20-50-100
	 * + Phân trang
	 * Sắp xếp theo :
	 * + Thời gian tạo
	 * + Số lượng tài nguyên trên bảng
	 * + Mức độ quan trọng
	 * + Mức độ đánh giá
	 * + Số lượng theo dõi
	 * 
	 */
	public function getBoards($entity=null){
		$this->createEntity($entity);
		$select= $this->db->select ()->from ( $this->_name.' AS a' );		

		
		if($this->type=='public'){
// 			$select=$select->where('a.type'=)
		}
		if($this->sort=='default'){
			$select=$this->db->fetchAll($select);
			for($i=0;$i<count($select);$i++){
				$temp=$this->getValue(array('_name'=>$this->_secondname,'id'=>$select[$i]['id']));
				$select[$i]=$this->push_value($select[$i], $temp);
			}
		}
		if($this->sort=='date'){
			/* Top public  */
		}
		if($this->sort=='top'){
			/* Top public  */
		}
		
		
		return $select;
	}
	
}
