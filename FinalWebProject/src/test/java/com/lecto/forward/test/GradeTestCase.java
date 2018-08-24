package com.lecto.forward.test;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.sql.DataSource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.dto.GradeDTO;
import com.lecto.forward.persistence.GradeMapper;



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class GradeTestCase {
	
	@Autowired
	private DataSource ds;
	
	@Inject
	private GradeMapper mapper;
	
	@Test
	public void testConection()throws Exception{
		try{
			Connection con = ds.getConnection();
					
			System.out.println(con);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	

	@Test
	public void testAddGradeParam(){
		GradeDTO gradeDTO = new GradeDTO(11, "testGrade", 90, "bo1");
		try{
			mapper.addGradeParam(gradeDTO);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	/*private int gradeNum;
	private String gradeName;
	private int articleCount;
	private String boardCode;*/
	
	@Test
	public void testAddGradeParams() {
		List<GradeDTO> dtos = new ArrayList<GradeDTO>();
		dtos.add(new GradeDTO(7, "gd1", 10, "bo1"));
		dtos.add(new GradeDTO(9, "gd2", 10, "bo1"));
		try{
			mapper.addGradeParams(dtos);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	//(@Param("gradeNum") int gradeNum, @Param("newGradeName") String newGradeName,
	//@Param("newArticleCount")int newArticleCount, @Param("boardCode") String boardCode)
	@Test
	public void updateUseGradeCodeAndNumTest() {
		try {
			mapper.updateUseGradeCodeAndNum(7 ,"gDragon1", 100, "bo1");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//(@Param("gradeNum") int gradeNum, @Param("newArticleCount")int newArticleCount, @Param("boardCode") String boardCode)
	@Test
	public void updateArticleCountTest() {
		try {
			mapper.updateArticleCount(9, 10000, "bo1");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	//(@Param("gradeNum") int gradeNum, @Param("newGradeName")String newGradeName,
	//@Param("boardCode")String boardCode)
	@Test
	public void updateGradeName() {
		try {
			mapper.updateGradeName(9, "newGradeName", "bo1");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//updateGrade(GradeDTO gradeDTO)
	/*private int gradeNum; private String gradeName; private int articleCount; private String boardCode;*/
	@Test
	public void updateGrade() {
		try {
			mapper.updateGrade(new GradeDTO(100, "updatGradeName", 3, "bo1"));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//deleteBoardParam(String boardCode)
	@Test
	public void deleteBoardParam() {
		try {
			mapper.deleteBoardParam("bo1");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//deleteGradeParams(String boardCode, int gradeNum)
	@Test
	public void deleteGradeParams() {
		try {
			mapper.deleteGradeParams("bo1", 9);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//deleteGradeParam(GradeDTO gradeDTO)
	@Test
	public void deleteGradeParam() {
		try {
			mapper.deleteGradeParam(new GradeDTO(11, "testGrade", 90, "bo1"));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//deleteGradeDtoArray(List<GradeDTO> grades)
	@Test
	public void deleteGradeDtoArray() {
		List<GradeDTO> grades = new ArrayList<GradeDTO>();
		try {
			grades.add(new GradeDTO(7, "ad1", 10, "bo1"));
			grades.add(new GradeDTO(11, "testGrade", 90, "bo1"));
			mapper.deleteGradeDtoArray(grades);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	//searchUseNameNCode(String gradeName, String boardCode)
	@Test
	public void searchUseNameAndCode() {
		GradeDTO dto = mapper.searchUseNameAndCode("testGrade","bo1");
	}
	
	//List<GradeDTO> searchUseCode(String boardCode)
	@Test
	public void searchUseCode() {
		mapper.searchUseCode("bo1");
	}
	
	//searchUseDto(GradeDTO gradeDTO)
	@Test
	public void searchUseDto() {
		mapper.searchUseDto(new GradeDTO(11, "testGrade", 90, "bo1"));
	}
	
	//searchGradeDtos(GradeDTO[] grade)
	@Test
	public void searchGradeDtos() {
		List<GradeDTO> grades = new ArrayList<GradeDTO>();
		try {
			grades.add(new GradeDTO(7, "ad1", 10, "bo1"));
			grades.add(new GradeDTO(11, "testGrade", 90, "bo1"));
		mapper.searchGradeDtos(grades);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
