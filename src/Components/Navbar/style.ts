import styled from "styled-components";

export const Container = styled.header`
  height: 80px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .content {
    display: flex;

    div svg {
      color: #bdbdbd;
    }
    input + button svg {
      color: #fff;
    }
    span {
      background-color: #27ae60 !important;
      color: #fff !important;
    }
  }
`;
export const SearchInput = styled.div`
  width: 365px;
  height: 60px;
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  padding: 0 10px;
  input {
    width: 100%;
    border: none;
    background: transparent;
    ::placeholder {
      color: #e0e0e0;
    }
    :focus {
      outline: none;
    }
  }
  button {
    background: #27ae60;
    border: 2px solid #27ae60;
    box-sizing: border-box;
    border-radius: 8px;
    margin: auto;
    width: 53px;
    height: 40px;
    transition: 0.3s;

    :hover {
      background-color: #93d7af;
      transition: 0.3s;
      border: 2px solid #93d7af;
    }
  }
  svg {
    color: white;
    font-size: 24px;
    margin: auto;
  }
`;
export const IconsContainer = styled.div`
  height: 100%;
  margin: auto;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    svg {
      color: #bdbdbd;
      font-size: 26px;
      margin-left: 10px;
    }
  }
`;
