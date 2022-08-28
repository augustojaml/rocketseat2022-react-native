import { Label } from "@global/styles/global";
import React from "react";

import { Button, Container } from "./styles";

interface ParticipantProps {
  title?: string;
  onPress?: () => void;
}

export function Participant({ title = "title", onPress }: ParticipantProps) {
  return (
    <>
      <Container>
        <Label style={{ flex: 1, marginLeft: 16 }}>{title}</Label>
        <Button onPress={onPress}>
          <Label size={30} style={{ marginTop: -13 }}>
            -
          </Label>
        </Button>
      </Container>
    </>
  );
}
