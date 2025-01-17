
# 띵호와
> 우리FISA 클라우드 서비스 개발 교과과정 토이 프로젝트로, <br>
HTML, CSS, JS,React를 활용한 **철가방 속 짜장면 클릭하기 게임**입니다.
> <br>
> **당신의 순발력을 테스트해보세요!**

<br><br>
## 목차
- [👥 팀 소개](#-팀-소개)
- [🖥️ 데모 링크 / 시연 영상](#️-데모-링크--시연-영상)
- [🚧 프로젝트 룰](#-프로젝트-룰)
  - [Color 🖍️](#color-️---철가방-게임의-동양풍-컬러를-살린-색-사용)
  - [Commit Convention](#-commit-convention)
  - [Branch Convention](#-branch-convention)
- [💻 핵심 요소](#-핵심-요소)
  - [HTML](#html)
  - [CSS](#css)
  - [JS](#js)
  - [React](#react)
- [Lighthouse](#lighthouse)
- [Font](#font)
- [🤖 Prototype](#-prototype)


<br><br><br><br><br><br>
 
## 👥 팀 소개
| ![cy](https://avatars.githubusercontent.com/u/94633589?v=4)| ![sj](https://avatars.githubusercontent.com/u/105282117?v=4) | ![sy](https://avatars.githubusercontent.com/u/87513664?v=4) |
|--------------------------------------|---------------------------------------|------------------------------------|
| [서채연](https://github.com/seocylucky)| [이승준](https://github.com/sengjun0624) | [이소연](https://github.com/reed426) |
|HTML<br>CSS<br>JS<br>React<br>Figma<br>LightHouse 측정 및 개선<br>GitHub세팅 |HTML<br>CSS<br>JS<br>React<br>README |HTML<br>CSS<br>JS<br>React<br>Figma|


<br><br><br><br><br><br>


## 🖥️ 데모 링크 / 시연 영상
- 애플리케이션은 [demo 링크](http://192.168.0.80:3000)에서 접근 가능합니다.

- **데스크탑 시연 링크**
  <br>
  [영상 링크](https://drive.google.com/file/d/129rO1Ayz7i8HCZKUt1mW7-UlCUZTWTXr/view?usp=drive_link)
  

- **GIF**
  <br>![2025-01-116 12 14-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/77f09747-27f4-4cf5-ab26-08e853fa37f1)



<br><br><br><br><br><br><br>






## 🚧 프로젝트 룰
<br><br>
 <h2>Color 🖍️ - 철가방 게임의 동양풍 컬러를 살린 색 사용</h2>
      <img width="990" alt="Color" src="https://github.com/user-attachments/assets/bc8a42ba-eb3c-4109-9562-4f3a89d5caae">
    

<br>
<br><br><br><br><br><br>


### 🌱 Commit Convention

#### 커밋 메시지 규칙
  - `commit convention`: `commit message`
  - 예시) `feat: 로그인 구현`

| Tag Name | Description                                                                                   |
| :------- | :-------------------------------------------------------------------------------------------- |
| feat     | 새로운 기능 추가                                                                              |
| design   | CSS 등 사용자 UI 디자인 변경                                                                  |
| comment  | 필요한 주석 추가, 변경 및 삭제                                                                |
| fix      | 버그 수정                                                                                     |
| refactor | 프로덕션 코드 리팩토링, 새로운 기능이나 버그 수정없이 현재 구현을 개선한 경우                 |
| docs     | README.md 수정                                                                                |
| rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                                            |
| remove   | 파일을 삭제하는 작업만 수행한 경우                                                            |
| test     | 테스트 코드, 리펙토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음       |
| chore    | 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음 |
| hotfix   | 급하게 치명적인 버그를 고쳐야하는 경우                                                        |

<br><br>


### 🪵 Branch Convention

- Issue를 생성한다. (작업의 단위, 번호 부여)
- Issue의 Feature Branch를 생성한다.
  - `{접두사}/#이슈번호_{작업명}`
  - 예시: feat/#12_login
- Add - Commit - Push - Pull Request 의 과정
- Pull Request가 작성되면 다른 팀원이 Code Review를 한다.
- Code Review가 완료되고, 다른 팀원이 Approve하면 Merge Pull Request 진행
- 다른 팀원은 merge된 작업물을 pull하고 다시 각자 맡은 작업을 이어나간다.
<br><br>

### Class Name Rule 📌 - 원만한 협업을 위한 클래스네이밍 규칙 적용

- 컨테이너(wrapper) : container_{ }
- 글꼴 : text_{ }
- 이미지 : img_{ }
- 글꼴색 : font_color_{ }
- 배경색 : bg_color_{ }
<br>

<br><br>


## 🧸 ESlint
### 환경 설정

- **`browser`**: 브라우저 환경을 지원합니다.
- **`es2021`**: 최신 ES2021 문법을 지원합니다.

<br><br>

### 기반 확장

- **Airbnb 스타일 가이드**와 **Prettier**를 사용합니다.
- `eslint-config-prettier`를 통해 ESLint와 Prettier 간의 충돌을 방지했습니다.

<br><br>

### 플러그인

- `prettier`와 `eslint-plugin-prettier`를 활용하여 Prettier 규칙을 ESLint에서 적용합니다.
- 또한, `import` 플러그인을 추가로 활용해 모듈 관리 품질을 높였습니다.
<br><br>


### 파서 옵션

- 최신 ECMAScript 문법과 **ES Module**을 지원합니다.
<br><br>


### 주요 룰

1. **`prettier/prettier`**: Prettier 규칙 위반 시 오류로 처리합니다.
2. **`import/extensions`**: 패키지 파일 확장을 명시하도록 설정했습니다.
3. **`import/prefer-default-export`**: 기본 내보내기(default export)를 강요하지 않습니다.
4. **`import/no-unresolved`**: 미해결된 `import` 경고를 비활성화합니다.
5. **`radix`**: 진법(radix) 관련 경고를 비활성화했습니다.
6. **`func-style`**: 함수 선언 스타일은 표현식 형태만 사용하도록 강제합니다.
<br><br>

### 모듈 경로 설정

- `import/resolver`를 통해 프로젝트 내 상대 경로(`node`의 paths 옵션)로 모듈을 효율적으로 찾을 수 있도록 설정했습니다.


<br><br><br><br><br><br>

## 💻 핵심 요소
<br><br>
### HTML
- container, content로 구조적으로 잘 갖춰진 문서
- 추후에 컴포넌트 분리를 고려하여 작성한 HTML 문서
- 오디오를 활용해 게임의 몰입증가
- 
<br><br>

### CSS
- 다양한 애니메이션을 활용해 시각적 재미 요소 추가
- 1090px 이상의 해상도만 이용할 수 있게 반응형 적용
<br><br>

### JS
- 게임 이미지를 영역내에서 랜덤하게 등장.
- 게임 종류를 랜덤으로 선택
- 이미지에 동적으로 이벤트리스너 생성해서 정답으로 처리
- 총 플레이 시간에 맞게 프로그래스바가 움직임
- username을 입력받아 local storage로 관리
- 플레이 시간이 종료되면, 유저이름과 점수를 DB에 POST 요청을 보냅니다.  
- 마지막에 랭킹을 확인 할 수 있습니다.
<br><br>
### React
#### 폴더 구조

```bash
src/
├── App.jsx 
├── apis # api파일 폴더
├── assets # 정적 리소스 폴더
├── components # 공통 컴포넌트 폴더 
├── constants # 상수 폴더
├── pages # Home,Game,Result 같은 큰 단위의 페이지 폴더
├── hooks 
├── main.jsx 
└── styles # colors로 색 전역변수화

```
<br><br>

#### 스타일 라이브러리 - Styled Components
Styled Components를 사용하여 컴포넌트를 만들어 매번 컴포넌트가 적힌 곳으로 돌아가 속성을 수정하거나 다른 컴포넌트로 분리하지 않고,
props로 값을 받아서 하나의 컴포넌트로 여러가지 스타일의 컴포넌트를 만들도록 하였습니다. 

- 예시) 버튼 컴포넌트


 <img width="809" alt="스크린샷 2025-01-17 오전 8 37 58" src="https://github.com/user-attachments/assets/519a023f-e094-4c88-aa3e-819683acc616" />
<img width="446" alt="스크린샷 2025-01-17 오전 9 08 04" src="https://github.com/user-attachments/assets/20932c91-b5bc-46bf-a470-309198b057c5" />




className을 props로 받아서 yellow, black, prev, next에 따라 스타일이 다른 버튼이 생성되도록 하였습니다.

<img width="427" alt="스크린샷 2025-01-17 오전 9 00 48" src="https://github.com/user-attachments/assets/e9245805-3343-454f-9ba6-37e24da1e657" />
<img width="436" alt="스크린샷 2025-01-17 오전 8 38 23" src="https://github.com/user-attachments/assets/1ef2a97b-45f3-4981-8a49-a29e7cef3ab5" /> 

 
 <img width="424" alt="스크린샷 2025-01-17 오전 8 39 36" src="https://github.com/user-attachments/assets/670f4f3f-e9f8-47b8-93d4-d38b2c2abc26" />
 <img width="329" alt="스크린샷 2025-01-17 오전 8 39 39" src="https://github.com/user-attachments/assets/20df9f09-f6cc-4880-89f6-078682a0faa2" />

<br><br>

#### 공통 컴포넌트화 ex (Button,Modal)
재사용 가능한 버튼과 모달 부분을 공통 컴포넌트화 하였습니다. 
- 모달
<img width="1085" alt="스크린샷 2025-01-17 오전 8 47 07" src="https://github.com/user-attachments/assets/ccacf76c-0122-48fe-92bb-e4e9a41fce3e" />
<img width="1440" alt="스크린샷 2025-01-17 오전 8 39 48" src="https://github.com/user-attachments/assets/c93c1351-c846-4715-a3ce-0d9fa5a867f3" />

- 버튼
<img width="424" alt="스크린샷 2025-01-17 오전 8 39 36" src="https://github.com/user-attachments/assets/7314ebd9-c069-41a8-84ac-b9b520d0eebf" />
<img width="274" alt="스크린샷 2025-01-17 오전 8 38 59" src="https://github.com/user-attachments/assets/f0290fc5-53fc-4617-bcc7-106802ea2c37" />

<br><br>

#### 개별 컴포넌트 ex (WarningScreen)
코드의 가독성과 Styled-component적용으로 분리할 수 있는 요소들을 개별 컴포넌트화 하였습니다.

- WarningScreen
  각 페이지가 일정크기 이하로 줄게 되면 WarningScreen이 뜨도록 개별 컴포넌트화 하여 각 페이지에 넣어 사용하였습니다.


  <img width="536" alt="스크린샷 2025-01-17 오전 8 51 35" src="https://github.com/user-attachments/assets/e2c6b741-fdf5-4091-9166-6db973c1bde2" />

<br><br>

#### React-Helmet을 통한 SEO 최적화
React-Helmet을 활용해 페이지별 <title>과 <meta> 태그를 동적으로 설정하여 SEO를 최적화했습니다.
이를 통해 검색 엔진 크롤러가 각 페이지의 고유 정보를 인식할 수 있도록 구성했습니다.


<img width="581" alt="스크린샷 2025-01-17 오전 8 44 44" src="https://github.com/user-attachments/assets/fded016b-a542-40da-8f16-77210f9bb88e" />

<br><br><br><br>

### MYSQL 방화벽 해제
- 저희는 로컬에 배포된 MYSQL을 팀원이 모두 같이 사용했습니다. mysql의 방화벽을 해제하고, .env를 활용하여 DB 연결정보를 팀원과 표준화하여 같은 데이터베이스를 바라보고 작업할 수 있었습니다.
<br><br><br><br><br><br><br>




## Font 
<br><br>

### Font서체
<br><br>

#### 독립체 - 레트로한 느낌과 철가방 컨셉에 맞는 폰트 선정
  
<br><br>

[![띵호와](https://github.com/user-attachments/assets/526049b5-fd84-4b06-bbf2-a7e96d1cca7a)](https://noonnu.cc/font_page/338#google_vignette)

<br><br><br><br><br><br>





## 🤖 Prototype
<br><br>

### Main Page

![main_image](https://github.com/user-attachments/assets/d7981c8b-5695-4796-9d49-ccc5d090b41a)


<br><br>
### Play 

<img width="1501" alt="image" src="https://github.com/user-attachments/assets/cf653d6f-54cb-4ba0-9670-c7063eb6dcdb" />
<img width="1501" alt="image" src="https://github.com/user-attachments/assets/6a56f696-5236-423f-ac21-3c47363a7c64" />
<img width="1501" alt="image" src="https://github.com/user-attachments/assets/dbb33ac6-2092-4970-80e7-943d49c9760e" />
<img width="1440" alt="스크린샷 2025-01-17 오전 8 39 48" src="https://github.com/user-attachments/assets/f36bf8fa-d20d-4377-9297-541aab1bddeb" />


<br><br>
<!-- ## 🤯 회고 -->


<br><br><br><br><br><br>

## Lighthouse
<br><br>

### 개선 전
![image](https://github.com/user-attachments/assets/e679de5d-5977-4eb2-aa0b-cb26816f6fad)

<br><br>


### 🔍️ 측정 후 , 개선 사항
<br><br>

#### 메타 태그 설정
검색 엔진 최적화 성능 향상을 위해 메타태그를 넣어줬어요
```html
    <meta
      name="description"
      content="IT 개발자들을 위한 재미있는 퀴즈 게임 띵호와"
    />
    <meta name="keywords" content="IT, 개발, 게임, 퀴즈, 철가방, 띵호와" />
```
<br><br>

#### 이미지 webp로 이미지 포맷 최적화
압축률이 뛰어나고 렌더링 성능이 빠른 webp로 문제가 되는 사진들(홈화면 오른쪽 용, 철가방 뚜껑, 문제 로고 사진)을 바꿔주었습니다! <br>
[⭐️참고자료⭐️](https://medium.com/@yujin.px/image-to-webp-%ED%95%A8%EC%88%98%EB%A1%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EA%B8%B0-1faeeca219e9)
<br><br>

#### 이미지 및 폰트 preload 설정
이미지와 폰트 로딩 지연을 해결하기 위해 미리 로드하게 해주는 preload를 적용하였습니다.

```html

<link rel="preload" href="public/img/bagTop.webp" as="image" type="image/webp" />
<link rel="preload" href="./data/css.webp" as="image" type="image/webp" />
```
<br><br>

#### CLS 방지를 위한 코드 추가
웹폰트가 로딩될 때 대체 텍스트가 미리 띄워지고 웹폰트가 로드되면 교체하도록 해주는 `font-display: swap;`를 추가해주었습니다.

```css
@font-face {
  font-family: "YoonDokrip";
  src: url("public/font/YoonDokrip.otf");
  font-display: swap;
}
```
<br><br>

### 개선 후 
![스크린샷 2025-01-05 오전 2 39 58](https://github.com/user-attachments/assets/f17965d6-221c-4f37-89a2-226019cd8a89)

<br><br>
