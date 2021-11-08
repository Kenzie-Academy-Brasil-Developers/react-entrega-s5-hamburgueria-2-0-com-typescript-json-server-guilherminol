import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 23px 20px;
  box-sizing: border-box;
  height: fit-content;
  .imageContainer {
    display: flex;
    width: 82px;
    height: 82px;
    background: #e0e0e0;
    border-radius: 5px;
    margin-right: 10px;
    img {
      width: 55px;
      height: 55px;
      margin: auto;
    }
  }
  svg {
    color: #bdbdbd;
    font-size: 18px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    margin-top: 0;
  }
  div {
    border: 2px solid #f2f2f2;
    box-sizing: border-box;
    width: 107px;
    height: 34px;
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;

    button {
      width: 30px;
      height: 100%;
      border: none;
      background-color: #f2f2f2;
      color: red;
      cursor: pointer;
    }
  }
`;
export const Quantity = styled.p`
  line-height: 34px !important;
  width: 47px;
  background-color: #fff;
`;
export const DeleteButton = styled.button`
  margin-left: auto;
  background: transparent;
  border: none;
  height: fit-content;
  cursor: pointer;
`;
