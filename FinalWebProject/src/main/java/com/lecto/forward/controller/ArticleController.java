package com.lecto.forward.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.lecto.forward.dto.ArticleDTO;
import com.lecto.forward.service.ArticleService;
import com.lecto.forward.vo.ArticleVO;


@Controller
public class ArticleController{
	
	@Autowired
	ArticleService articleService;

	/*boardCode를 이용해 게시판별 게시글목록을 가져옴*/
	@RequestMapping(value="/m_board", method=RequestMethod.GET)
	public String articleListMem(@Param("boardCode")String boardCode, Model model) {   
		model.addAttribute("boardCode", boardCode);
		model.addAttribute("articles", articleService.searchArticle(boardCode));		
		return "/m_board";
	}
	
	/* 글쓰기 페이지로 이동 */
	@RequestMapping(value="/m_addarticle", method=RequestMethod.GET)
	public String addArticleMemGET(String boardCode, Model model) {
		/*model.addAttribute("articles", articleService.searchArticle(boardCode));*/
		model.addAttribute("boardCode",boardCode);
		return "/m_writearticle";
	}
	
	/* 글 등록 */
	@RequestMapping(value="/m_addarticle", method=RequestMethod.POST)
	public String addArticleMemPOST(String boardCode, String articleTitle, String content, Model model, HttpSession session) {
		/*String articleCode int articleHits String articleTitle String articleContent boolean notice String
		articleDate String boardCode */
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
	
	
	/*articleCode를 이용해 게시글 클릭후 상세보기에 사용할 데이터를 가져옴*/
	@RequestMapping(value="/m_detailarticle", method=RequestMethod.GET)
	public String readArticleMem(@RequestParam("articleCode")String articleCode, Model model) {
		
		model.addAttribute("articleVO", articleService.searchArticle(articleCode, 1));
		
		return "/m_detailarticle";	
	}
	
	
	/*게시글 수정버튼 클릭시 페이지 이동*/
//	@RequestMapping(value="/m_editarticle", method=RequestMethod.GET)
//	public String updateArticleMemGet() {
//		return "/m_editarticle";		
//	}
	
//	/*게시글 수정*/
//	@RequestMapping(value="/m_editarticle", method=RequestMethod.POST)
//	public String updateArticleMemPOST() {
//		return "/m_detailarticle";
//	}
	
	/*게시글 삭제*/
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
			System.out.println("삭제 완료");
		}
		
		articles = articleService.searchArticle(boardCode);
		model.addAttribute("boardCode", boardCode);
		model.addAttribute("articles", articles);
		return "redirect:/m_board/boardCode?"+boardCode;
	}
	
	
	/*boardCode, searchWay, keyword를 가지고 게시글을 검색*/
//	@RequestMapping(value="/m_board", method=RequestMethod.GET)
//	public String searchArticleMem(@RequestParam("boardCode") String boardCode, @RequestParam("searchWay") String searchWay, @RequestParam("keyword") String keyword, Model model) {
//		model.addAttribute("list", articleService.searchArticle(boardCode, searchWay, keyword));
//		return "/m_board";
//	}
	

	

	
	/*articleCode를 이용해 게시글 클릭후 상세보기에 사용할 데이터를 가져옴*/
//	@RequestMapping(value="/a_detailarticle", method=RequestMethod.GET)
//	public String readArticleAdmin(String articleCode, String boardCode, Model model) {
//		System.out.println("상세상세상세상세상세"+articleCode);
//		model.addAttribute("boardCode",boardCode);
//		model.addAttribute("detail", articleService.searchArticle(articleCode, 1));
//		return "/a_detailarticle";
//	}
	
	
	/*boardCode, searchWay, keyword를 가지고 게시글을 검색*/
//	@RequestMapping(value="/a_articlelist", method=RequestMethod.GET)
//	public String searchArticleAdmin(@RequestParam("boardCode") String boardCode, @RequestParam("searchWay") String searchWay, @RequestParam("keyword") String keyword, Model model) {		
//		model.addAttribute("list", articleService.searchArticle(boardCode, searchWay, keyword));
//		return "/a_articlelist";
//	}
	

	
	/*boardCode를 이용해 게시판별 게시글목록을 가져옴*/
//	@RequestMapping(value="/a_articlelist", method=RequestMethod.GET)
//	public String articleListAdmin(@RequestParam("boardCode") String boardCode, Model model) {
//		model.addAttribute("list", articleService.searchArticle(boardCode));
//		return "/a_articlelist";
//		
//	}
	


//	

//	
//	/*게시글 수정버튼 클릭시 페이지 이동*/
//	@RequestMapping(value="/a_editarticle", method=RequestMethod.GET)
//	public String updateArticleAdminGet() {
//		return "/a_editarticle";
//	}
//	

//	
//	/*게시글 수정*/
//	
//
//	@RequestMapping(value="/a_editarticle", method=RequestMethod.POST)
//	public String updateArticleAdminPOST(ArticleDTO articleDTO) {
//		
//		return "/a_detailarticle";
//	}
//	

//	
//	/*게시글 삭제*/
//	@RequestMapping(value="/a_articlelist", method=RequestMethod.POST)
//	public String deleteArticleAdmin(@RequestParam("articleCode") String articleCode, RedirectAttributes rda) {
//		return "redirect:/a_articlelist";
//	}
//	

//	
//	/*운영자/관리자페이지에서 게시글 추가*/
//	@RequestMapping(value="/register", method=RequestMethod.POST)
//	public String addArticleAdmin() {
//		return "/a_detailarticle";
//	}
//	
//	/*회원페이지에서 게시글 추가*/
//	@RequestMapping(value="/a_addarticle", method=RequestMethod.POST)
//	public String addArticleMem() {
//		return "/m_detailarticle";
//	}
//	
//	/*관리자 - 메인화면에서 공지 목록, 운영자목록 출력
//	운영자 - 메인화면에서 공지 목록, 최신목록 출력*/
//	@RequestMapping(value="/m_writearticle", method=RequestMethod.POST)
//	public String adminMain() {
//		return "/a_main";
//	}
}
