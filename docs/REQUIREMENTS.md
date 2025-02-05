## 😸 기능 목록

### 상품 목록 페이지

- [x] header의 숫자 표시를 통해 장바구니에 담긴 품목의 갯수 표시.
- [x] 쇼핑 카트 버튼을 누르면 수량을 정할 수 있는 선택 상자가 나온다.

  - [x] 선택 상자에서 수량을 설정할 수 있다.
  - [x] 수량이 1개 이상이면 장바구니에 들어가는 품목의 개수가 늘어난다.
  - [x] 수량이 0개 이하가 되면 장바구니 버튼이 나타난다.

### 장바구니 페이지

- [x] 선택 상자를 클릭하면 체크된 아이템의 개수가 나타난다
- [x] 선택 상자를 클릭하면 해당 아이템의 합산 금액이 보인다
- [x] 전체 선택 체크 박스를 클릭하면 전체 상품이 선택된다
- [x] 휴지통 아이콘을 누르면 해당 아이템이 삭제된다
- [x] 선택 상자를 클릭하고 선택 삭제를 누르면 체크된 아이템만 삭제된다

## 🦦 UI 구현

- [x] 상품 목록 페이지에 필요한 UI 마크업

  - [x] Header
  - [x] ProductList
  - [x] ProductItem
  - [x] AmountCounter
  - [x] CheckBox
  - [x] Image
  - [x] CartItemProduct
  - [x] CartItemProductList
  - [x] Button
  - [x] EstimatedPaymentBox

## 🐧 기타

### 전역 상태 관리

- [x] recoil을 사용하여 전역 상태 관리

### mock 데이터 활용

- [x] Mock 데이터를 활용하여 상품 데이터를 처리한다. 협업 미션을 고려하여 장바구니 API 예상 명세 참고

### 테스트 도구 선정

- [x] 적합한 테스트 도구를 선택하여 사용하고, 중요한 테스트 케이스를 정의하여 테스트 진행
- [x] 스토리북 테스트 작성

### 로컬 스토리지 사용

- [x] 로컬 스토리지에 장바구니 품목을 저장하여 새로고침을 해도 그대로 남아있다.

### 모바일 환경 대응
