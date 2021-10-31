import styled from "styled-components";

export const Form = styled.form`
  width: 500px;
  height: 461px;
  margin: 50px;
  border: 2px solid #f5f5f5;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h3 {
    align-self: flex-start;
    margin: 18px 0 0 30px;
  }
  .MuiFormControl-fullWidth {
    width: 90%;
  }

  button {
    box-sizing: border-box;
    width: 90%;
    height: 60px;
    cursor: pointer;
    font-size: 16px;
  }
  p {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    width: 327px;
    color: #999999;
  }
`;

export const Content = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`;
