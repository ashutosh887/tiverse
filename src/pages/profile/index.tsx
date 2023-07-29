import { Image, Tabs, Tag } from "antd";
import { useSession } from "next-auth/react";
import ActivityTab from "~/components/Profile/ActivityTab";
import MyEventsTab from "~/components/Profile/MyEventsTab";
import TransactionsTab from "~/components/Profile/TransactionsTab";
import Layout from "~/components/common/Layout";
import { userMock } from "~/config/data";

const profileTabs = [
  {
    label: 'Activity',
    children: <ActivityTab />,
  },
  {
    label: 'Events',
    children: <MyEventsTab />
  },
  {
    label: 'Transactions',
    children: <TransactionsTab />
  }
];

function Profile() {
  const { data: sessionData } = useSession();

  return (
    <Layout page="Profile">
      <div className="flex h-full flex-col space-y-4 p-4">
        <div className="flex w-full items-center space-x-4 p-4">
          <Image
            alt={sessionData?.user.name ?? ""}
            width={160}
            src={sessionData?.user.image ?? ""}
          />

          <div className="flex h-full w-full flex-col p-2">
            <span className="text-2xl font-semibold">
              {sessionData?.user.name}
            </span>
            <span className="text-lg">{sessionData?.user.email}</span>

            <div className="mt-4">
              <Tag color="gold">Credits: {userMock.credits}x</Tag>
              <Tag color="cyan">Groups: {userMock.groups}</Tag>
              <Tag color="green">Attended: {userMock.attended}</Tag>
              <Tag color="volcano">Organized: {userMock.organized}</Tag>
            </div>
          </div>
        </div>

        <div className="cscrollbar overflow-y-auto p-4">
        <Tabs
        tabPosition="top"
        defaultActiveKey="1"
        size="large"
        className="!text-white"
        items={profileTabs.map(({ label, children }) => {
          return {
            key: label,
            label,
            children,
          };
        })}
      />
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
