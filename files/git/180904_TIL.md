## Git 공부하기

* 목표1 : Github를 활용한 효율적인 공부내역 관리 및 프로젝트 관리

---
### 파일의 상태
깃에서 파일을 다룰 때 세가지의 상태가 있다

1. 포장 전인 파일 : Unstaged files
2. 포장하기로 한 파일 : Staged files
3. 포장 완료한 파일 묶음 : Commit

미포장한 파일을 -> staged 단계로 올리고 -> commit 메세지를 붙여 -> 포장하는것 commit(내 컴퓨터에서)

코드를 의미있는 단위로 쪼개서 포장하는 것이 Commit. 각 Commit 별로 변경된 이력을 볼 수도 있고 코드를 돌릴 수도 있음.

* 아직 Github 사이트에는 올라가지 않음. push 할 때 git이 로컬 폴더에 숨겨져 있는 .git파일을 참조에 깃허브 저장소 url에 코드를 올려주는 것 *

---
### Branch

보통 배포 가능한 완벽한 코드는 master 브랜치에 올리고, 개발 중인 코드는 develop 브랜치에 올린다. checkout을 통해 각 브랜치를 옮겨다닐 수 있다.
```
$ git checkout branch_name
```

---
### Feature

메인페이지, 세부페이지 나눠서 작업을 할때 앞에 'feature/main' 혹은 'feature/form'을 달아주면 구분별로 브랜치를 묶어 볼 수 있다. ('featurn/main'도 브랜치와 같은 개념으로 이해하면 된다.)

---
### 기능 개발이 완료되어 dev 브랜치에서 합치고 싶다 -> full request를 날린다.

- 개발자 A : 'feature/main'이 완료되어 dev로 풀리퀘 날림 -> 이상 없어 merge함
- 개발자 B : 'feature/form'이 완료되어 dev로 풀리퀘를 날리려고 하는데 개발자 A와 같은 부분을 건드려서 충돌이 남. -> merge 하고 -> 충돌나는 부분 확인해서 맞는 코드를 수작업으로 고쳐줌 -> dev로 full request날림
- dev 브랜치의 코드가 배포해도 될 정도 -> dev에서 master로 full request -> merge -> releases를 누르고 업데이트 버전과 세부 내용을 적어준 뒤 Publish Release버튼을 눌러 출시
(react는 잘 관리되는 오픈소스의 저장소. release노트를 보고 어떻게 소스 관리하는지 볼 것)

---
### Fork

오픈소스를 포크떠와서 기능을 추가해서 오픈소스에 기여할 수 있다.
- fork를 떠온다 -> 원격 repo를 로컬에 받아온다 -> 새 기능 소스를 커밋한다 -> (내가 포크 떠 온 repo의) dev에 올린다.
- 만약 오픈소스에 보내고 싶으면 원본 저장소를 새로운 리모트로 설정해줘야 한다. -> 원본 저장소의 url을 upstream으로 new remote추가 -> 원본 저장소에 바로 pull request를 보내면 충돌이 일어날 수도 있다. (원본 저장소에서 추가한 코드가 있을 수 있음) -> (전처럼 먼저 머지 후 나중에 풀리퀘 날릴 수도 있지만) 'Rebase'로 다시 베이스를 정한다. 커밋의 히스토리를 조작하는 것. 히스토리를 조작하는 Push이기 때문에 force push를 해야 한다.(단 다른 사람이 이 브랜치를 수정하고 있을 가능성이 제로일때 해야 함.)
```
$ git push -f origin
```
- fetch를 통해 원격과 내 소스 트리를 동기화 해주면 베이스가 옮겨지고 깨끗하게 머지할 수 있는 상태가 됨. -> 포크된 내 레포에서 pull request를 보낸다(base fork를 원본레포의 dev브랜치로, head fork를 나의 master브랜치로 해준다.) -> 원본 레포의 개발자가 확인하고 머지할지 하지 않을지를 결정. -> 나는 원본 레포의 contributer로 등록되고, 내 개인페이지에도 원본레포의 저장소가 뜨게 됨.

자료 출처 : <초심자를 위한 Github 협업> 진유립님 저서 [바로가기](https://realhanbit.co.kr/books/125/pages/0/read)


---
## 내가 하려던 것

- <Javascript를 이용한 자료 구조와 알고리즘> 챕터별로 feature를 따서 올리기