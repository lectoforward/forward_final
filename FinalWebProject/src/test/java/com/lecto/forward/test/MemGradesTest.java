package com.lecto.forward.test;

import java.util.ArrayList;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.dto.MemberGradesDTO;
import com.lecto.forward.persistence.MemberGradesMapper;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class MemGradesTest {

	@Autowired
	private MemberGradesMapper memberGradesMapper;
	
	@Test 
	public void addMemberGradesDTO(){
		try {
			MemberGradesDTO dto = new MemberGradesDTO("mg10", "bo1", "全辨悼",1);
			memberGradesMapper.addMemberGradesDTO(dto);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void addMemberGrades(){
		ArrayList<MemberGradesDTO> list = new ArrayList<MemberGradesDTO>();
		MemberGradesDTO d1 = new MemberGradesDTO("mg12", "bo1","全辨悼",1);
		MemberGradesDTO d2 = new MemberGradesDTO("mg13","bo2", "碍龋悼",2);
		MemberGradesDTO d3 = new MemberGradesDTO("mg11","bo1","全农",2);
		MemberGradesDTO d4 = new MemberGradesDTO("mg14","bo1","全农",3);
		list.add(d1);
		list.add(d2);
		list.add(d3);
		list.add(d4);
		try {
			memberGradesMapper.addMemberGrades(list);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void updateMemberGradesDTO(){
		try {
			MemberGradesDTO dto = new MemberGradesDTO("mg12", "bo3", "辫悼宽", 2);
			memberGradesMapper.updateMemberGradesDTO(dto);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Test
	public void updateMemberGrades(){
		ArrayList<MemberGradesDTO> list = new ArrayList<MemberGradesDTO>();
		MemberGradesDTO d1 = new MemberGradesDTO("mg10","bo1","捞鉴脚", 3);
		MemberGradesDTO d2 = new MemberGradesDTO("mg13","bo2","全农",1);
		list.add(d1);
		list.add(d2);
		try{
			memberGradesMapper.updateMemberGrades(list);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	@Test
	public void searchToBoardCode(){
		try {
			memberGradesMapper.searchToBoardCode("bo1");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}     
	}
	
	@Test
	public void searchToMemberId(){
		try {
			memberGradesMapper.searchToMemberId("全农");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void searchBoardGrades(){
		try {
			memberGradesMapper.searchBoardGrades("bo1", "全农");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void searchMemberIdGrades(){
		try {
			memberGradesMapper.searchMemberIdGrades("bo3", 2);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Test
	public void searchBoardMemberGrade(){
		try {
			 memberGradesMapper.searchBoardMemberGrades("mg1");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void deleteMemberId(){
		 try {
			memberGradesMapper.deleteMemberId("全农");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void deleteBoardCode(){
		 try {
			memberGradesMapper.deleteBoardCode("bo3");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
