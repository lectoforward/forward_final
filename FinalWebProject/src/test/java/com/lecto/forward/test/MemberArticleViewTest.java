package com.lecto.forward.test;

import java.util.ArrayList;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.persistence.MemberArticleViewMapper;
import com.lecto.forward.vo.MemberArticleVO;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class MemberArticleViewTest {
	
	@Autowired
	private MemberArticleViewMapper mavm;
	
	@Test
	public void searchNicknameArticleTest() {
		try {
			System.out.println(mavm.searchNicknameArticle("aaa"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void searchNicknameArticlesTest() {
		try {
			System.out.println(mavm.searchNicknameArticles("aaa"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void searchMemberIdArticleTest() {
		try {
			System.out.println(mavm.searchMemberIdArticle("aaa"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void searchMemberIdArticlesTest() {
		try {
			System.out.println(mavm.searchMemberIdArticles("aaa"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void searchArticleCntTest() {
		try {
			System.out.println(mavm.searchArticleCnt("자유게시판","aaa"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Test
	public void searchMemberArticleViewTest() {
		/*String memberId, String articleCode, String boardName, int articleHits,
		String articleContent, String articleTitle, boolean notice, String articleDate, int commentCnt,
		String memberNickname*/
		MemberArticleVO vo = new MemberArticleVO("aaa","ar1","자유게시판",0,"디지몬","안녕",false,"2018-01-01",1,"aaa");
		try {
			System.out.println(mavm.searchMemberArticleView(vo));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void searchMemberArticleViewsTest() {
		ArrayList<MemberArticleVO> list = new ArrayList<MemberArticleVO>();
		MemberArticleVO vo = new MemberArticleVO("aaa","ar1","자유게시판",0,"디지몬","안녕",false,"2018-01-01",1,"aaa");
		MemberArticleVO vo1 = new MemberArticleVO("aaa4","ar4","자유게시판",0,"예스","오아오",false,"2018-01-02",0,"aa4");
		list.add(vo);
		list.add(vo1);
		try {
			System.out.println(mavm.searchMemberArticleViews(list));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
