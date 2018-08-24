package com.lecto.forward.test;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.persistence.ManagerViewMapper;
import com.lecto.forward.vo.ManagerVO;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class ManagerTest {

	@Autowired
	private ManagerViewMapper managerViewMapper;
	
	////////////////////////////////////////
	@Test
	public void searchMemberIdTest() {
		try {
			managerViewMapper.searchMemberId("admin");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	//////////////////////////////////////////
	@Test
	public void searchMemberNameTest() {
		try {
			List<ManagerVO> list = managerViewMapper.searchMemberName("운영자");
			for(ManagerVO co:list)
				System.out.println(co.toString());
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

	}
	////////////////////////////////////////
	@Test
	public void searchBoardNameTest() {
		try {
			System.out.println(managerViewMapper.searchBoardName("공지게시판"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	//////////////////////////////////////////
	@Test
	public void searchManagerViewTest() {
		ManagerVO vo = new ManagerVO("admin","리얼관리자","01012311234","공지게시판","bo1");
		try {
			managerViewMapper.searchManagerView(vo);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/////////////////////////////////////
	@Test
	public void searchManagerViewsTest() {
		ArrayList<ManagerVO> list = new ArrayList<ManagerVO>();
		ManagerVO vo = new ManagerVO("admin","리얼관리자","01012311234","공지게시판","bo1");
		ManagerVO vo1 = new ManagerVO("manager1","운영자","01033223322","자유게시판","bo2");
		list.add(vo);
		list.add(vo1);
		try {
			List<ManagerVO> list1 = managerViewMapper.searchManagerViews(list);
			for(ManagerVO v:list1)
				System.out.println(v.toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	///////////////////////////////////
	@Test
	public void searchManagerViewAllTest() {
		try {
			managerViewMapper.searchManagerViewAll();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
