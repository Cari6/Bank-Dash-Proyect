import styled from "styled-components";
import NextLink from "next/link";

export const SideBarContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  border-right: 2px solid #e6eff5;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b1b1b1;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #1310bf;
  }
`;

export const Logo = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const ItemListContainer = styled.div`
  margin-top: 60px;
  position: relative;
`;

export const StyledLink = styled(NextLink)`
  text-decoration: none;
  cursor: not-allowed;
`;
export const ItemActive = styled.div<{ $position: number }>`
  position: absolute;
  width: 6px;
  height: 60px;
  left: 0;
  border-radius: 0 10px 10px 0;
  background-color: #2d60ff;
  transition: transform 0.3s ease-in-out;
  transform: translateY(${({ $position }) => $position * 60}px);
`;
