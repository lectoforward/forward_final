package com.lecto.forward.test;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.dto.MemberDTO;
import com.lecto.forward.persistence.MemberMapper;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class MemberTest {

	@Autowired
	private MemberMapper memberMapper;
	/////////////////////////////
	@Test
	public void AddMemberTest() {
		MemberDTO dto = new MemberDTO("aaa4","aaa","aaa","aaa4","2018-01-01","aa4","0100004","aaa","2018-01-01");
		if(dto != null) {
			try {
				memberMapper.addMember(dto);
			} catch (Exception e) {
				e.printStackTrace();
			}
			System.out.println("\n"+dto.toString());
		}
	}
	///////////////////////////
	@Test
	public void AddMembersTest() {
		ArrayList<MemberDTO> members = new ArrayList<MemberDTO>();
		MemberDTO dto1 = new MemberDTO("aaa1","aaa","aaa","aaa1","2018-01-01","aaa1","0100000001","aaa","2018-01-01");
		MemberDTO dto2 = new MemberDTO("aaa2","aaa","aaa","aaa2","2018-01-01","aaa2","0100000002","aaa","2018-01-01");
		MemberDTO dto3 = new MemberDTO("aaa3","aaa","aaa","aaa3","2018-01-01","aaa3","0100000003","aaa","2018-01-01");
		members.add(dto1);
		members.add(dto2);
		members.add(dto3);
		try {
			memberMapper.addMembers(members);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	///////////////////////////////
	@Test
	public void updateMemberTest() {
		MemberDTO dto1 = new MemberDTO("aaa","bbb","bbb","bbb1","2018-02-02","bbb1","0100000001","aaa","2018-01-01");
		try {
			memberMapper.updateMember(dto1);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	////////////////////////////
	@Test
	public void updatePwdTest() {
		try {
			memberMapper.updatePwd("aaa1", "1234");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	////////////////////////////
	@Test
	public void updateNicknameTest() {
		try {
			memberMapper.updateNickname("aaa1", "nickname");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	///////////////////////////
	@Test
	public void updateNameTest() {
		try {
			memberMapper.updateName("aaa1", "name");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	/////////////////////////////
	@Test
	public void updateBirthTest() {
		try {
			memberMapper.updateBirth("aaa1", "1994-08-29");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	////////////////////////////
	@Test
	public void updateMailTest() {
		try {
			memberMapper.updateMail("aaa1", "mail@mail");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	////////////////////////////
	@Test
	public void updatePhoneTest() {
		try {
			memberMapper.updatePhone("aaa1", "01077777777");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	//////////////////////////////
	@Test
	public void updateAddressTest() {
		try {
			memberMapper.updateAddress("aaa1", "address");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	///////////////////////////
	@Test
	public void deleteMemberTest() {
		try {
			System.out.println(memberMapper.deleteMember("aaa1"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	////////////////////////////
	@Test
	public void deleteMembersTest() {
		ArrayList<String> list = new ArrayList<String>();
		list.add("aaa2");
		list.add("aaa3");
		try {
			System.out.println(memberMapper.deleteMembers(list));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	////////////////////////////
	@Test
	public void loginTest() {
		try {
			System.out.println(memberMapper.login("aaa4"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	/////////////////////////////
	@Test
	public void searchIdTest() {
		try {
			System.out.println(memberMapper.searchId("aaa4"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	////////////////////////////
	@Test
	public void searchIdsTest() {
		try {
			List<MemberDTO> list = memberMapper.searchIds();
			for(MemberDTO dto :list) {
				System.out.println(dto.toString());
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	////////////////////////////
	@Test
	public void searchFindIdTest() {
		try {
			System.out.println(memberMapper.searchFindId("aaa","0100000000","aaa"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	///////////////////////////
	@Test
	public void searchFindPwdTest() {
		try {
			System.out.println(memberMapper.searchFindPwd("aaa","0100000000","aaa"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	////////////////////////////
	@Test
	public void searchNicknameTest() {
		try {
			System.out.println(memberMapper.searchNickname("aaa"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	///////////////////////////
	@Test
	public void searchPhoneTest() {
		try {
			System.out.println(memberMapper.searchPhone("0100000000"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	///////////////////////////
	@Test
	public void searchMailTest() {
		try {
			System.out.println(memberMapper.searchMail("aaa"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	////////////////////////
	@Test
	public void searchMemberTest() {
		MemberDTO dto = new MemberDTO("aaa4","aaa","aaa","aaa4","2018-01-01","aa4","0100004","aaa","2018-01-01");
		try {
			System.out.println(memberMapper.searchMember(dto));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	//////////////////////////
	@Test
	public void searchMembersTest() {
		ArrayList<MemberDTO> list = new ArrayList<MemberDTO>();
		MemberDTO dto1 = new MemberDTO("aaa4","aaa","aaa","aa4","2018-01-01","aa4","0100004","aaa","2018-01-01");
		MemberDTO dto2 = new MemberDTO("aaa","aaa","aaa","aaa","2018-01-01","aaa","0100000000","aaa","2018-01-01");
		list.add(dto1);
		list.add(dto2);
		try {
			List<MemberDTO> list1 = memberMapper.searchMembers(list);
			for(MemberDTO d:list1) {
				System.out.println(d.toString()+"--------------------------------------------------");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
}
