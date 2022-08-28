import { DefaultInput, theme } from "@global/styles/global";
import { TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.gray800};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Input = styled(DefaultInput).attrs({
  placeholderTextColor: theme.colors.gray400,
})`
  height: 56px;
  background-color: ${theme.colors.gray700};
  border-radius: 5px;
  padding: 16px;
  flex: 1;
  margin-right: 12px;
`;

export const Button = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  border-radius: 5px;
  background-color: ${theme.colors.green500};
  align-items: center;
  justify-content: center;
`;
