import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
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
import { GoogleButton, TwitterButton } from "../Buttons/SocuakButtons";
import { IconBorderBottom } from "@tabler/icons-react";

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
       <Affix position={{top:"25%",left:"25%",bottom:"25%",right:"25%"}}>

    <Container size={420} >
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
      {type === "login"
              ? "ようこそログインしてください"
              : "ようこそ登録してください"}
      </Text>

      <Group grow mb="md" mt="md"> 
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
              </Group>

      <Divider label="またはメールで続行してください" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === "register" && (
            <TextInput
            label="名前"
            placeholder="あなたの名前"
            value={form.values.name}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            radius="md"
            />
            )}

          <TextInput
            required
            label="メールアドレス"
            
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
            />

          <PasswordInput
            required
            label="パスワード"
            placeholder="あなたのパスワードを入れてください"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
            />

          {type === "register" && (
            <Checkbox
            label="I accept terms and conditions"
            checked={form.values.terms}
            onChange={(event) =>
              form.setFieldValue("terms", event.currentTarget.checked)
            }
            />
            )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
            >
            {type === "register"
              ? "すでにアカウントお持ちの場合は、 ログイン"
              : "アカウントをお持ちでない場合は、 登録"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
    </Container>
               </Affix> 

  );
}
