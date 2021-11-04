import styled from "styled-components";

export const Background = styled.div`
  background: rgba(51, 51, 51, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Container = styled.div`
  margin-top: 80px;
  header {
    width: 500px;
    height: 54px;
    left: 0px;
    top: 0px;
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
    color: #fff;
    margin: 0 auto;
    padding: 13px 22px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      margin: 0;
    }
    button {
      color: #fff;
      background-color: transparent;
      border: none;
      font-size: 22px;
      font-weight: 100;
      cursor: pointer;
    }
  }
  div {
    background: #ffffff;
    border: 1px solid #f5f5f5;
    box-sizing: border-box;
    border-radius: 0px 0px 5px 5px;
    width: 500px;
    height: 158px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: #333333;
    }
    p {
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      color: #828282;
      margin: 0;
    }
  }
`;
