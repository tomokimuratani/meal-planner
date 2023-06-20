import { Text, Progress, Card, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.green[6],
  },

  title: {
    color: theme.fn.rgba(theme.white, 0.8),
  },

  stats: {
    color: theme.white,
  },

  progressBar: {
    backgroundColor: theme.white,
  },

  progressTrack: {
    backgroundColor: theme.fn.rgba(theme.white, 0.4),
  },
}));

export function Stats() {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Text fz="xs" tt="uppercase" fw={700} className={classes.title}>
        本日の摂取カロリー
      </Text>
      <Text fz="lg" fw={500} className={classes.stats}>
        1000 kcal / 2364 kcal
      </Text>
      <Progress
        value={50}
        mt="md"
        size="lg"
        radius="xl"
        classNames={{
          root: classes.progressTrack,
          bar: classes.progressBar,
        }}
      />
    </Card>
  );
}
