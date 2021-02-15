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
    color: #1c6bb1;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#1C6BB1')};
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 40px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #17274d;
      font-weight: bold;

      font-size: 24px;

      input {
        width: 500px;
        border: 2px solid #1c6bb1;
        border-radius: 10px;
        padding: 16px;
        color: #17274d;

        background: #fff;
        font-weight: 600;
      }

      & + label {
        margin-top: 10px;
      }
    }
  }
`;

export const Button = styled.button`
  margin-top: 16px;
  height: 56px;
  width: 25%;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  background-color: #2ea043;
  font-weight: bold;
  letter-spacing: 2px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#2ea043')};
  }
`;
