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
	
	

	/*boardCode를 이용해 게시판별 게시글목록을 가져옴*/
	@RequestMapping(value="/m_board", method=RequestMethod.GET)
	public String articleListMem(@RequestParam("boardCode") String boardCode, @RequestParam("page") int page, Model model, Criteria cri) {   
		System.out.println("여기여기");
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
	
	/* 글쓰기 페이지로 이동 */
	@RequestMapping(value="/m_addarticle", method=RequestMethod.GET)
	public String addArticleMemGET(String boardCode, Model model) {
		/*model.addAttribute("articles", articleService.searchArticle(boardCode));*/
		
		try {
			boardCode="bo2";
			model.addAttribute("boardCode",boardCode);
			BoardDTO boardDTO = boardService.searchBoardCode(boardCode);
			String themeCode = boardDTO.getThemeCode();
			System.out.println("글쓰기"+themeCode);
			model.addAttribute("themeCode",themeCode);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return "/m_writearticle";
	}
	
	/* 글 등록 */
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
	
	
	/*articleCode를 이용해 게시글 클릭후 상세보기에 사용할 데이터를 가져옴*/
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
	
	/**게시글 자세히 읽기 page처리*/
	@RequestMapping(value="/m_detailarticle", method=RequestMethod.GET)
	public ModelAndView read(@RequestParam("boardCode") String boardCode,@RequestParam("articleCode")String articleCode,
			@RequestParam("page") int page, Model model, @ModelAttribute("cri")Criteria cri) {
		//articleCode로 boardCode를 찾아옴
		//page, perPageNum, 
		System.out.println("여기여기여기");
		System.out.println("boardCode"+boardCode);
		
		ModelAndView mav = new ModelAndView();
		
		mav.setViewName("/m_detailarticle");
		
		ArticleVO articleVO = articleService.searchArticle(articleCode, 1);
		

		if(articleVO != null) {
			//조회수 처리
			mav.addObject("articleVO", articleVO);		
			BoardDTO boardDTO;
			try {
				System.out.println("boardCode2"+boardCode);
				boardDTO = boardService.searchBoardCode(boardCode);
				System.out.println(boardDTO.getBoardCode());
				String themeCode = boardDTO.getThemeCode();
				System.out.println("테마코드는"+themeCode);
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
	@RequestMapping(value="/a_detailarticle", method=RequestMethod.GET)
	public String readArticleAdmin(String articleCode, String boardCode, Model model) {
		/*System.out.println("상세상세상세상세상세"+articleCode);
		model.addAttribute("boardCode",boardCode);
		model.addAttribute("detail", articleService.searchArticle(articleCode, 1));*/
		return "/a_detailarticle";
	}
	
	
	/*boardCode, searchWay, keyword를 가지고 게시글을 검색*/
//	@RequestMapping(value="/a_articlelist", method=RequestMethod.GET)
//	public String searchArticleAdmin(@RequestParam("boardCode") String boardCode, @RequestParam("searchWay") String searchWay, @RequestParam("keyword") String keyword, Model model) {		
//		model.addAttribute("list", articleService.searchArticle(boardCode, searchWay, keyword));
//		return "/a_articlelist";
//	}
	

	
	/*boardCode를 이용해 게시판별 게시글목록을 가져옴*/
	@RequestMapping(value="/a_articlelist", method=RequestMethod.GET)
	public String articleListAdmin(Model model) {
		model.addAttribute("list", articleService.searchArticle("bo2"));
		return "/a_articlelist";
		
	}
	
	
	
	/**게시판수정에서 테마변경 버튼 누른경우 GET방식 호출*/
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
	
	/**테마수정 화면에서 테마를 선택하고 테마변경 확인버튼을 누른경우 게시판으로 돌아감*/
	@RequestMapping(value="/a_theme", method=RequestMethod.POST)
	public String changeThemePost(Model model,HttpServletRequest req) {
		//보드코드와 선택된 테마코드 넘어옴
		//db에서 선택된  보드코드의 테마코드를 바꿈.
		
		String themeCode = req.getParameter("themeCode");
		String boardCode = req.getParameter("boardCode");
		
		try {
			
			boardService.updateBoard(boardCode, themeCode);
			
		} catch (Exception e) {
			 
			e.printStackTrace();
		}
	
		return "/a_articlelist";
	}

	
	
	
	
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
	
	
	/**테마수정후 수정화면으로 돌아감*/

	
	
	
	
}
