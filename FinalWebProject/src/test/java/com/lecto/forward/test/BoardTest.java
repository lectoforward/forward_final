package com.lecto.forward.test;

import java.util.ArrayList;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.dto.BoardDTO;
import com.lecto.forward.persistence.BoardMapper;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class BoardTest {

	@Autowired
	private BoardMapper boardMapper;
	
	@Test
	public void addBoardDTO() throws Exception {
		BoardDTO bt = new BoardDTO();
		bt.setBoardCode("bo100");
		bt.setBoardName("되냐");
		bt.setGradeUpDate("1일");
		bt.setThemeCode("th1");
		boardMapper.addBoardDTO(bt);
	}
	
	@Test
	public void addBoards() throws Exception{
		
		ArrayList<BoardDTO> list = new ArrayList<BoardDTO>();
		BoardDTO d1 = new BoardDTO("bo10","축구","1일","th1");
		BoardDTO d2 = new BoardDTO("bo9","야구", "1일","th1");
		list.add(d1);
		list.add(d2);
		
		boardMapper.addBoards(list);
	}

	@Test
	public void updateGradeUpdate() throws Exception{
		String str = "3일";
		boardMapper.updateGradeUpdate("bo10",str);
	}
	
	@Test
	public void updateBoardName() throws Exception{
		String boardCode2 ="bo100";
		String boardName2 ="김김김";
		boardMapper.updateBoardName(boardCode2, boardName2);
		
	}
	
	@Test
	public void updateThemeCode() throws Exception{
		String boardCode2 ="bo100";
		String themeCode2 ="th2";
		boardMapper.updateThemeCode(boardCode2, themeCode2);
	}
	
	
	@Test
	public void updateBoard()  throws Exception{
		BoardDTO d = new BoardDTO("bo100","아아아","5일","th2");
		boardMapper.updateBoard(d);
	}

	@Test
	public void searchBoardAll() throws Exception{
		 boardMapper.searchBoardAll();
	}
	
	@Test
	public void searchBoardName() throws Exception{
		 boardMapper.searchBoardName("야구");
	}
	
	@Test 
	public void searchBoardCode() throws Exception{
		 boardMapper.searchBoardCode("bo10");
	}
	
	@Test
	public void searchThemeCode() throws Exception{
		 boardMapper.searchThemeCode("th1");
	}
	
	@Test
	public void searchGradeUpdate() throws Exception{
		 boardMapper.searchGradeUpdate("1일");
	}
	
	@Test 
	public void searchBoard() throws Exception{
		 boardMapper.searchBoard(new BoardDTO("bo1","공지게시판","1일", "th1"));
	}
	
	@Test 
	public void searchBoards() throws Exception{
		ArrayList<BoardDTO> list = new ArrayList<BoardDTO>();
		BoardDTO d = new BoardDTO("bo10","축구","1일", "th1");
		BoardDTO f = new BoardDTO("bo100","되냐","1일", "th1");
		list.add(d);
		list.add(f);
		boardMapper.searchBoards(list);
	}
	
	
	@Test
	public void deleteBoard() throws Exception{
		 boardMapper.deleteBoard("bo100");
	}

	@Test
	public void deleteBoards() throws Exception{
		ArrayList<String> list = new ArrayList<String>();
		list.add("bo10");
		list.add("bo100");
		boardMapper.deleteBoards(list);
	}
}
