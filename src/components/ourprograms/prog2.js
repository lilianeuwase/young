import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
  rem,
} from "@mantine/core";
import Background from "../../img/background/research.jpeg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(120),
    paddingBottom: rem(110),
    backgroundImage: "url(" + Background + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },
  content: {
    maxWidth: rem(580),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },
  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export default function Prog2() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
      
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl uppercase">
          <Title className={classes.title}>
            The Research and
            <br /> Development{" "}
            <Text component="span" inherit className={classes.highlight}>
              program
            </Text>
          </Title>
        </h1>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            This program aims to support evidence-based decision making and the
            creation of innovative solutions to improve health outcomes and
            address the root causes of health disparities. Our program promotes
            research in areas such as health systems strengthening, health
            policy, and epidemiology. We prioritize research on neglected
            diseases, emerging health threats, and issues facing vulnerable
            populations. Our program fosters collaboration with local and
            international researchers, universities, and organizations to
            generate new knowledge and build research capacity in low-resource
            settings. We support research that is ethical, culturally sensitive,
            and addresses the needs of communities.
            <br /> <br />
            We believe that research should inform policy and practice, and we
            work to ensure that research findings are translated into action.
            Our program also includes training and mentorship opportunities for
            early-career researchers, and we encourage the use of new
            technologies and innovation in research. Through our Research and
            Development program, we aim to contribute to the achievement of SDG
            3 by improving the understanding of health issues and developing
            effective interventions to address them.
          </Text>
        </Container>
      </div>
    </div>
  );
}
