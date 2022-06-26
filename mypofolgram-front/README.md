# mypofolgram-front
mypofolgram-front는 **mypofolgram 프로젝트에서 프론트엔드** 코드를 관리하기 위해 생성했습니다.

## 폴더구조
```bash
├── public
│   ├── css
│   ├── font
│   └── images
│   └── index.html
├── src
│   ├── assets
│   ├── router
│   ├── store
│   ├── utils
│   ├── components 
│   │    └── ...
│   └── views
│   │    ├── error
│   │    └── ...
│   ├── App.vue    
└── └── main.js
``` 
#### /src 하위 폴더
- assets
- router : vue-router사용을 위해 경로를 등록하는 폴더
- store : Vuex 관련 폴더
- utils : 컴포넌트에서 공통적으로 호출하는 함수 모음 
- components : 공통적으로 사용되는 컴포넌트
- views : 특정 경로에서 출력되는 컴포넌트

-----------

## 로그인



------------
## 메뉴구성
#### 홈
<img width="350" alt="스크린샷 2022-06-26 오후 10 42 32" src="https://user-images.githubusercontent.com/42436569/175819281-611a3250-255f-43fd-9c95-519de393abf6.png">
1. 헤더의 아이콘을 이용해서 새로운 게시물을 추가하거나 알림확인, 마이페이지 이동 등이 가능하다.<br />
2. 팔로우한 사용자들의 스토리를 확인할 수 있다.<br />
3. 공유, 신고 등 해당 게시물에 대한 설정이 가능하다.<br />
4. 게시글에 댓글을 게시한다.<br />

#### 검색
<img width="350" alt="스크린샷 2022-06-26 오후 10 42 43" src="https://user-images.githubusercontent.com/42436569/175819287-9aa63b45-6e07-461d-b0bb-71b71401d344.png">
1. 검색을 이용해서 #해시태그 검색 결과를 얻을 수 있다.<br />
2. 게시물은 랜덤으로 출력된다.<br />

#### 릴스
짧은 동영상이 재생되는 메뉴로, 현재 개발중이다.<br />

#### 마이페이지
<img width="350" alt="스크린샷 2022-06-26 오후 10 42 55" src="https://user-images.githubusercontent.com/42436569/175819291-85155fe4-6f34-4dd8-ba8d-9d698849df44.png">
1. 게시물을 추가하거나 마이페이지의 설정이 가능하다.<br />
2. 프로필 정보와 팔로워, 팔로잉 정보를 확인할 수 있다.<br />
3. 프로필 편집 화면으로 이동한다.<br />
4. 업로드한 게시물을 확인할 수 있다.<br />

