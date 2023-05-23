import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl})`,
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
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

const features = [
  { name: "The program will also focus on the prevention and control of NCDs such as diabetes, hypertension, and cancer. We will work with communities and health systems to promote healthy lifestyles and improve access to diagnosis, treatment, and management of NCDs.", description: "Designed by Good Goods, Inc." },
  {
    name: "The program will prioritize improving SRHR outcomes for women, men, and young people by increasing access to comprehensive sexual education, family planning, and maternal health services.",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "To achieve our goals, the Health and Innovation program will leverage the latest technologies and innovations in healthcare, including telemedicine, e-health solutions, and mobile health applications. ", description: '6.25" x 3.55" x 1.15"' },
  { name: "We will work to improve the prevention, testing, treatment, and care of HIV, and We will prioritize research and development to identify new solutions and best practices in health service delivery and innovation.", description: "Hand sanded and finished with natural oil" },
];

export function ProgHero() {
  const { classes } = useStyles();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-16">
        <div className={classes.inner}>
          <div className={classes.content}>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl uppercase">
              <Title className={classes.title}>
                The <span className={classes.highlight}>Health</span> <br />{" "}
                Innovations program
              </Title>
            </h1>
            <Text color="dimmed" mt="md">
              This program aims to improve access to quality health services and
              innovation for vulnerable populations. The program focuses on
              addressing mental health, non-communicable diseases (NCDs), sexual
              and reproductive health and rights (SRHR), and HIV.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl" color="#75E6DA">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Through the program</b> – we will work to reduce the burden
                of mental health conditions by promoting early detection,
                treatment, and management
              </List.Item>
              <List.Item>
                <b>We will prioritize</b> – the integration of mental health
                services into primary healthcare systems and community-based
                services to increase access and reduce stigma.
              </List.Item>
              <List.Item>
                <b>The program will also focus</b> – on the prevention and
                control of NCDs such as diabetes, hypertension, and cancer.
              </List.Item>
              <List.Item>
                <b> We will work with</b> – communities and health systems to
                promote healthy lifestyles and improve access to diagnosis,
                treatment, and management of NCDs.
              </List.Item>
            </List>

            {/* <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control}>
                  Get started
                </Button>
                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                  className={classes.control}
                >
                  Source code
                </Button>
              </Group> */}
          </div>
          <Image
            src={require("../../img/background/prohHero.png")}
            className={classes.image}
          />
        </div>
        <dl className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              {/* <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd> */}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
