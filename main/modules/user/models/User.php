<?php
class User_Model_User extends Quac_Db_Table {
	
	protected $_name='q_board';
	protected $_primary='id';
	protected $_secondname='q_usermeta';
	public function __construct($entity=null) {
		parent::__construct ($entity);
	
	}
	public function getNewData(){
		$select = $this->db->select ()->from ( 'q_board AS q', array ('max(q.id) AS totalItem' ) );
		$result = $this->db->fetchOne ( $select );	
		$select=$this->select();
		$select->where('id=?',$result);
		$select=$this->fetchRow($select);
		$select=$select->toArray();
		$select['timestame']=date ( "Y-m-d H:i:s", time () );
		return $select;
	}
}

?>