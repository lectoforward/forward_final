package com.lecto.forward.test;

import java.util.ArrayList;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.persistence.ArticleViewMapper;
import com.lecto.forward.vo.ArticleVO;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class ArticleViewTest {

	@Autowired
	private ArticleViewMapper mapper;
	
	////////////////////////////////////////
	@Test
	public void searchArticleTest() {
		try {
			mapper.searchArticle("bo2");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void searchArticleKeywordTest() {
		try {
			mapper.searchArticleKeyword("bo2","2","오");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	///////////////////////////////////////
	@Test
	public void searchNoticeTest() {
		try {
			mapper.searchNotice(false);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	////////////////////////////////////////
	@Test
	public void searchArticleViewTest() {
		ArticleVO vo = new ArticleVO("bo2","aaa",0,"안녕","디지몬","ar1","2018-01-01",false,1);
		try {
			mapper.searchArticleView(vo);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	////////////////////////////////////
	@Test
	public void searchArticleViewsTest() {
		ArrayList<ArticleVO> list = new ArrayList<ArticleVO>();
		ArticleVO vo = new ArticleVO("bo2","aaa",0,"안녕","디지몬","ar1","2018-01-01",false,1);
		ArticleVO vo1 = new ArticleVO("bo2","aaa",0,"잘가","디지몬","ar2","2018-01-01",false,0);
		list.add(vo);
		list.add(vo1);
		try {
			mapper.searchArticleViews(list);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
