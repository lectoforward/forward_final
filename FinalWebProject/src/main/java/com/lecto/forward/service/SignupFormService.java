package com.lecto.forward.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class SignupFormService {
	private String[] patterns = {
    		/* 한글 index - [0]*/
    		"가-힣",
    		/* 영대소문자 index - [1] */
    		"a-zA-Z",
    		/* 숫자 index - [2] */
    		"0-9",    		
    		/* 특수문자 index - [3] */
    		"$@$!%*#?&"  		
    };
	
	/** 아이디, 닉네임 정규식 생성 */
	public String createRegEx(String selectPattern, String cipher){
		if(selectPattern  == null || cipher == null){
			return null;
		}
		
		String[] strNum = null;		
		
		switch(selectPattern) {
			case "영문": strNum = new String[] {"1"};
				break;
			case "숫자": strNum = new String[] {"2"};
				break;
			case "영문+숫자": strNum = new String[]{"1","2"};
				break;
			case "영문+숫자+특수문자": strNum = new String[] {"1", "2", "3"};
				break;
		}
		
		
		
		StringBuilder regEx = new StringBuilder();
		regEx.append("^[");
		
		for(String patternNum:strNum){
			
			int cvtNum = Integer.parseInt(patternNum);
			
			regEx.append(patterns[cvtNum]);
		}
		
		regEx.append("]");
		
		
		int cvtCipher = Integer.parseInt(cipher);
		
		if(cvtCipher !=0 && cvtCipher > 4){
			regEx.append("{1,"+cvtCipher+"}$");
		}else{
			regEx.append("{1,}$");
		}
		
		return regEx.toString();
	}
	
	
	/** 비밀번호는 반드시 이 조건에 해당하는 문자가 포함되어야 한다 라는 조건이 있기 때문에 따로 생성한다. */
	public String createPwdReg(String selectPattern, String cipher){
		if(selectPattern  == null || cipher == null){
			return null;
		}
		
		String[] strNum = null;
		switch(selectPattern) {
			case "영문": strNum = new String[] {"1"};
				break;
			case "숫자": strNum = new String[] {"2"};
				break;
			case "영문+숫자+특수문자": strNum = new String[] {"1", "2", "3"};
				break;
		}
		
		
		StringBuilder regEx = new StringBuilder();
		regEx.append("^");
		for(String patternNum : strNum){
			regEx.append("(?=.*[");
			int num = Integer.parseInt(patternNum);
			regEx.append(patterns[num]);
			regEx.append("])");
		}
		
		
		
		int cvtCipher = Integer.parseInt(cipher);
		regEx.append("[");
		for(String patternNum : strNum){
			int num = Integer.parseInt(patternNum);
			// 숫자일 경우 정규식이 다르게 들어가기 때문에 조건을 걸어줌
			if(num != 2){
				regEx.append(patterns[num]);
			}else{
				regEx.append("\\d");
			}			
		}
		regEx.append("]");
			
			
		if(cvtCipher>6){
			regEx.append("{6,"+cvtCipher+"}$");
			return regEx.toString();
		}

		return null;
	}

	/** 정규식 저장 */
	public boolean saveRegExData(String format) {
		try
	    {
	      FileWriter fw = new FileWriter("C:/Users/lyg/Desktop/validate.txt");
	      BufferedWriter bw = new BufferedWriter(fw);
	 
	      bw.write(format);
	       
	      bw.close();
	    }
	    catch (IOException e)
	    {
	      System.err.println(e);
	      System.exit(1);
	    }
		return true;
	}
	
	
	
	public List<String> loadRegExData() {
		List<String> regDataList = new ArrayList<String>();

		//파일 객체 생성
		File file = new File("C:/Users/lyg/Desktop/validate.txt");
		
		//입력 스트림 생성
        FileReader filereader = null;
		try {
			filereader = new FileReader(file);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}

        //입력 버퍼 생성
        BufferedReader buffReader = new BufferedReader(filereader);
        
        String getData = null;
        try {
        	getData = buffReader.readLine();
			buffReader.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
        
        //data 잘라서 map에 넣어주기
        //StringTokenizer token = new StringTokenizer("f");
        String[] splitData = getData.split("s");
        for(String data:splitData) {
        	regDataList.add(data);
        }
		return regDataList;
	}
	
	
	public boolean validCheck(String str, String pattern) {
        if(str.matches(pattern)){
        	return true;
        }
        return false;
    }
}