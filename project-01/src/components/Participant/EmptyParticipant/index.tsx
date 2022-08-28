import { Label } from "@global/styles/global";
import React from "react";

import { Container } from "./styles";

interface EmptyParticipantProps {
  description?: string;
}

export function EmptyParticipant({
  description = "Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.",
}: EmptyParticipantProps) {
  return (
    <>
      <Container>
        <Label style={{ textAlign: "center" }}>{`${description} ☹️`}</Label>
      </Container>
    </>
  );
}
