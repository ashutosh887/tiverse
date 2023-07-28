import { Image, Space, Tag } from "antd";
import { useSession } from "next-auth/react";
import Layout from "~/components/common/Layout";
import { userMock } from "~/config/data";

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

        <div className="cscrollbar flex-1 overflow-y-auto border border-white p-4">
          Loremhic commodi dolore recusandae! Repellendus iusto harum molestiae
          autem, blanditiis, eligendi dolores ipsam suscipit rem reiciendis,
          quos neque quaerat aliquid ad. Suscipit laborum, animi ducimus iste
          culpa eum ad na dignissimos? Fuga sunt nihil nam voluptatibus ad sit
          illum dolore soluta quis temporibus, impedit quo culpa, quia expedita
          adipisci id consequatur aspernatur reprehenderit dignissimos
          voluptatpudiandae non alias debitis architecto quos suscipit, ipsa
          enim dolor!
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
