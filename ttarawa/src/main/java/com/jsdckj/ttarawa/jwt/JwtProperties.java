package com.jsdckj.ttarawa.jwt;

public interface JwtProperties {

  String TOKEN_HEADER = "Authorization";
  String BEARER_TYPE = "Bearer ";
  String AUTHORITIES_KEY = "auth";
//  long ACCESS_TOKEN_EXPIRE_TIME = 30 * 60 * 1000L; //30분
  long ACCESS_TOKEN_EXPIRE_TIME = 7 * 24 * 60 * 60 * 1000L;

  long REFRESH_TOKEN_EXPIRE_TIME = 7 * 24 * 60 * 60 * 1000L;// 7일

}
