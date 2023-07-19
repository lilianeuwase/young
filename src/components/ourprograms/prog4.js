import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  rem,
} from "@mantine/core";
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
  IconAxe,
  IconAbacus,
  IconActivity,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  },

  title: {
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
      // color:theme.colors.blue[2],
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(4)}`,
  },
}));

const features = [
  {
    icon: IconAbacus,
    title: "Livelihoods and Health Promotion",
    description:
      "This program provides training and support to individuals and communities to improve healthy lifestyles through sustainable livelihoods",
  },
  {
    icon: IconActivity,
    title: "Climate Change and Health",
    description:
      "This program works to raise awareness about the impact of climate change on health and promote adaptation strategies that can mitigate these impacts.",
  },
  {
    icon: IconAxe,
    title: "Disaster Preparedness and Response",
    description:
      "This program provides training and resources to help communities prepare for and respond to natural disasters and other emergencies.",
  },
  {
    icon: IconFlame,
    title: "Overall TARGET",
    description:
      "We collaborate with local communities, parents, and educators to design and implement sustainable livelihood interventions.",
  },
];

export function Prog4() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "white", to: "cyan" }}
      >
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-16">
        <div className={classes.wrapper}>
          <Grid gutter={80}>
            <Col span={12} md={5}>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl uppercase">
                <Title className={classes.title} order={2}>
                  <span className={classes.highlight}>SDG </span>3-Good Health
                  and Well-being
                </Title>
              </h1>

              <Text >
                The program focuses on achieving SDG 3, with a special emphasis
                on addressing the interrelated issues of livelihood and climate
                change. The program aims to promote access to affordable,
                quality healthcare services and ensure that individuals and
                communities have the knowledge and resources to maintain good
                health and prevent diseases. It also seeks to promote
                sustainable livelihoods and improve the economic wellbeing of
                communities, particularly those vulnerable to the impacts of
                climate change.
              </Text>

              {/* 
              <Button
                variant="gradient"
                gradient={{ deg: 133, from: "blue", to: "cyan" }}
                size="lg"
                radius="md"
                mt="xl"
              >
                Get started
              </Button> */}
            </Col>
            <Col span={12} md={7}>
              <SimpleGrid
                cols={2}
                spacing={30}
                breakpoints={[{ maxWidth: "md", cols: 1 }]}
              >
                {items}
              </SimpleGrid>
            </Col>
          </Grid>
        </div>
      </div>
    </div>
  );
}
