# What's In The Chul-Gabang
철가방속 물건 맞추기 게임 띵호와 FrontEnd 레포지토리입니다💕

## 🌱 Commit Convention

- 커밋 메시지 규칙
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

## 🪵 Branch Convention

- Issue를 생성한다. (작업의 단위, 번호 부여)
- Issue의 Feature Branch를 생성한다.
  - `{접두사}/#이슈번호_{작업명}`
  - 예시: feat/#12_login
- Add - Commit - Push - Pull Request 의 과정
- Pull Request가 작성되면 다른 팀원이 Code Review를 한다.
- Code Review가 완료되고, 다른 팀원이 Approve하면 Merge Pull Request 진행
- 다른 팀원은 merge된 작업물을 pull하고 다시 각자 맡은 작업을 이어나간다.
