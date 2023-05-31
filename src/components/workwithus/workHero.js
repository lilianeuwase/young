import {
  createStyles,
  Text,
  Title,
  TextInput,
  Group,
  Button,
  Image,
  rem,
} from "@mantine/core";
import image from "../../img/background/apply.png";

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: 300,
    display: "flex",
    alignItems: "center",
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan("sm")]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function WorkHero() {
  const { classes } = useStyles();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-0 mt-40 mb-20">
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}> Administration Assistant</Title>
            <Text fw={500} fz="lg" mb={5}>
              Kigali, Rwanda
            </Text>
            <Text fz="sm" c="dimmed">
              Assist with the day-to-day operations of an office by doing tasks
              such as filing paperwork, answering phone calls, preparing
              documents for meetings, and managing the calendar of their
              supervisors.
            </Text>

            <div>
              <a href="/apply">
                <button class="flex w-40 justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 mt-4">
                  APPLY
                </button>
              </a>
            </div>
          </div>
          <Image
            src={require("../../img/background/apply.png")}
            className={classes.image}
          />
        </div>
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}> Coordinator </Title>
            <Text fw={500} fz="lg" mb={5}>
              Kigali, Rwanda
            </Text>
            <Text fz="sm" c="dimmed">
              Assist with the day-to-day operations of an office by doing tasks
              such as filing paperwork, answering phone calls, preparing
              documents for meetings, and managing the calendar of their
              supervisors.
            </Text>

            <div>
              <a href="/apply">
                <button class="flex w-40 justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 mt-4">
                  APPLY
                </button>
              </a>
            </div>
          </div>
          <Image
            src={require("../../img/background/apply2.png")}
            className={classes.image}
          />
        </div>
      </div>
    </div>
  );
}
