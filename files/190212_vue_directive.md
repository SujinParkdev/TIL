# 1. Vue 디렉티브 수행순서

- v-for 디렉티브가 먼저 수행되고, v-if 디렉티브가 적용된다

# 2. javascript indexOf

```
<tr v-for="contact in contacts" v-if="contact.address.indexOf('서울') > -1">
```

- indexOf가 뭐지? 
  - Javascript String 객체의 prototype에 내장메서드
  - `str.indexOf(searchValue[, fromIndex])`
  - fromIndex 값이 음수면 전체에서 searchValue 문자값을 검색

<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf>

# 3. Vue 배열 데이터

- Vue.js의 가상 DOM은 v-for로 렌더링한 배열의 데이터 순서가 변경되면 DOM 요소를 이동시키지 않고 기존 DOM 요소의 데이터를 변경한다(데이터만 갈아끼운다)

- 배열 데이터에서 DOM 요소의 위치를 직접 변경하고자 한다면 key 특성(Attribute)을 부여하면 된다.

  - v-bind 이용 → :key

  <tbody id="contacts">
  <template v-for="(contact, index) in contacts">
  <tr :key="contact.no">
  <td>{{contact.no}}</td>
  <td>{{contact.name}}</td>
  <td>{{contact.tel}}</td>
  <td>{{contact.address}}</td>
  </tr>
  </template>
  </tbody>

- 배열 데이터 변경 : 기존 배열 값 직접 변경하기 위해서는 Vue.set 메서드를 사용해서 변경해야 함

  Vue.set(list.contacts, 0 {{ "no" : 100, "name" : "AA", "tel": "010-0000-0000", "address" : "제주" }})

- v-for 디렉티브는 push, pop, shit, unshit, splice, filter, contact, slice, reduce 등과 같은 배열 메서드가 호출되면 감시자를 통해 변경을 추적할 수 있으니 자바스크립트 배열 객체가 지원하는 메서드를 이용해서 변경할 것

# 4. vscode default space 변경하기

<https://stackoverflow.com/questions/29972396/vscode-how-do-i-set-tab-space-style>

# 5. v-pre

```
<div id="example">
  <span v-pre>{{message}}</span>
</div>
```

- v-pre 디렉티브는 Vue 객체를 컴파일하지 않고 {{message}} 문자열을 그대로 출력한다. 템플릿 문자열을 컴파일하지 않고 그대로 내보내기 위해 v-pre 사용한다.

# 6. v-once

- 단 한번만 렌더링을 수행한다.(Vue 인스턴스 데이터를 변경해도 렌더링을 수행하지 않음)

# 7. v-cloak

- js 코드가 아직 컴파일 되기 전, 화면에 머스태쉬코드가 그대로 나타난다.

- 화면 초기에 컴파일되지 않은 템플릿을 나타나지 않게 할 수 있다

  <!DOCTYPE html> <html> <head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width"> <title>JS Bin</title> </head> <body>

  ```
  <div id="app" v-cloak>
      <h1 v-if="value > 5">value 가 5보다 크군요</h1>
      <h1 v-else-if="value === 5">값이 5네요</h1>
      <h1 v-else>value 가  5보다 작아요</h1>
      <h1 v-pre>{{ 이건 그대로 렌더링해줘요 }}</h1>
  </div>
  
  <script src="<https://unpkg.com/vue/dist/vue.js>"></script>
  ```

  </body> </html>

- 여기서 css 속성까지 설정해주어야 한다. v-cloak이라는 속성이 있을 때 display가 none이 되도록.

  [v-cloak] { display: none; }

<https://velopert.com/3044>

# 8. 계산형 속성

- HTML 요소 내부에서는 모두 문자열. 따라서 num도 문자열. Number()혹은 parseInt()로 숫자형으로 바꿔줘야함.

  

  <div id="example">
  <input type="text" v-model="num" /> <br />
  1부터 입력된 수까지의 합 : <span>{{ sum }}</span>
  </div>
  <script type="text/javascript">
  // 1부터 입력된 수까지 합 구하기
  // HTML 요소 내부에서는 모두 문자열. 따라서 num도 문자열. Number()혹은 parseInt()로 숫자형으로 바꿔줘야함.
  var vmSum = new Vue({
  el : '#example',
  data : { num : 0 },
  computed: {
  sum : function() {
  var n = Number(this.num);
  if (Number.isNaN(n) || n < 1) return 0;
  return ((1+n) * n) /2;
  }
  }
  })
  </script>

