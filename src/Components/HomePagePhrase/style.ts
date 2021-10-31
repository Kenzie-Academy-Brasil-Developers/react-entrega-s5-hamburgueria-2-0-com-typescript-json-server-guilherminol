import { BsBagCheck } from "react-icons/bs";
import styled from "styled-components";

export const Container = styled.div`
  width: 377px;
  height: 95px;
  box-sizing: border-box;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    width: 261px;
    font-size: 14px;
    line-height: 22px;
    color: #828282;
    span {
      color: #000;
    }
  }
`;

export const IconContainer = styled.div`
  background: rgba(39, 174, 96, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(BsBagCheck)`
  color: #219653;
  border-radius: 5px;
  width: 30px;
  height: 30px;
`;
