import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  rem,
} from "@mantine/core";
import {
  IconCreditCard,
  IconBuildingBank,
  IconRepeat,
  IconReceiptRefund,
  IconReceipt,
  IconReceiptTax,
  IconReport,
  IconCashBanknote,
  IconCoin,
} from "@tabler/icons-react";

const mockdata = [
  {
    title: "Engaging community members",
    icon: IconCreditCard,
    color: "violet",
  },
  {
    title: "Building partnerships with local organizations",
    icon: IconBuildingBank,
    color: "indigo",
  },
  {
    title: "Using technology and data to support health interventions",
    icon: IconRepeat,
    color: "blue",
  },
  {
    title: "Promoting community-led advocacy and policy change",
    icon: IconReceiptRefund,
    color: "green",
  },
  //   { title: "Receipts", icon: IconReceipt, color: "teal" },
  //   { title: "Taxes", icon: IconReceiptTax, color: "cyan" },
  //   { title: "Reports", icon: IconReport, color: "pink" },
  //   { title: "Payments", icon: IconCoin, color: "red" },
  //   { title: "Cashback", icon: IconCashBanknote, color: "orange" },
];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.05)",
    },
  },
}));

export function WhoIcons() {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-4">
        <div className=" section-title"></div>
        <Card withBorder radius="md" className={classes.card}>
          <Group position="apart">
            <Text className={classes.title}>
              For very single project we implement, we make sure we follow those
              stages
            </Text>
            <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
              4 stages
            </Anchor>
          </Group>
          <SimpleGrid cols={2} mt="md">
            {items}
          </SimpleGrid>
        </Card>
      </div>
    </div>
  );
}
