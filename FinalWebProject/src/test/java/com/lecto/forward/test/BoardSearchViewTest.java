package com.lecto.forward.test;

import java.util.ArrayList;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.persistence.BoardSearchViewMapper;
import com.lecto.forward.vo.BoardSearchVO;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class BoardSearchViewTest {

	@Autowired
	private BoardSearchViewMapper boardSearchViewMapper;
	/////////////////////////////////////////////////////////////
	@Test
	public void searchBoardNameTest() {
		try {
			System.out.println(boardSearchViewMapper.searchBoardName("문의게시판"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	////////////////////////////////////////////////////////////
	@Test
	public void searchBoardSearchViewTest() {
		BoardSearchVO vo = new BoardSearchVO("aa2", "admin","블랙","공지게시판");
		try {
			System.out.println(boardSearchViewMapper.searchBoardSearchView(vo));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	/////////////////////////////////////////////////////////////
	@Test
	public void searchBoardSearchViewsTest() {
		ArrayList<BoardSearchVO> list = new ArrayList<BoardSearchVO>();
		BoardSearchVO vo = new BoardSearchVO("aa1","admin","블랙","공지게시판");
		BoardSearchVO vo1 = new BoardSearchVO("aa3","manager1","블랙","자유게시판");
		list.add(vo);
		list.add(vo1);
		try {
			System.out.println(boardSearchViewMapper.searchBoardSearchViews(list));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	////////////////////////////////////////////
	@Test
	public void searchMemberIdTest() {
		try {
			System.out.println(boardSearchViewMapper.searchMemberId("admin"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	//////////////////////////////////////////////
	@Test
	public void searchBoardSearchViewAllTest() {
		try {
			System.out.println(boardSearchViewMapper.searchBoardSearchViewAll());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
