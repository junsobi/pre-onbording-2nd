### 프리온보딩 프론트엔드 인턴십 2번째 과제

### 이름

- 김준섭

### 프로젝트 실행방법

```shell
git clone https://github.com/junsobi/pre-onbording-2nd.git
cd pre-onbording-2nd
npm install
npm start
```

### 데모 영상

Vercel을 통해 배포.
[배포 링크](https://pre-onbording-2nd.vercel.app/)

### 사용 라이브러리

- React Router
- Axios
- TailWind CSS

### 파일 구조

별표(\*)는 주요 파일입니다.

```bash
📦src
 ┣ 📂api
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useFetchFirstIssues.ts
 ┃ ┃ ┣ 📜useFetchIssueDetail.ts
 ┃ ┃ ┗ 📜useFetchNextPage.ts
 ┃ ┗ 📜api.ts
 ┣ 📂components
 ┃ ┣ 📂Header
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂IssueDetail
 ┃ ┃ ┗ 📜IssueDetail.tsx
 ┃ ┣ 📂IssueList
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┗ 📜useInfiniteScrollIssues.ts
 ┃ ┃ ┣ 📜IssueItem.tsx
 ┃ ┃ ┗ 📜IssueList.tsx
 ┃ ┣ 📜Ad.tsx
 ┃ ┣ 📜ErrorBoundry.tsx
 ┃ ┣ 📜ErrorComponent.tsx
 ┃ ┣ 📜LodingComponent.tsx
 ┃ ┗ 📜userLink.tsx
 ┣ 📂context
 ┃ ┗ 📜IssueContext.tsx
 ┣ 📂layout
 ┃ ┗ 📜IssueListLayout.tsx
 ┣ 📂pages
 ┃ ┗ 📜IssueListpage.tsx
 ┣ 📂styles
 ┃ ┗ 📜tailwind.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜index.tsx
```

### 주요 목표와 구현 설명

## 이슈목록 가져오기 API활용

- GitHub API 호출: axios 라이브러리를 활용하여 getIssueList 함수를 작성

- 첫 번째 페이지 로딩: useEffect 훅을 사용하여 웹 페이지가 처음 로드될 때 contextApi 에서 getIssueList 함수를 호출하고, 결과로 받은 데이터를 contextApi에 저장

---

## open 상태의 이슈 중 코멘트가 많은 순으로 정렬

- open 상태의 이슈 중 코멘트가 많은 순으로 정렬: getIssueList 함수에서 API 호출 시 params 객체의 state를 "open"으로 설정하고,
- sort를 "comments", direction을 "desc"로 설정함.
  할 일에 대한 생성, 읽기, 수정, 삭제 연산을 처리합니다.

---

## 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시

- issue.number, issue.title, issue.user.login(작성자), issue.created_at(작성일), 그리고 issue.comments(코멘트 수)를 활용하여 해당 정보들을 UI에 표시함.
- 작성일의 경우에는 JavaScript의 Date 객체와 toLocaleDateString 메소드를 사용하여 날짜 형식을 변환함.

---

## 다섯번째 셀마다 광고 이미지 출력

- issueList 배열에 map 메소드 사용, (idx + 1) % 4 === 0 조건으로 <Ad> 컴포넌트 표시

---

## 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

- seInfiniteScrollIssues 훅을 만들어 사용함.
  이 훅 내부에서는 IntersectionObserver API를 활용하여
  스크롤이 페이지 하단에 도달했는지 감지함.

- lastIssueRef 콜백 함수를 통해 마지막 이슈 항목에 관찰자(observer)를 부착하고, 이 관찰자가 해당 요소와 교차할 때(즉, 화면에 보일 때) 페이지 번호를 증가시킴

- (setPage((prevPage) => prevPage + 1)). 페이지 번호가 증가하면
  그에 따라 다음 페이지의 데이터를 가져오는 fetchNextPage 함수가 실행됨.

- 그리고 IssueList 컴포넌트에서는 위에서 생성한 lastIssueRef를 마지막 이슈 항목의 ref로 설정하여(<div ref={lastIssueRef} />) 마지막 항목이 화면에 나타나면 추가 데이터를 불러옴.

---

## 이슈의 상세 내용 표시

- IssueDetail 컴포넌트에서 이슈의 상세 정보를 처리하고 렌더링함.
- useParams 훅을 사용하여 현재 URL 경로에서 이슈 번호(issueNumber)를 가져옴.
- 그런 다음, useEffect 훅 내부에서 해당 번호를 사용하여 선택된 이슈의 세부 정보를 설정함contextApi-(setSelectedIssueNumber(issueNumber)).

- Markdown 렌더링: ReactMarkdown 컴포넌트와 remark-gfm 플러그인을 사용하여 GitHub Flavored Markdown(GFM) 형식으로 작성된 본문을 HTML로 변환하고 렌더링함.

- css 처리의 경우 깃헙과 같은 느낌으로 처리하고싶어서 github-markdown-css 사용함.

---

## 데이터 요청중 로딩처리

- context api에서 loding을 usestate를 사용하여 상태 관리
- 패칭하는 과정의 앞뒤에 loding의 상태를 변경함

- loding의 상태에 따라 각 페이지 컴포넌츠에서 로딩컴포넌츠를 조건부 랜더링

---

## 에러처리

- ErrorBoundry 기능 구현
- try catch문에서 반환된 에러로 Error 컴포넌트 랜더링
