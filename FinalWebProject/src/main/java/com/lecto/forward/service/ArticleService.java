package com.lecto.forward.service;

import java.util.List;

import com.lecto.forward.dto.ArticleDTO;
import com.lecto.forward.dto.Criteria;
import com.lecto.forward.vo.ArticleVO;

public interface ArticleService {
	public boolean addArticle(ArticleDTO articleDTO);
	public boolean updateArticle(ArticleDTO articleDTO);
	public boolean deleteArticle(String articleCode);
	public boolean deleteArticles(String[] articleCodes);
	public List<ArticleVO> searchArticle(String boardCode, String searchWay, String keyword);
	public List<ArticleVO> searchArticle(String boardCode);
	public ArticleVO searchArticle(String articleCode, int flag);
	//public ArticleDTO searchArticle(String articleCode);
	public String generateCode();
	public List<ArticleVO> listAll(String boardCode) throws Exception;
	/*public Map<Object,Object> listPage(String boardCode, int page) throws Exception;*/
	public List<ArticleVO> listCriteria(Criteria cr) throws Exception;
}
