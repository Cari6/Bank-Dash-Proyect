import styled from "styled-components";
import Button from "../button";

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  & > div {
    flex: 1 1 calc(50% - 8px);
  }

  @media (max-width: 890px) {
    & > div {
      flex: 1 1 100%;
    }
  }
`;

export const Item = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
`;

export const CustomButton = styled(Button)`
  margin-top: 20px;
  @media (max-width: 890px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  padding: 10px;
  height: 50px;
  border: 1px solid #dfeaf2;
  border-radius: 15px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
`;
