package com.lecto.forward.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.lecto.forward.dto.ArticleDTO;
import com.lecto.forward.dto.BoardDTO;
import com.lecto.forward.dto.Criteria;
import com.lecto.forward.dto.PageMaker;
import com.lecto.forward.service.ArticleService;
import com.lecto.forward.service.BoardService;
import com.lecto.forward.vo.ArticleVO;


@Controller
public class ArticleController{
	
	@Autowired
	ArticleService articleService;
	
	@Autowired
	BoardService boardService;
	
	

	/*boardCode�� �̿��� �Խ��Ǻ� �Խñ۸���� ������*/
	@RequestMapping(value="/m_board", method=RequestMethod.GET)
	public String articleListMem(@RequestParam("boardCode") String boardCode, @RequestParam("page") int page, Model model, Criteria cri) {   
		System.out.println("���⿩��");
		try {
			BoardDTO boardDTO;
			boardDTO = boardService.searchBoardCode(boardCode);
			String themeCode = boardDTO.getThemeCode();
			cri.setBoardCode(boardCode);
			model.addAttribute("boardCode", boardCode);
			model.addAttribute("themeCode",themeCode);
			model.addAttribute("list",articleService.listCriteria(cri));
		
			PageMaker pageMaker = new PageMaker();
			pageMaker.setCri(cri);
			List<ArticleVO> searchTotalArticle = articleService.searchArticle(boardCode);
			int totalCount = searchTotalArticle.size();
			pageMaker.setTotalCount(totalCount);
			model.addAttribute("articles", articleService.searchArticle(boardCode));
			model.addAttribute("pageMaker", pageMaker);
			
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
				
		return "/m_board";
	}
	
	/* �۾��� �������� �̵� */
	@RequestMapping(value="/m_addarticle", method=RequestMethod.GET)
	public String addArticleMemGET(String boardCode, Model model) {
		/*model.addAttribute("articles", articleService.searchArticle(boardCode));*/
		
		try {
			boardCode="bo2";
			model.addAttribute("boardCode",boardCode);
			BoardDTO boardDTO = boardService.searchBoardCode(boardCode);
			String themeCode = boardDTO.getThemeCode();
			System.out.println("�۾���"+themeCode);
			model.addAttribute("themeCode",themeCode);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return "/m_writearticle";
	}
	
	/* �� ��� */
	@RequestMapping(value="/m_addarticle", method=RequestMethod.POST)
	public String addArticleMemPOST(String boardCode, String articleTitle, String content, Model model, HttpSession session) {
		/*String articleCode int articleHits String articleTitle String articleContent boolean notice String
		articleDate String boardCode */
		System.out.println("aaa");
		String memberId = "aaa";
		/*String memberId = (String)session.getAttribute("login");*/
		articleService.addArticle(new ArticleDTO("0", 0, articleTitle, content, false, "0", boardCode, memberId));
		
	
		
		/*String addr = articleListMemPost(boardCode, model);
		System.out.println("model!!!!!!!!!!!!!!!!"+model.toString());*/
		
		Map<String, String> map = new HashMap<String, String>();
		map.put("success", "1");
		map.put("location","/m_board/?boardCode="+boardCode);
		map.put("boardCode", boardCode);
		
		return "redirect:/m_board/?boardCode="+boardCode;
	}	
	
	
	/*articleCode�� �̿��� �Խñ� Ŭ���� �󼼺��⿡ ����� �����͸� ������*/
	/*@RequestMapping(value="/m_detailarticle", method=RequestMethod.GET)
	public String readArticleMem(@RequestParam("articleCode")String articleCode,@RequestParam("boardCode") String boardCode, Model model) {
		
		
		try {
			model.addAttribute("articleVO", articleService.searchArticle(articleCode, 1));
			BoardDTO boardDTO = boardService.searchBoardCode(boardCode);
			String themeCode = boardDTO.getThemeCode();
			model.addAttribute("themeCode",themeCode);
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
		return "/m_detailarticle";	
	}*/
	
	/**�Խñ� �ڼ��� �б� pageó��*/
	@RequestMapping(value="/m_detailarticle", method=RequestMethod.GET)
	public ModelAndView read(@RequestParam("boardCode") String boardCode,@RequestParam("articleCode")String articleCode,
			@RequestParam("page") int page, Model model, @ModelAttribute("cri")Criteria cri) {
		//articleCode�� boardCode�� ã�ƿ�
		//page, perPageNum, 
		System.out.println("���⿩�⿩��");
		System.out.println("boardCode"+boardCode);
		
		ModelAndView mav = new ModelAndView();
		
		mav.setViewName("/m_detailarticle");
		
		ArticleVO articleVO = articleService.searchArticle(articleCode, 1);
		

		if(articleVO != null) {
			//��ȸ�� ó��
			mav.addObject("articleVO", articleVO);		
			BoardDTO boardDTO;
			try {
				System.out.println("boardCode2"+boardCode);
				boardDTO = boardService.searchBoardCode(boardCode);
				System.out.println(boardDTO.getBoardCode());
				String themeCode = boardDTO.getThemeCode();
				System.out.println("�׸��ڵ��"+themeCode);
				mav.addObject("themeCode", themeCode);
			} catch (Exception e) {
			
				e.printStackTrace();
			}
			
			
		}else {
			mav.addObject("error", "No Data");
			mav.setViewName("/m_board");
		}
		return mav;
		
	}
	
		
	
	/*�Խñ� ������ư Ŭ���� ������ �̵�*/
//	@RequestMapping(value="/m_editarticle", method=RequestMethod.GET)
//	public String updateArticleMemGet() {
//		return "/m_editarticle";		
//	}
	
//	/*�Խñ� ����*/
//	@RequestMapping(value="/m_editarticle", method=RequestMethod.POST)
//	public String updateArticleMemPOST() {
//		return "/m_detailarticle";
//	}
	
	/*�Խñ� ����*/
	@RequestMapping(value="/m_detailarticle", method=RequestMethod.POST)
	public String deleteArticleMem(String articleCode, String boardCode, Model model) {
		List<ArticleVO> articles = null;
		if(articleCode == null) {
			articleService.deleteArticle(articleCode);
			articles = articleService.searchArticle(boardCode);
			return "redirect:/m_board";
		}
		boolean flag = articleService.deleteArticle(articleCode);
		if(flag) {
			System.out.println("���� �Ϸ�");
		}
		
		articles = articleService.searchArticle(boardCode);
		model.addAttribute("boardCode", boardCode);
		model.addAttribute("articles", articles);
		return "redirect:/m_board/boardCode?"+boardCode;
	}
	
	
	/*boardCode, searchWay, keyword�� ������ �Խñ��� �˻�*/
//	@RequestMapping(value="/m_board", method=RequestMethod.GET)
//	public String searchArticleMem(@RequestParam("boardCode") String boardCode, @RequestParam("searchWay") String searchWay, @RequestParam("keyword") String keyword, Model model) {
//		model.addAttribute("list", articleService.searchArticle(boardCode, searchWay, keyword));
//		return "/m_board";
//	}
	

	

	
	/*articleCode�� �̿��� �Խñ� Ŭ���� �󼼺��⿡ ����� �����͸� ������*/
	@RequestMapping(value="/a_detailarticle", method=RequestMethod.GET)
	public String readArticleAdmin(String articleCode, String boardCode, Model model) {
		/*System.out.println("�󼼻󼼻󼼻󼼻�"+articleCode);
		model.addAttribute("boardCode",boardCode);
		model.addAttribute("detail", articleService.searchArticle(articleCode, 1));*/
		return "/a_detailarticle";
	}
	
	
	/*boardCode, searchWay, keyword�� ������ �Խñ��� �˻�*/
//	@RequestMapping(value="/a_articlelist", method=RequestMethod.GET)
//	public String searchArticleAdmin(@RequestParam("boardCode") String boardCode, @RequestParam("searchWay") String searchWay, @RequestParam("keyword") String keyword, Model model) {		
//		model.addAttribute("list", articleService.searchArticle(boardCode, searchWay, keyword));
//		return "/a_articlelist";
//	}
	

	
	/*boardCode�� �̿��� �Խ��Ǻ� �Խñ۸���� ������*/
	@RequestMapping(value="/a_articlelist", method=RequestMethod.GET)
	public String articleListAdmin(Model model) {
		model.addAttribute("list", articleService.searchArticle("bo2"));
		return "/a_articlelist";
		
	}
	
	
	
	/**�Խ��Ǽ������� �׸����� ��ư ������� GET��� ȣ��*/
	@RequestMapping(value="/a_theme", method=RequestMethod.GET)
	public String changeThemeGet(@RequestParam("boardCode")String boardCode, Model model) {
		try {
			
			BoardDTO boardDTO = boardService.searchBoardCode(boardCode);
			
			model.addAttribute("boardCode", boardCode);
			String themeCode = boardDTO.getThemeCode();
			
			model.addAttribute("themeCode", themeCode);
			
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}		
		
		
	
		return "/a_theme";
		
	}
	
	/**�׸����� ȭ�鿡�� �׸��� �����ϰ� �׸����� Ȯ�ι�ư�� ������� �Խ������� ���ư�*/
	@RequestMapping(value="/a_theme", method=RequestMethod.POST)
	public String changeThemePost(Model model,HttpServletRequest req) {
		//�����ڵ�� ���õ� �׸��ڵ� �Ѿ��
		//db���� ���õ�  �����ڵ��� �׸��ڵ带 �ٲ�.
		
		String themeCode = req.getParameter("themeCode");
		String boardCode = req.getParameter("boardCode");
		
		try {
			
			boardService.updateBoard(boardCode, themeCode);
			
		} catch (Exception e) {
			 
			e.printStackTrace();
		}
	
		return "/a_articlelist";
	}

	
	
	
	
//	/*�Խñ� ������ư Ŭ���� ������ �̵�*/
//	@RequestMapping(value="/a_editarticle", method=RequestMethod.GET)
//	public String updateArticleAdminGet() {
//		return "/a_editarticle";
//	}
//	

//	
//	/*�Խñ� ����*/
//	
//
//	@RequestMapping(value="/a_editarticle", method=RequestMethod.POST)
//	public String updateArticleAdminPOST(ArticleDTO articleDTO) {
//		
//		return "/a_detailarticle";
//	}
//	

//	
//	/*�Խñ� ����*/
//	@RequestMapping(value="/a_articlelist", method=RequestMethod.POST)
//	public String deleteArticleAdmin(@RequestParam("articleCode") String articleCode, RedirectAttributes rda) {
//		return "redirect:/a_articlelist";
//	}
//	

//	
//	/*���/���������������� �Խñ� �߰�*/
//	@RequestMapping(value="/register", method=RequestMethod.POST)
//	public String addArticleAdmin() {
//		return "/a_detailarticle";
//	}
//	
//	/*ȸ������������ �Խñ� �߰�*/
//	@RequestMapping(value="/a_addarticle", method=RequestMethod.POST)
//	public String addArticleMem() {
//		return "/m_detailarticle";
//	}
//	
//	/*������ - ����ȭ�鿡�� ���� ���, ��ڸ�� ���
//	��� - ����ȭ�鿡�� ���� ���, �ֽŸ�� ���*/
//	@RequestMapping(value="/m_writearticle", method=RequestMethod.POST)
//	public String adminMain() {
//		return "/a_main";
//	}
	
	
	/**�׸������� ����ȭ������ ���ư�*/

	
	
	
	
}
