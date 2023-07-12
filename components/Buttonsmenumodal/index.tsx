import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

export function Buttonsmenumodal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button color="green" onClick={open}>
          a
        </Button>
      </Group>
    </>
  );
}
