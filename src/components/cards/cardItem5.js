import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  rem,
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

export function CardItem5(props) {
  const mockdata = [
    { label: props.icon1, icon: IconUsers },
    { label: props.icon2, icon: IconGauge },
    { label: props.icon3, icon: IconManualGearbox },
    // { label: props.icon4, icon: IconGasStation },
  ];

  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      {/* <Card.Section className={classes.imageSection}>
        <Image src={props.photo} />
      </Card.Section> */}

      <Group position="apart" mt="md">
        <div>
          <Text fz={20} fw={700}>{props.title1}</Text>
          <Text fz={14} c="dimmed">
            {props.subtitle1}
          </Text>
        </div>
        <Badge color="teal" variant="outline">{props.blue}</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        {/* <Text fz="sm" c="dimmed" className={classes.label}>
          {props.title2}
        </Text> */}

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      {/* <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              {props.title3}
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              {props.subtitle3}
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            {props.title4}
          </Button>
        </Group>
      </Card.Section> */}
    </Card>
  );
}

export default CardItem5;
