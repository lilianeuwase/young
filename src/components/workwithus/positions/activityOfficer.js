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

export default function ActivityOfficer() {
  const { classes } = useStyles();
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-0 mt-40 mb-20">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl uppercase">
            Activity Officer
          </h1>
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
              Rwanda Youth Voice for Change-RYVC is a non-political, non-governmental, and non-profit organization that was founded in 2009. It is duly registered and
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
                The Activity Officer will be responsible for planning and
                implementing activities aimed at improving mental health
                literacy and access to mental health services among the LGBT
                community in Kigali. The ideal candidate will have experience in
                clinical psychology, program management, community outreach, and
                stakeholder engagement. They should be passionate about
                promoting mental health and wellbeing and have a strong
                commitment to serving marginalized communities.
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
              Program Management
            </h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-base">
                <li>
                  <span>
                    Health literacy and increase access to mental health
                    services among the LGBT community in Kigali.
                  </span>
                </li>
                <li>
                  <span>
                    Using already developed program goals, timelines, and
                    budgets, and ensure that all activities are delivered on
                    time and within budget.
                  </span>
                </li>
                <li>
                  <span>
                    Monitor program outcomes and make necessary adjustments to
                    ensure that objectives are met.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 mb-8">
            <h3 className="text-base font-bold text-gray-900">
              Community Outreach
            </h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-base">
                <li>
                  <span>
                    Build relationships with LGBT community leaders and
                    organizations in Kigali to increase awareness of mental
                    health issues and promote participation in mental health
                    programs and services.
                  </span>
                </li>
                <li>
                  <span>
                    Develop and implement outreach strategies to engage the LGBT
                    community and increase participation in mental health
                    programs and services.
                  </span>
                </li>
                <li>
                  <span>
                    Represent the organization at community events and meetings.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 mb-8">
            <h3 className="text-base font-bold text-gray-900">
              Data Management and Reporting
            </h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-base">
                <li>
                  <span>
                    Collect and analyze data related to program outcomes and
                    community needs, and use this information to inform program
                    development and improvement.
                  </span>
                </li>
                <li>
                  <span>
                    Prepare reports on program outcomes and progress toward
                    goals, and present this information to stakeholders as
                    needed.
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
                    Bachelor's degree in clinical psychology, public health,
                    social work, or a related field.
                  </span>
                </li>
                <li>
                  <span>
                    Minimum of 2 years of experience in program management,
                    community outreach, or stakeholder engagement specially in
                    filed of mental health.
                  </span>
                </li>
                <li>
                  <span>
                    Having served as RYVC volunteer for at least two years.
                  </span>
                </li>
                <li>
                  <span>
                    Experience working with the LGBT community and promoting
                    mental health.
                  </span>
                </li>
                <li>
                  <span>
                    Strong communication, interpersonal, and organizational
                    skills.
                  </span>
                </li>
                <li>
                  <span>
                    Ability to work independently and collaboratively in a
                    fast-paced environment.
                  </span>
                </li>
                <li>
                  <span>
                    Proficiency in Microsoft Office and data analysis tools.
                  </span>
                </li>
                <li>
                  <span>Fluency in English and Kinyarwanda.</span>
                </li>
                <li>
                  <span>
                    This job description is a starting point and may be adjusted
                    based on the specific needs of the organization and the
                    community it serves.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>How to Apply</Title>
            <Text fz="sm">
              Send your CV, cover letter and your degrees to  {' '}
              <span className="font-bold">
              info@rwandayvchange.org
              </span>
              .  {' '}The deadline for submitting applications
              is on 15th April 2023 at 5:00pm local time. Applications should be
              addressed to the Chief Executive Officer of RYVC
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
