import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";

const mockdata = [
  {
    title: "Data Access",
    description:
      "Having access to relevant data can help stakeholders make informed decisions, identify areas of need, and design interventions that are more likely to have a positive impact.",
    icon: IconGauge,
  },
  {
    title: "Human Centered",
    description:
      "Rwanda Youth Voice for Change has adopted a community model and human-centered approach as a way to address common health issues by engaging and empowering our beneficiaries and local communities to take an active role in promoting health and wellbeing.",
    icon: IconUser,
  },
  {
    title: "Work With The Community",
    description:
      "Our approach recognizes that communities are the experts in their own health needs and can be valuable partners in designing and implementing interventions that are tailored to their unique needs and contexts.",
    icon: IconCookie,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.colors.cyan[4],
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.colors.cyan[4],
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function WhoHero2() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} stroke={2} color={theme.colors.cyan[4]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-0 mt-32">
        <Container size="lg" py="xl">
          {/* <Group position="center">
          <Badge variant="filled" size="lg">
            Best company ever
          </Badge>
        </Group>
   */}{" "}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl uppercase">
              Model & approach
            </h1>
            <Text
              // c="dimmed"
              className={classes.description}
              ta="center"
              mt="md"
            >
              Access to accurate information and guidance is crucial for
              individuals and organizations working to design and implement
              effective social and development programs.
            </Text>
          </div>
          <SimpleGrid
            cols={3}
            spacing="xl"
            mt={50}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {features}
          </SimpleGrid>
        </Container>
      </div>
      <hr />
    </div>
  );
}
