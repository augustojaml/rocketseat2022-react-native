import { Participant } from "@components/Participant";
import { EmptyParticipant } from "@components/Participant/EmptyParticipant";
import { Label, Separator } from "@global/styles/global";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { useState } from "react";
import { Alert, FlatList, Keyboard } from "react-native";
import { fake } from "./fake";
import { Button, Container, Form, Input } from "./styles";

function capitalizeFirstLetter(str: string) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}

type ParticipantProps = typeof fake.data[0];

export function Home() {
  const [participant, setParticipant] = useState<string | undefined>(undefined);
  const [participants, setParticipants] = useState<ParticipantProps[]>([]);

  function handleAddParticipant() {
    if (!participant) {
      return Alert.alert("Error", "Informe o nome do participante! 🧐");
    }

    const existentParticipant = participants.find(
      (item) => item.name === participant
    );

    if (existentParticipant) {
      return Alert.alert(
        "Participante existente",
        `Partipante com o nome ${participant} já foi cadastrado`
      );
    }

    setParticipants((state) => [
      ...state,
      { id: new Date().getTime().toString(), name: participant },
    ]);

    setParticipant(undefined);
    Keyboard.dismiss();
  }

  function handleRemoveParticipant(participant: ParticipantProps) {
    Alert.alert("Remover", `Remover o participante ${participant.name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((state) =>
            state.filter((item) => item.id !== participant.id)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <>
      <Container>
        <Label marginTop={48} weight="bold" size={24}>
          Nome do evento
        </Label>
        <Label weight="regular" size={16} color="gray400">
          {capitalizeFirstLetter(
            format(new Date(), "iiii, dd 'de' LLLL 'de' yyyy", {
              locale: ptBR,
            })
          )}
        </Label>
        <Separator height={36} />
        <Form>
          <Input
            placeholder="Nome do participante"
            value={participant}
            onChangeText={setParticipant}
          />
          <Button onPress={handleAddParticipant}>
            <Label size={30} style={{ marginTop: -13 }}>
              +
            </Label>
          </Button>
        </Form>

        <Separator height={36} />

        <FlatList
          data={participants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Participant
              key={item.id}
              title={item.name}
              onPress={() => handleRemoveParticipant(item)}
            />
          )}
          ListEmptyComponent={() => <EmptyParticipant />}
        />
      </Container>
    </>
  );
}
