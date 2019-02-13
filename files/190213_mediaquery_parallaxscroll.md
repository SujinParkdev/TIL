# 1. 미디어 쿼리 : @media

## media type

- all : 모든 디바이스에 적용(기본값)
- print : 인쇄물 및 인쇄 미리보기 모드에서 보이는 문서에 사용.
- screen : 컴퓨터 스크린, 태블릿, 스마트폰 등
- speech : 스크린 리더기에 사용.

## media feature

- `height, width` : 둘 다 해당, 둘 다 미디어에 따라 다른 값들이 검출 됨
- `width : 320px` : 미디어가 320px일때
- `max-width : 320px` : 320px 이하의 미디어 일 때
- `min-width : 320px` : 320px 이상의 미디어 일 때
- `device` : device의 물리적인 값들을 기준으로(해상도와 너비는 같지 않을 수 있다)
- `device-width : 320px` : 기기의 너비가 320px일때
- `max-device-width : 320px` : 320px 이하의 화면일 때
- `min-device-width : 320px` : 320px 이상의 화면일 때
- `orientation` :
  화면 회전은 portrait, landscape값으로 구분한다.
  기본상태는 portrait, 가로로 돌렸을 때는 landscape.
  데스크톱에는 가로 세로 개념이 없음. **그렇다고 이 개념이 모바일 개념은 아니다.**

# 2. -webkit-device-pixel-ratio

## 단말기에 따른 media query

[https://vizdevices.yesviz.com/](https://vizdevices.yesviz.com/)

## 직접 계산하는 방법

- 디스플레이에 대한 정보 : width, height, ppi

### 1-1 '디바이스부터 시야까지 실제거리'와 '레버런스 픽셀의 거리'를 비교

-  데스트탑의 이상적인 거리 : 28인치
- 스마트폰 이상적인 거리 : 18인치

### 1-2 주어진 거리에 대한 이상적인 픽셀 밀도

- 거리 비에 표준 밀도를 곱한다.



참고사이트 : https://feel5ny.github.io/2018/05/13/mediaQuery_01/
mdn : https://developer.mozilla.org/ko/docs/Web/CSS/@media#Media_features

아이폰 XR, XS, XS Max 미디어쿼리 : https://stackoverflow.com/questions/52321212/iphone-xr-xs-xs-max-css-media-queries

디바이스 별 픽셀 사이즈 및 미디어쿼리 : https://vizdevices.yesviz.com/

---

# 2. Scroll type을 위한 Parallax text scroll

Demo : http://davegamache.com/parallax/

parallax text scroll 개발자 미디엄 :
https://medium.com/@dhg/parallax-done-right-82ced812e61c

parallax text scroll 깃허브 : 
https://github.com/conorluddy/ahRelax

## 설정 할 것

- 브라우저가 animate할 수 있는 가벼운 프로퍼티만 사용 가능할 것
  - *ranslate3d*, *scale*, *rotation* and *opacity*
  - 다른 프로퍼티들은 아마 60fps에서 실행되지 않을 것.



- 만약 JS에서 애니메이션을 부를 때 `window.requestAnimationFrame(animateElements);` 를 사용할 것. 브라우저가 repaint되기 전에 표시한다

```javascript
window.requestAnimationFrame(animateElements);
```



- 픽셀 값을 반올림 처리할 것
  - 200px 정도의 오브젝트에서 50% 정도의 속도로 스크롤할 때 100px 정도의 오브젝트에 애니메이션을 걸어놓는 경우 픽셀값이 54.2356345234578px으로 적용된다.
  - 가까운 픽셀로 반올림해서 빠르게 할 것

```javascript
animationValue = +animationValue.toFixed(2) 
```



- 뷰포트를 벗어나지 않은 요소에만 적용할 것



- position이 absolute, fixed인 요소에만 애니메이션을 적용할 것

  - static, relative에 애니메이션을 적용하자마자 fps가 저하된다.

  

- 스크롤은 <body> 태그의 height에 적용할 것. Safari의 경우 body 요소 이 외를 스크롤할 때 성능이 저하된다. 모든 요소가 position: fixed라서 실제 높이가 없다면 JS를 사용하여 body height를 필요한 height로 조정할 것.



## 피해야 할 것

- background-size: cover
  - 해당 요소에 애니메이션을 적용하지 않으면 괜찮
  - 해당 요소에 애니메이션을 적용해야 할 경우 다른 기술을 사용해서 이미지를 꽉 채워라(full-bleed)
    - Object-fit : contain

- 스크롤 이벤트에 직접적으로 바인딩 하는 것
  - 스크롤은 초당 억번 호출되기 때문에 심각한 문제를 일으킬 수 있다
  - 대신, parallax 주려는 요소에 10초 인터벌을 두어 요소의 위치를 업데이트 해라

```javascript
scrollIntervalID = setInterval(animateStuff, 10);
```



- 거대한 이미지에 애니메이션을 적용하거나 아주 작은 사이즈로 resize하지 마라
  - 이미지에 scale을 사용하는 등의 행위.
  - 비싼 비용을 치르게 될 것(성능 저하)



- 한번에 여러 요소에 애니메이션이 처리되도록 하지 마라(한번에 15개까지 했을 때까지는 괜찮았음.)
  - 부모, 자식에게 동시에 애니메이션을 적용하는 경우에도 성능 문제가 발생할 수 있다.

Parallax scropll을 60fps 실해하는 문제 해결 : http://kristerkari.github.io/adventures-in-webkit-land/blog/2013/08/30/fixing-a-parallax-scrolling-website-to-run-in-60-fps/



예시 사이트 

나이키 : https://sustainability.nike.com/