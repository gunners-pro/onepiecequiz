import styled from 'styled-components';

interface TitleProps {
  theme: {
    colors: {
      primary: string;
      success: string;
    };
  };
}

export const Title = styled.h1<TitleProps>`
    color: ${({ theme }) => theme.colors.success};
`;
