import { Button } from "antd";
import Layout from "~/components/common/Layout";
import { useRouter } from "next/router";

function Dashboard() {
  const router = useRouter();

  return (
    <Layout page="Dashboard">
      <div className="flex h-full">
        {/* create account and other actions */}
        <div className="flex w-full justify-end space-x-2 p-4">
          <Button
            className="cpbutton"
            onClick={() => void router.push("/feed")}
          >
            Create Discussion
          </Button>

          <Button
            className="cpbutton"
            onClick={() => void router.push("/event/new")}
          >
            Create Event
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
