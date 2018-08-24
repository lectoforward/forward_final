package com.lecto.forward.test2;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.dto.BoardDTO;
import com.lecto.forward.dto.GradeDTO;
import com.lecto.forward.dto.MemberGradesDTO;
import com.lecto.forward.service.BoardService;
import com.lecto.forward.vo.BoardSearchVO;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class BoardSSSTest {

	@Autowired
	private BoardService boardService;
	
	@Test
	public void test1() {
		BoardDTO dt = new BoardDTO("자유자유","bo5", "1일", "th1");
		try {
			boardService.addBoard(dt);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void test2() {
		List<GradeDTO> list =new ArrayList<GradeDTO>();
		GradeDTO gd = new GradeDTO(1,"a",0,"bo5");
		GradeDTO gd2 = new GradeDTO(2,"b",2,"bo5");
		GradeDTO gd3 = new GradeDTO(3,"c",3,"bo5");
		list.add(gd);
		list.add(gd2);
		list.add(gd3);
		try {
			boardService.addGrade(list);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void test3() {
		MemberGradesDTO mt = new MemberGradesDTO("mg55","bo1","동동",1);
		
		try {
			boardService.addMemberGrades(mt);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void test4() {
		BoardDTO board = new BoardDTO("bo5", "sss", "1일", "th1");
		List<GradeDTO> grades = new ArrayList<GradeDTO>();
		GradeDTO gd = new GradeDTO(1,"브론즈",1,"bo5");
		GradeDTO gd2 = new GradeDTO(2,"실버",5,"bo5");
		GradeDTO gd3 = new GradeDTO(3,"골드",10,"bo5");
		grades.add(gd);
		grades.add(gd2);
		grades.add(gd3);
		try {
			boardService.updateBoard(board ,grades);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void searchBoard() {
			try {
				List<BoardSearchVO> list = boardService.searchBoard();
				System.out.println(list.toString());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}

//	@Test
//	public void searchBoardWay() {
//			String searchWay="게시판명";
//			String keyword="자유게시판";
//			try {
//				BoardSearchVO v = boardService.searchBoard(searchWay, keyword);
//				System.out.println(v);
//			} catch (Exception e) {
//				System.out.println("search 오류");
//			}
//	}
}
