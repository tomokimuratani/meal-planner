import { Button, Menu, Text, useMantineTheme } from "@mantine/core";
import {
  IconSquareCheck,
  IconPackage,
  IconUsers,
  IconCalendar,
  IconChevronDown,
  IconAlarm,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";

export function Buttonmenu() {
  const theme = useMantineTheme();
  return (
    <Menu
      transitionProps={{ transition: "pop-top-right" }}
      position="top-end"
      width={100}
      withinPortal
    >
      <Menu.Target>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
        >
          入力
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          icon={
            <IconAlarm size="1rem" color={theme.colors.blue[6]} stroke={1.5} />
          }
        >
          朝
        </Menu.Item>
        <Menu.Item
          icon={
            <IconSun size="1rem" color={theme.colors.orange[6]} stroke={1.5} />
          }
        >
          昼
        </Menu.Item>
        <Menu.Item
          icon={
            <IconMoon size="1rem" color={theme.colors.yellow[6]} stroke={1.5} />
          }
        >
          夜
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
