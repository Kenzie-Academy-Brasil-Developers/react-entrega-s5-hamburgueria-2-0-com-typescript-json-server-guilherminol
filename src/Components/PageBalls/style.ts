import styled from "styled-components";

export const Container = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin: 40px 0 0 5px;
    flex-direction: column;
    width: 200px;
    height: 80px;
    justify-content: space-between;
  } ;
`;
export const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Ball = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #f2f2f2;
`;
