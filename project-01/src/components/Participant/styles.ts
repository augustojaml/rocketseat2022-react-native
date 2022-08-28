import { theme } from "@global/styles/global";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${theme.colors.gray700};
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 5px;
  background-color: ${theme.colors.red500};
  align-items: center;
  justify-content: center;
`;
