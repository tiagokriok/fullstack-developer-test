import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 450px;
  line-height: 50px;

  > a {
    text-decoration: none;
    color: #fff;
    background-color: #e06161;
    font-weight: bold;
    font-size: 24px;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#e06161')};
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-top: 40px;
  color: #17274d;
`;

export const Products = styled.div`
  margin-top: 40px;
  width: 850px;
  line-height: 30px;

  a {
    background: #fff;
    color: #17274d;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }
    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
      }

      p {
        font-size: 18px;
        margin-top: 0;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;
