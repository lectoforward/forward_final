package com.lecto.forward.test;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.persistence.BoardMemberListViewMapper;
import com.lecto.forward.vo.BoardMemberListVO;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class BoardMemberListViewTest {

	@Autowired
	private BoardMemberListViewMapper mapper;
	
	/*@Test
	public void searchBoardCodetest() {
		try {
			List<BoardMemberListVO> list = mapper.searchBoardCode("bo2");
			for(BoardMemberListVO vo:list) {
				System.out.println(vo.toString());
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void searchBoardNametest() {
		try {
			List<BoardMemberListVO> list = mapper.searchBoardName("자유게시판");
			for(BoardMemberListVO vo:list) {
				System.out.println(vo.toString());
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}*/
	
/*	@Test
	public void searchBCMemberIdtest() {
		try {
			BoardMemberListVO vo = mapper.searchBCMemberId("bo2", "aaa");
				System.out.println(vo.toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void searchBNMemberIdtest() {
		try {
			BoardMemberListVO vo = mapper.searchBNMemberId("자유게시판","aaa");

				System.out.println(vo.toString());

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void searchBCMemberNicknametest() {
		try {
			BoardMemberListVO vo = mapper.searchBCMemberNickname("bo2", "aaa");
				System.out.println(vo.toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void searchBNMemberNicknametest() {
		try {
			BoardMemberListVO vo = mapper.searchBNMemberNickname("자유게시판","aaa");
				System.out.println(vo.toString());

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}*/
	
	@Test
	public void searchBCGradeNametest() {
		try {
			List<BoardMemberListVO> list = mapper.searchBCGradeName("bo2","가");
			for(BoardMemberListVO vo:list) {
				System.out.println(vo.toString());
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
/*	@Test
	public void searchBNGradeNametest() {
		try {
			List<BoardMemberListVO> list = mapper.searchBNGradeName("자유게시판","가");
			for(BoardMemberListVO vo:list) {
				System.out.println(vo.toString());
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}*/

}
