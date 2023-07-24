import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
  rem,
} from "@mantine/core";
import Background from "../../img/background/back10.jpeg";

import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = ["Health", "Research", "Education", "SDG-3"];

const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    backgroundImage: "url(" + Background + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  container: {
    height: rem(650),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginTop: `calc(${theme.spacing.xl} * 5)`,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: rem(650),
      paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

export function PriorityIntro() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      {/* <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-0 mt-32"> */}
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 20%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl uppercase">
            OUR PRIORITY
          </h1>
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          <p>
            We prioritize understanding and addressing community needs and
            concerns and ensuring that our programs are tailored to their
            specific contexts and circumstances. By incorporating these
            principles into our design, we are confident that our programs will
            be effective, sustainable, and impactful, and will contribute to the
            wellbeing and empowerment of our target groups.
            <br />
            Through our work, we strive to empower young people to take
            ownership of their health and wellbeing, while also contributing to
            a more prosperous and sustainable Rwanda.
          </p>

          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-md font-semibold leading-6 text-white">
              Programs
            </h4>
            <div className="h-px flex-auto bg-teal-100" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-md leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3 text-stone-200">
                <CheckIcon className="h-6 w-5 flex-none" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </Text>
      </Container>
      {/* </div>{" "} */}
    </div>
  );
}
