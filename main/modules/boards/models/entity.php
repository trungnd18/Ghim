<?php
/**
 * 
 * @author Đức Trung
 * @version 1.0
 *
 */
class Boards_Model_Entity extends Zend_Db_Table{
	protected $_name="q_board";
	protected $_primary="id";
	protected $id;
	protected $name;
	protected $date;
	protected $author;
	protected $status;
	protected $type;
	protected $description;
	protected $value;
	protected $key;
/**
 * 
 * @param array $board
 */
	public function __construct($board= NULL) {
		parent::__construct ();
		foreach ($board as $k =>$v){
			$this->$k=$board[$k];
		}
	}

	/**
	 * @return the $id
	 */
	public function getId() {
		return $this->id;
	}

	/**
	 * @return the $name
	 */
	public function getName() {
		return $this->name;
	}

	/**
	 * @return the $date
	 */
	public function getDate() {
		return $this->date;
	}

	/**
	 * @return the $author
	 */
	public function getAuthor() {
		return $this->author;
	}

	/**
	 * @return the $status
	 */
	public function getStatus() {
		return $this->status;
	}

	/**
	 * @return the $type
	 */
	public function getType() {
		return $this->type;
	}

	/**
	 * @return the $description
	 */
	public function getDescription() {
		return $this->description;
	}
	/**
	 * @param field_type $id
	 */
	public function setId($id) {
		$this->id = $id;
	}

	/**
	 * @param field_type $name
	 */
	public function setName($name) {
		$this->name = $name;
	}

	/**
	 * @param field_type $date
	 */
	public function setDate($date) {
		$this->date = $date;
	}

	/**
	 * @param field_type $author
	 */
	public function setAuthor($author) {
		$this->author = $author;
	}

	/**
	 * @param field_type $status
	 */
	public function setStatus($status) {
		$this->status = $status;
	}

	/**
	 * @param field_type $type
	 */
	public function setType($type) {
		$this->type = $type;
	}

	/**
	 * @param field_type $description
	 */
	public function setDescription($description) {
		$this->description = $description;
	}

	
}
