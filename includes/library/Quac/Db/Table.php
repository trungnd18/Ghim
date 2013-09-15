<?php
/**
 * 
 * Lớp thư viện db chức năng, kế thừa class Zend_Db_Table
 * xây dựng sẵn các hàm cơ bản
 * @author Nguyễn Đức Trung
 *
 */
class Quac_Db_Table extends Zend_Db_Table{
	protected $db;
	/**
	 * 
	 * @param array $entity
	 */
	public function __construct($entity=NULL) {
		parent::__construct ();
		$this->db = Zend_Registry::get ( 'connectDb');
		$this->createEntity($entity);
	}
	/**
	 * 
	 * Tạo các thuộc tính cho lớp
	 * @param array $entity
	 */
	protected  function createEntity($entity=NULL){
		if($entity!=NULL){
			foreach ($entity as $k =>$v){
				$this->$k=$entity[$k];
			}
		}
	}
	/**
	 * 
	 * Thêm một dòng mới
	 * @param unknown_type $entity
	 */
	public function create($entity=NULL){
		$this->createEntity($entity);
		if(!isset($this->id)){
		$row = $this->fetchNew ();
		foreach ($row as $k=>$v){
			$row->$k=$this->$k;
		}
		$row->save();
		return $row->id;
		}else return;
	}
	/**
	 * 
	 * Sửa giá trị trong table
	 * @param unknown_type $entity
	 */
	public function edit($entity=NULL){
		$this->createEntity($entity);
		if(isset($this->id)){
			$row = $this->fetchRow ("id=" . $this->id);
			foreach ($row as $k=>$v){
				if($k!='id') $row->$k=$this->$k;
			}
			$row->save();
			return $row->id;
		}else{
			return;
		}
		
	}
	/**
	 * 
	 * Xóa một dòng
	 * @param unknown_type $entity
	 */
	public function remove($entity=NULL){
		$this->createEntity($entity);
		$this->delete('id=' . $this->id);
	}
	/**
	 * 
	 * Thêm các cặp key-name value vào một mảng khác.
	 * Key_name được thêm như là một khóa với giá trị là value
	 * @param array $array1
	 * @param array $array2
	 */
	protected function push_value($array1,$array2){
		if(empty($array2)||!is_array($array2)) return $array1 ;
		if(!is_array($array1)) $array1=array();
		foreach ($array2 as $k){
			$array1[$k['key_name']]=$k['value'];
			
		}
		return $array1;
	}
	/**
	 * 
	 * Lấy tất cả các cặp key-value của 1 bảng bất kỳ
	 * @param unknown_type $entity
	 */
	public function getValue($entity=null){
		$this->createEntity($entity);
		$select= $this->db->select ()->from ( $this->_name.' AS a' );
		$select = $select->where("a.{$this->_nameid}={$this->id}");
		return $this->db->fetchAll($select);
	}
	/**
	 * 
	 * Lấy giá trị của key_name trong bảng meta
	 * @param unknown_type $entity
	 */
	public function getValueByKey($entity=null){
		$this->createEntity($entity);
		$select= $this->db->select ()->from ( $this->_name.' AS a' );
		$select = $select->where("a.{$this->collumname}={$this->key_name} and {$this->_nameid}={$this->id}");
		return $this->db->fetchRow($select);
	}
	/**
	 * 
	 * Sửa giá trị trong các bảng meta
	 * @param unknown_type $entity
	 */
	public function editValue($entity=null){
		$this->createEntity($entity);
		if(isset($this->key_name)&&isset($this->id)&&isset($this->_nameid)){
			$row = $this->fetchRow ("key_name= " . $this->key_name." and {$this->_nameid}=". $this->id);
			$row->value=$this->value;
			$row->save();
			return $row->id;
		}else{
			return;
		}
	}
}
