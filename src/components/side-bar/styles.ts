import styled from "styled-components";
import NextLink from "next/link";

export const SideBarContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  border-right: 2px solid #e6eff5;
  z-index: 1001;
`;

export const Logo = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const ItemListContainer = styled.div`
  margin-top: 60px;
`;

export const StyledLink = styled(NextLink)`
  text-decoration: none;
`;
