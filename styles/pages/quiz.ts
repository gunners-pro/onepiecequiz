import styled from 'styled-components';

interface ContainerProps {
  backgroundImage: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export const QuizContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 350px;
  margin: auto 10%;

  & > h1 {
    margin: 8px 0 8px;
  }

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px
  }
`;

export const Widget: any = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;


  & > h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-top: 24px;
    margin-left: 32px;
  }
  & > p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: .3s;
  display: block;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;
