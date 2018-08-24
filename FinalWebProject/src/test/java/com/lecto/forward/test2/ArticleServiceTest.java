package com.lecto.forward.test2;

import static org.junit.Assert.fail;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.dto.ArticleDTO;
import com.lecto.forward.service.ArticleService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class ArticleServiceTest {

	@Autowired
	ArticleService service;
	
	@Test
	public void test() {
		fail("Not yet implemented");
	}
	
	@Test
	public void addArtittcleTest() {
		service.addArticle(new ArticleDTO(service.generateCode(), 3, "articleTitle넣엇어??bo3", "게시글 내용 넣엇어??bo3", false, "180822", "bo2", "aaa"));
	}
	
	@Test
	public void updateArticleTest() {
		service.updateArticle(new ArticleDTO("ar10", 3, "articleTitle넣엇어?", "게시글 내용 넣엇어?", false, "180822", "bo1", "choey91"));
	}

	@Test
	public void deleteArticleTest() {
		service.deleteArticle("ar10");
	}
	
	@Test
	public void deleteArticlesTest() {
		service.deleteArticles(new String[]{"ar12", "ar14"});
		
	}
	
	
	@Test
	public void generateCodeTest() {
		System.out.println(service.generateCode());
	}
	
	@Test
	public void searchArticleTest() {
		service.searchArticle("bo2");
	}
	
	@Test
	public void searchArticleTest2() {
		service.searchArticle("ar16", 1);
	}
	
	@Test
	public void searchArticleTest3() {
		service.searchArticle("bo1", "2", "넣엇어");
	}
}
