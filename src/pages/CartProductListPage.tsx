import styled from 'styled-components';
import { RecoilRoot } from 'recoil';

import CartProductList from '../components/Cart/CartProductList';
import EstimatedPaymentBox from '../components/Cart/EstimatedPaymentBox';
import Header from '../components/Common/Header';
import CheckBox from '../components/Common/CheckBox';
import Button from '../components/Common/Button';

const CartProductListPage = () => {
  return (
    <RecoilRoot>
      <Header />
      <Main>
        <CartProductTitle>장바구니</CartProductTitle>
        <CartProductContent>
          <CartProductInfo>
            <CartProductListTitle>든든배송 상품 (3개)</CartProductListTitle>
            <CartProductList />
            <SelectContainer>
              <CheckBox />
              <TotalSelectedCount>전체선택 (2/3)</TotalSelectedCount>
              <Button designType='delete' buttonLabel='선택삭제' />
            </SelectContainer>
          </CartProductInfo>
        </CartProductContent>
        <EstimatedPaymentBoxWrapper>
          <EstimatedPaymentBox />
        </EstimatedPaymentBoxWrapper>
      </Main>
    </RecoilRoot>
  );
};

const Main = styled.main`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  height: calc(100vh - 80px);
  margin: 0 auto;
  padding: 0 0 100px 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CartProductTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 130px;
  padding: 58px 0 29px 0;
  border-bottom: 4px solid ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 32px;
  font-weight: 700;
`;

const CartProductContent = styled.div`
  padding-top: 130px;
`;

const CartProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartProductListTitle = styled.div`
  padding: 34px 0 16px 0;
  font-size: 20px;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`;

const TotalSelectedCount = styled.span`
  padding: 0 13px;
`;

const EstimatedPaymentBoxWrapper = styled.div`
  position: sticky;
  top: 30px;
  margin-top: 170px;
`;

export default CartProductListPage;