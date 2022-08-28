import { Text, TextInput, View } from "react-native";
import styled, { css } from "styled-components/native";

export const theme = {
  colors: {
    gray100: "#FDFCFE",
    gray400: "#6B6B6B",
    gray700: "#1F1E25",
    gray800: "#131016",

    green500: "#31cf67",
    red500: "#E23C44",
  },
  font: {
    regular: "JosefinSans_400Regular",
    bold: "JosefinSans_700Bold",
  },
};

interface LabelProps {
  size?: number;
  weight?: keyof typeof theme.font;
  color?: keyof typeof theme.colors;
  marginTop?: number;
  marginBottom?: number;
}

interface SeparatorProps {
  height?: number;
}

export const Label = styled(Text)<LabelProps>`
  ${({ size, weight, color, marginTop, marginBottom }) => css`
    font-size: ${size ?? 16}px;
    font-family: ${theme.font[weight ?? "regular"]};
    color: ${theme.colors[color ?? "gray100"]};
    margin-top: ${marginTop ?? 0}px;
    margin-bottom: ${marginBottom ?? 0}px;
  `}
`;

export const DefaultInput = styled(TextInput)`
  font-size: ${16}px;
  font-family: ${theme.font["regular"]};
  color: ${theme.colors["gray100"]};
`;

export const Separator = styled(View)<SeparatorProps>`
  ${({ height }) => css`
    height: ${height ?? 0}px;
  `}
`;
