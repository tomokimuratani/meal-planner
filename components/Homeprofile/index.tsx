import { Avatar } from "@mantine/core";
import { Text } from "@mantine/core";
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
  Affix,
} from "@mantine/core";
export const Homeprofile = () => {
  return (
    <>
      <Container
        style={{ display: "flex", alignItems: "center", marginLeft: "3em" }}
      >
        <Avatar
          component="a"
          href="https://github.com/rtivital"
          target="_blank"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
          alt="it's me"
        />
        <Text style={{ marginLeft: "10px" }}>村谷 友基</Text>
      </Container>
    </>
  );
};
