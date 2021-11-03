import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 346px;
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .productImageContainer {
    background: #f5f5f5;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    img {
      height: 150px;
      margin: auto;
    }
  }
  p {
    font-size: 12px;
    color: #828282;
  }
  p + p {
    color: #27ae60;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
  }
  button {
    width: 106px;
    height: 40px;
  }
`;
export const Content = styled.div`
  padding: 0 0 18px 20px;
  height: 196px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
`;
