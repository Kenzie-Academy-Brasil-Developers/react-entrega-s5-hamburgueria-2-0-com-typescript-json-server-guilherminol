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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    margin-top: 0;
  }
`;
