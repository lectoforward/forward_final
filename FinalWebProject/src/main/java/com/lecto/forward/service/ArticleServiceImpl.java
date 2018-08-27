package com.lecto.forward.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Service;

import com.lecto.forward.dto.ArticleDTO;
import com.lecto.forward.dto.Criteria;
import com.lecto.forward.persistence.ArticleMapper;
import com.lecto.forward.persistence.ArticleViewMapper;
import com.lecto.forward.vo.ArticleVO;

@Service
public class ArticleServiceImpl implements ArticleService{
	
	@Inject
	ArticleMapper articleMapper;
	
	@Inject
	ArticleViewMapper articleViewMapper;
	
	@Inject
	private SqlSessionFactory sqlSessionFactory;
	
	
	private static String namespace = "com.lecto.forward.persistence.ArticleViewMapper";
	
	public boolean addArticle(ArticleDTO articleDTO) {
		if(articleDTO ==null) {
			return false;
		}
		String code = generateCode();
		articleDTO.setArticleCode(code);
		try {
			articleMapper.addArticle(articleDTO);
		} catch (Exception e) {
			System.out.println("articleAdd�޼ҵ� ����");
			e.printStackTrace();
		}
		return true;
	}
	public boolean updateArticle(ArticleDTO articleDTO) {		
		if(articleDTO == null) {
			return false;
		}
		try {
			articleMapper.updateArticleParam(articleDTO);
		} catch (Exception e) {
			System.out.println("updateArticle�޼ҵ� ����");
			e.printStackTrace();
		}
		return true;
	}
	public boolean deleteArticle(String articleCode) {
		System.out.println("���� �żҵ� �Ա� �����޴�");
		if(articleCode==""||articleCode==null) {
			return false;
		}
		System.out.println("���� �żҵ� �����޴�");
		try {
			articleMapper.deleteArticleCode(articleCode);
		} catch (Exception e) {
			System.out.println("deleteArticle�޼ҵ� ����");
			e.printStackTrace();
		}
		return true;
	}
	
	/* articleCode���� �迭�� �޾� �ش��ϴ� article���� ���� */
	public boolean deleteArticles(String[] articleCodes) {
		if(articleCodes == null) {
			return false;
		}
		List<String> codeList = new ArrayList<String>();
		for(String articleCode:articleCodes) {
			codeList.add(articleCode);
		}
		try {
			articleMapper.deleteArticleCodes(codeList);
		} catch (Exception e) {
			System.out.println("deleteArticles�޼ҵ� ����!!");
			e.printStackTrace();
		}
		return true;
	}
	
	/* �˻� �� ��� */
	public List<ArticleVO> searchArticle(String boardCode, String searchWay, String keyword){
		List<ArticleVO> list = null;
		try {
			list = articleViewMapper.searchArticleKeyword(boardCode, searchWay, keyword);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	/* �ش� �Խ��ǿ� �ִ� ��� �Խñ� �������� */
	public List<ArticleVO> searchArticle(String boardCode) {
		List<ArticleVO> articles = null;
		try {
			articles = articleViewMapper.searchArticle(boardCode);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return articles;
	}
	/** �Խñ� �ڼ��� ���� �� �� ��� */
	public ArticleVO searchArticle(String articleCode, int flag) {
		ArticleVO vo = null;
		try {
			vo = articleViewMapper.searchArticleCode(articleCode);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return vo;
	}
	public String generateCode() {
		/* db���� ������ �ε� */
		Map<Integer,ArticleDTO> sortMap = new TreeMap<Integer, ArticleDTO>();
		List<ArticleDTO> list = null;
		String code = null;
		try {
			list = articleMapper.searchAllArticle();
		
			if(list.size() == 0 || list.isEmpty() || list == null) {
				code = "ar1";
			} else{
				for(ArticleDTO dto:list){
					dto.getArticleCode().substring(2);
			        int num = Integer.parseInt(dto.getArticleCode().substring(2));
					sortMap.put(num, dto);
				}
				int last = ((TreeMap<Integer, ArticleDTO>) sortMap).lastKey();	
	
				code = "ar" + String.valueOf(last+1);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return code;
	}
	
	
	@Override
	public List<ArticleVO> listAll(String boardCode) throws Exception{
		

		return null;
	}
	
	/*@Override
	public Map<Object,Object> listPage(String boardCode, int page) throws Exception{
		System.out.println("aa");
		SqlSession sqlSession = sqlSessionFactory.openSession();
		if(page<=0) {
			page = 1;
		}
		
		page = (page-1)*10;
		System.out.println(namespace);
		List<ArticleVO> listResult = articleViewMapper.listPage(boardCode, page);
		System.out.println(sqlSession.selectList(namespace+boardCode,page).size());
		
		sqlSession.selectMap(namespace+".listPage", page, boardCode);
		
		 return null;
	}*/
	
	@Override
	public List<ArticleVO> listCriteria(Criteria cri) throws Exception{
		/*SqlSession sqlSession = sqlSessionFactory.openSession();*/
		/*return sqlSession.selectList(namespace+".listCriteria",cri);*/
		
		return articleViewMapper.listCriteria(cri);
		 
	}
	
}
