import styled from "styled-components";

export const Form = styled.form`
  width: 300px;
  height: 461px;
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
    max-width: 90%;
    margin: 0 auto;
    color: #999999;
  }
  @media (min-width: 768px) {
    width: 500px;
    margin: 50px;
  }
`;

export const Content = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;
