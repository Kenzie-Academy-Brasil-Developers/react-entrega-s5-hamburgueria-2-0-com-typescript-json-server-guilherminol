import styled from "styled-components";

export const Container = styled.header`
  height: 80px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    font-size: 24px;
    span {
      font-size: 18px;
    }
  }
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
  @media (max-width: 768px) {
    input {
      display: none;
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
  @media (max-width: 768px) {
    display: none;
  }
`;
export const IconsContainer = styled.div`
  height: 100%;
  margin: auto;
  .btnSearch {
    display: none;
  }
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
  @media (max-width: 768px) {
    .btnSearch {
      display: initial;
    }
  }
`;
export const SearchInputMobile = styled(SearchInput)`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  width: 95%;
  align-itens: center;
  @media (max-width: 768px) {
    display: flex;
  }
`;
