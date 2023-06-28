import { createStyles, Text, Title, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: 180,
    display: "flex",
    alignItems: "center",
    padding: `calc(${theme.spacing.xl} * 1.5)`,
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

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan("sm")]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colors.teal[6],
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },
}));

export default function FinancialOfficer() {
  const { classes } = useStyles();
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-0 mt-40 mb-20">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl uppercase">
            Financial Officer (Part-time)
          </h1>
          <h2>
            The position is expected to be part-time, with a minimum of 30 hours
            per week.
          </h2>
        </div>
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <div>
            <div className="space-y-2 mb-4">
              <h2 className="text-base text-gray-900 font-bold">Report to:</h2>
              <h2 className="text-base text-gray-900">Project Director</h2>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-base text-gray-900 font-bold">Duration:</p>
              <p className="text-base text-gray-900">12 months, Renewable</p>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-base text-gray-900 font-bold">Location:</p>
              <p className="text-base text-gray-900">Kigali, Rwanda</p>
            </div>
            <div className="space-y-2 mt-10">
              <p className="text-base text-gray-900 font-bold uppercase">
                Organizational Background
              </p>
              <p className="text-base text-gray-900">
                Organization that was founded in 2009. It is duly registered and
                recognized by the Rwanda Governance and collaborates with local
                districts such as Rulindo in the Northern Province and Huye in
                the Southern Province of Rwanda. We will prioritize
                understanding and addressing their needs and concerns, and
                ensuring that our programs are tailored to their specific
                contexts and circumstances. By incorporating these principles
                into our design, we are confident that our programs will be
                effective, sustainable, and impactful, and will contribute to
                the wellbeing and empowerment of our target groups. Vision: A
                healthy and prosperous Rwanda where young people are empowered
                to drive sustainable development and innovation. Mission
                Statement: Our mission is to harness the power of data and
                human-centered design to improve the health and wellbeing of
                Rwandans, particularly youth and other under-served groups,
                through innovative solutions, research, education, and
                sustainable livelihoods, while also contributing to the
                achievement of SDG 3. We believe in using evidence-based
                approaches to drive decision-making and advocacy efforts, in
                collaboration with other stakeholders and communities. By
                leveraging the latest technologies and working closely with our
                beneficiaries, we strive to create sustainable solutions that
                address the unique needs and challenges among our beneficiaries.
              </p>
            </div>
            <div className="space-y-2 mt-10">
              <p className="text-base text-gray-900 font-bold uppercase">
                Position
              </p>
              <p className="text-base text-gray-900">
                The part-time Financial Officer will be responsible for managing
                the financial operations of the project working to improve
                mental health literacy and access to mental health services
                among the LGBT community in Kigali. The ideal candidate will
                have experience in financial management and accounting, with
                strong attention to detail and the ability to work
                independently. They should be passionate about promoting mental
                health and wellbeing and have a strong commitment to serving
                marginalized communities.
              </p>
            </div>
            <div className="space-y-2 mt-10">
              <p className="text-base text-gray-900 font-bold uppercase">
                Key Responsibilities
              </p>
            </div>
          </div>
          <div className="mt-4 mb-8">
            <h3 className="text-base font-bold text-gray-900">
              Financial Management
            </h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-base">
                <li>
                  <span>
                    Maintain accurate financial records for the organization,
                    including accounts payable and receivable, cash flow, and
                    budgeting.
                  </span>
                </li>
                <li>
                  <span>
                    Develop and implement financial policies and procedures that
                    comply with local laws and regulations.
                  </span>
                </li>
                <li>
                  <span>
                    Ensure that financial reports are prepared accurately and
                    timely, and provide regular financial updates to the
                    Executive Director and Board of Directors.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 mb-8">
            <h3 className="text-base font-bold text-gray-900">
              Budgeting and Forecasting
            </h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-base">
                <li>
                  <span>
                    Develop and manage the annual budget for the project,
                    working closely with the Executive Director and Chair of the
                    Board of Directors.
                  </span>
                </li>
                <li>
                  <span>
                    Monitor budget performance and provide regular financial
                    forecasts to inform decision-making.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 mb-8">
            <h3 className="text-base font-bold text-gray-900">
              Grants Management
            </h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-base">
                <li>
                  <span>
                    Ensure that grant budgets are developed and managed
                    effectively, and that financial reports are prepared
                    accurately and timely.
                  </span>
                </li>
                <li>
                  <span>
                    Monitor grant compliance and work closely with the Executive
                    Director to address any issues that arise.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 mb-8">
            <h3 className="text-base font-bold text-gray-900">
              Audit and Compliance
            </h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-base">
                <li>
                  <span>
                    Ensure that the organization's financial operations comply
                    with local laws and regulations, and that all required
                    financial reports and tax returns are prepared and filed on
                    time.
                  </span>
                </li>
                <li>
                  <span>
                    Directors to prepare for annual audits and ensure that any
                    audit findings are addressed.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 mb-8">
            <h3 className="text-base font-bold text-gray-900">
              Qualifications
            </h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-base">
                <li>
                  <span>
                    Bachelor's degree in accounting, finance, or a related
                    field.
                  </span>
                </li>
                <li>
                  <span>
                    Minimum of 2 years of experience in financial management and
                    accounting.
                  </span>
                </li>
                <li>
                  <span>
                    Having served in RYVC would be an added advantage.
                  </span>
                </li>
                <li>
                  <span>
                    Strong attention to detail and ability to work
                    independently.
                  </span>
                </li>
                <li>
                  <span>
                    Experience managing budgets, grants, and financial reports
                    for non-profit organizations.
                  </span>
                </li>
                <li>
                  <span>
                    Strong communication and interpersonal skills, with the
                    ability to work collaboratively and independently in a
                    fast-paced environment.
                  </span>
                </li>

                <li>
                  <span>Fluency in English and Kinyarwanda.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>How to Apply</Title>
            <Text fz="sm">
              Send your CV, cover letter and your degrees to{" "}
              <span className="font-bold">info@rwandayvchange.org</span>. The
              deadline for submitting applications is on 15th April 2023 at
              5:00pm local time. Applications should be addressed to the Chief
              Executive Officer of RYVC
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
