package com.lecto.forward.test2;

import javax.inject.Inject;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lecto.forward.service.MemberService;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class MemberDuplicateCheckTest {

	@Inject
	private MemberService memberService;
	
	
	@Test
	public void test() {
		assert(true);
	}

	
	@Test
	public void idCheckTest() throws Exception {
		int result;
		result = memberService.idCheck("aaa");
		System.out.println(result);
	}
	
	@Test
	public void emailCheckTest() throws Exception{
		int result;
		result = memberService.emailCheck("aaa");
		System.out.println(result);
		
	}
	
	
	@Test
	public void phoneCheckTest() throws Exception{
		int result;
		result = memberService.phoneCheck("010");
		System.out.println(result);
		
	}
	
	@Test
	public void searchIdTest() throws Exception{
		boolean result;
		result = memberService.searchId("회원3");
		System.out.println(result);
	
	}
	
	
	
	@Test
	public void searchNicknameTest()throws Exception{
		boolean result;
		result = memberService.searchNickname("홍길동닉네임");
		System.out.println(result);
	}
	
	@Test
	public void searchMailTest() throws Exception{
		boolean result;
		result = memberService.searchMail("abcd4@naver.com");
		System.out.println(result);
	}
	
	@Test
	public void searchPhoneTest() throws Exception{
		boolean result;
		result = memberService.searchPhone("010");
		
	}
	
}
