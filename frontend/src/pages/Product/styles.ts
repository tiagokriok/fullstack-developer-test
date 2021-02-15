import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #17274d;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #17274d;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#17274d')};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const ProductDetail = styled.section`
  margin-top: 60px;

  header {
    display: flex;
    align-items: center;

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #17274d;
      }

      p {
        font-size: 18px;
        color: #17274d;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 40px;
      }

      strong {
        display: block;
        font-size: 30px;
        color: #17274d;
      }

      span {
        display: flex;
        margin-top: 4px;
        color: #17274d;
        align-items: center;
        justify-content: center;

        svg {
          margin-left: 6px;
        }
      }
    }
  }
`;

export const Container = styled.div`
  margin-top: 80px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: white;
    padding: 20px;
    background-color: #e06161;
    border-radius: 10px;
    font-weight: bold;

    svg {
      margin-left: 6px;
    }

    & + a {
      background-color: #ec465c;
    }
  }
`;
