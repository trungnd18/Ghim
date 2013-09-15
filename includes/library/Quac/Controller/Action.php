<?php
/**
 * Lớp load template cho ứng dụng
 * 
 */
class Quac_Controller_Action extends Zend_Controller_Action{
	
	public function init(){
		/*$template_path = TEMPLATE_PATH . "/admin/system";
		$this->loadTemplate($template_path,'template.ini','template');*/
	}
	/**
	 * Hàm load template 
	 * @param String $template_path
	 * @param String $fileConfig
	 * @param String $sectionConfig
	 */
	protected function loadTemplate($template_path, $fileConfig = 'template.ini',$sectionConfig = 'template'){
		
		//Xóa layout đã tồn tại
		$this->view->headTitle()->set('');
		$this->view->headMeta()->getContainer()->exchangeArray(array());
		$this->view->headLink()->getContainer()->exchangeArray(array());
		$this->view->headScript()->getContainer()->exchangeArray(array());
		// Đọc file config
		$filename = $template_path . "/" . $fileConfig;
		$section = $sectionConfig;
		$config = new Zend_Config_Ini($filename,$section);
		$config = $config->toArray();
		
		$baseUrl = $this->_request->getBaseUrl();
		$templateUrl = $baseUrl .$config['url'];
		$cssUrl = $templateUrl . $config['dirCss'];
		$jsUrl = $templateUrl . $config['dirJs'];
		$imgUrl = $templateUrl . $config['dirImg'];
		
		//Nạp tiêu đề cho layout
		$this->view->headTitle($config['title']);
		
		//Nạp các thẻ meta cho layout
		if(count($config['metaHttp'])>0){		
			foreach ($config['metaHttp'] as $key => $value){
				$tmp = explode("|",$value);				
				$this->view->headMeta()->appendHttpEquiv($tmp[0],$tmp[1]);
			}
		}
		
		if(isset($config['metaName'])&&count($config['metaName'])>0){		
			foreach ($config['metaName'] as $key => $value){
				$tmp = explode("|",$value);				
				$this->view->headMeta()->appendName($tmp[0],$tmp[1]);
			}
		}
		
		//Nạp các tập tin css cho layout
		if(count($config['fileCss'])>0){		
			foreach ($config['fileCss'] as $key => $css){
				$this->view->headLink()->appendStylesheet($cssUrl . $css,'screen');
			}
		}
		
		//Nạp các tập tin javascript cho layout
		if(count($config['fileJs'])>0){		
			foreach ($config['fileJs'] as $key => $js){
				$this->view->headScript()->appendFile($jsUrl . $js,'text/javascript');
			}
		}

		// Thiết lập đường dẫn đến các thư mục của layout
		$this->view->templateUrl = $templateUrl; // đường dẫn đến thư mục template
		$this->view->cssUrl = $cssUrl;// đường dẫn đến thư mục css
		$this->view->jsUrl = $jsUrl; // đường dẫn đến thư mục javacsript
		$this->view->imgUrl = $imgUrl;// đường dẫn đến thư mục img
		
		$option = array('layoutPath'=> $template_path, 'layout'=> $config['layout']);
		Zend_Layout::startMvc($option);
		
	}

	
}