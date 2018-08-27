package com.lecto.forward.test2;

import java.util.List;

import javax.inject.Inject;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.dto.Criteria;
import com.lecto.forward.service.ArticleService;
import com.lecto.forward.vo.ArticleVO;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})


public class PageTest {

	@Inject
	ArticleService articleService;
	
	
	
/*	@Test
	public void testListPage()throws Exception{
		
		int page = 0;
		List<List<ArticleVO>> list = articleService.listPage("bo2", page);
		
		List<ArticleVO> resultList = list.get(0);
		
		
		
		
		for(ArticleVO articleVO : resultList) {
			
			
			System.out.println(articleVO.getArticleTitle());
		}
	}*/
	
	@Test
	public void testListCriteria()throws Exception{
		Criteria cri = new Criteria();
		cri.setPage(0);
		cri.setPerPageNum(10);
		cri.setBoardCode("bo2");
		
		List<ArticleVO> list = articleService.listCriteria(cri);
		
		for(ArticleVO articleVO : list) {
			System.out.println(articleVO.getArticleTitle());
		}
		
		
		
		
	}

}
