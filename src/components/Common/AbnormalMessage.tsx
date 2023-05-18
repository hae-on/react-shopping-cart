import { Link } from 'react-router-dom';
import styled from 'styled-components';

type abnormalType = 'error' | 'empty' | 'notFound';

interface abnormalMessageProps {
  abnormalState: abnormalType;
  link?: boolean;
}

const message = {
  error: {
    title: '에러가 발생했습니다.',
    description: '새로고침 해주세요.',
  },
  empty: {
    title: '상품을 찾을 수 없습니다.',
    description: '새로고침 해주세요.',
  },
  notFound: {
    title: '페이지를 찾을 수 없습니다.',
    description: '페이지가 존재하지 않거나 삭제되어 찾을 수 없어요.',
  },
};

const AbnormalMessage = ({
  abnormalState,
  link = false,
}: abnormalMessageProps) => {
  return (
    <MessageSection>
      <img
        width={160}
        height={160}
        src='images/error.png'
        alt='오류 발생 이미지'
      />
      <MessageTitle>{message[abnormalState].title}</MessageTitle>
      <MessageDesc>{message[abnormalState].description}</MessageDesc>
      {link && <HomeLink to='/'>홈으로 가기</HomeLink>}
    </MessageSection>
  );
};

const MessageSection = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  transform: translate(-50%, -50%);
`;

const MessageTitle = styled.h2`
  margin: 16px 0 0 0;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
`;

const MessageDesc = styled.p`
  margin: 8px 0 0 0;
`;

const HomeLink = styled(Link)`
  width: 100px;
  height: 40px;
  margin: 36px 0 0 0;
  text-align: center;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

export default AbnormalMessage;
