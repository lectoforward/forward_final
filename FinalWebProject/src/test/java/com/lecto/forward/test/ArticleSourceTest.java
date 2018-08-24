package com.lecto.forward.test;


import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.LoggerFactory;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.dto.ArticleDTO;
import com.lecto.forward.persistence.ArticleMapper;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})

public class ArticleSourceTest {
	@Inject
	private DataSource ds;
	
	
	private static org.slf4j.Logger logger = LoggerFactory.getLogger(ArticleSourceTest.class);
	
	@Inject
	private ArticleMapper dao;
	
	@Inject
	private SqlSessionFactory sqlFactory;
	
	
	
	@Test
	public void test() {
		assert(true);
	}
	
	@Test
	public void testSession()throws Exception{
		try(SqlSession session = sqlFactory.openSession()) {
			System.out.println(session);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
	@Test
	public void testConnection()throws Exception{
		try(Connection con = ds.getConnection()) {
			System.out.println(con);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	
	@Test
	public void testAddArticle() throws Exception{
		ArticleDTO article = new ArticleDTO();
		article.setArticleCode("ar44");
		article.setArticleContent("content5");
		article.setArticleDate("2018-08-20");
		article.setArticleHits(3);
		article.setArticleTitle("title5");
		article.setBoardCode("bo3");
		article.setMemberId("aaa");
	
		article.setNotice(true);
		
		dao.addArticle(article);
	}
	
	@Test
	public void testUpdateArticleParams() throws Exception{
		dao.updateArticleParams("ar1", 3, "제목2", "내용2", false, "2018-08-20", "bo2", "song1");
		
	}
	
	@Test
	public void testUpdateArticleParam() throws Exception {
		/*ArticleDTO article = new ArticleDTO("ar3",1,"제목3", "내용3", false, "2018-08-21", "bo3", "song3");*/
		ArticleDTO article = new ArticleDTO("ar1",0,"제목11", "내용11", true, "2018-07-21", "bo11", "song11");
		dao.updateArticleParam(article);
		
	}
	
	@Test
	public void testUpdateTitle() throws Exception{
		
		dao.updateTitle("ar1", "2018-08-22", "새로운글입니다.");
	}
	
	@Test
	public void testUpdateContent() throws Exception{
		dao.updateContent("ar3", "2018-08-23", "새로운내용입니다.");
	}	
	
	@Test
	public void testUpdateHits() throws Exception{
		dao.updateHits("ar1", 100);
		
	}

	@Test
	public void testUpdateNotice() throws Exception{
		dao.updateNotice("ar1", "2018-08-24", false);
	}
	
	@Test
	public void testUpdateDate() throws Exception{
		dao.updateDate("ar1", "2018-12-23");
	}
	
	/*@Test
	public void testDeleteArticleCode() throws Exception{
		int result;
		
		result = dao.deleteArticleCode("ar2");
		System.out.println(result);		
	}
	
	@Test
	public void testDeleteArticleMemberId() throws Exception{
		dao.deleteArticleMemberId("bbb123");
		
	}

	@Test
	public void testDeleteArticleParam() throws Exception{
		ArticleDTO article = new ArticleDTO("ar4",0,"제목11", "내용11", true, "2018-07-21", "bo11", "song11");
		
		dao.deleteArticleParam(article);
	}
	
	
	//fail
	@Test
	public void testDeleteArticleParams() throws Exception{
		int result;
		List<ArticleDTO> articles = new ArrayList<ArticleDTO>();
		articles.add(new ArticleDTO("ar2",1,"제목11","내용11", true, "2018-07-21", "bo11", "song123"));
		articles.add(new ArticleDTO("ar3",1,"제목11","내용11", true, "2018-07-21", "bo11", "song123"));
		result = dao.deleteArticleParams(articles);
		System.out.println(result);
		
	}*/
	
	@Test
	public void testSearchTitle()throws Exception{
		List<ArticleDTO> result;
		result = dao.searchTitle("title5");
		
		for(ArticleDTO article:result) {
			System.out.println(article.getArticleCode());
		}
		
		
	}
	
	@Test
	public void testSearchKeyword() throws Exception{
		List<ArticleDTO> result;
		/*result = dao.searchKeyword("title", "title5");*/
		/*result = dao.searchKeyword("content", "content5");*/
		result = dao.searchKeyword("content", "content");
		
		
		for(ArticleDTO article:result) {
			System.out.println(article.getArticleCode());
		}
	}
	
	@Test
	public void testSearchDate() throws Exception{
		List<ArticleDTO> result;
		result = dao.searchDate("2018-08-20", "2019-08-01");
		
		for(ArticleDTO article:result) {
			System.out.println(article.getArticleCode());
		}
	
	}
	
	@Test
	public void testSearchId() throws Exception{
		List<ArticleDTO> result;
		
		result = dao.searchId("bbb123");
		
		for(ArticleDTO article:result) {
			System.out.println(article.getArticleCode());
		}
	}
	
	@Test
	public void testSearchBoardCode() throws Exception{
		List<ArticleDTO> result;
		result = dao.searchBoardCode("b3");
		for(ArticleDTO article:result) {
			System.out.println(article.getArticleCode());
		}
		
	}
	
	@Test
	public void testSearchArticleCode() throws Exception{
		ArticleDTO result;
		result = dao.searchArticleCode("a1");
		System.out.println(result.getArticleTitle());
	}
	
	@Test
	public void testSearchArticleParam() throws Exception{
		ArticleDTO result;
		ArticleDTO article = new ArticleDTO("ar5",1,"제목11","내용11", true, "2018-07-21", "bo11", "song123");
		result = dao.searchArticleParam(article);
		
	}
	
	@Test
	public void testSearchArticleParams() throws Exception{
		List<ArticleDTO> result;
		List<ArticleDTO> articles = new ArrayList<ArticleDTO>();
		articles.add(new ArticleDTO("ar2",1,"제목11","내용11", true, "2018-07-21", "bo11", "song123"));
		articles.add(new ArticleDTO("ar3",1,"제목11","내용11", true, "2018-07-21", "bo11", "song123"));
		result = dao.searchArticleParams(articles);
		
		for(ArticleDTO article:result) {
			System.out.println(article.getArticleCode());
		}
		
		
	}
	
	
}
