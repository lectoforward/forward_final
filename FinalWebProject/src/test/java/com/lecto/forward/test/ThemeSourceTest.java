package com.lecto.forward.test;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.LoggerFactory;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.dto.ThemeDTO;
import com.lecto.forward.persistence.ThemeMapper;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})


public class ThemeSourceTest {

	@Inject
	private DataSource ds;
	
	
	private static org.slf4j.Logger logger = LoggerFactory.getLogger(ArticleSourceTest.class);
	
	@Inject
	private ThemeMapper dao;
	
	@Inject
	private SqlSessionFactory sqlFactory;

	@Test
	public void test() {
		assert(true);
	}
	
	@Test
	public void testAddTheme() throws Exception{
		dao.addTheme("th11", "themeName1", "imagePath1", "themePath1");
		
	}
	
	@Test
	public void testAddThemeParam() throws Exception{
		ThemeDTO themeDTO = new ThemeDTO("th2","themeName2","imagePath2","themePath2");
		dao.addThemeParam(themeDTO);
	}
	
	@Test
	public void testAddThemeParams() throws Exception{
		List<ThemeDTO> themes = new ArrayList<ThemeDTO>();
		themes.add(new ThemeDTO("th3","themeName3","imagePath3","themePath3"));
		themes.add(new ThemeDTO("th4","themeName4","imagePath4","themePath4"));
		dao.addThemeParams(themes);
	}
	
	@Test
	public void testDeleteThemeParam() throws Exception{
		dao.deleteThemeParam("themeCode4");
	}
	
	@Test
	public void testDeleteThemeParams() throws Exception{
		List<ThemeDTO> themes = new ArrayList<ThemeDTO>();
		themes.add(new ThemeDTO("themeCode1","themeName1","imagePath1","themePath1"));
		themes.add(new ThemeDTO("themeCode2","themeName2","imagePath2","themePath2"));
		themes.add(new ThemeDTO("themeCode3","themeName3","imagePath3","themePath3"));
		dao.deleteThemeParams(themes);
	}
	

}
