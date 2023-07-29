import { Button, Switch } from 'antd';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '~/components/common/Layout';

function Settings() {
  const router = useRouter();
  const { data: sessionData } = useSession();

  useEffect(() => {
    if (sessionData?.user) {
      void router.push("/");
    }
  }, [sessionData, router]);
  
  return (
    <Layout page="Settings">
      <div className="m-4">
        <div className="">
          <h1 className="text-xl my-4">Preferences</h1>

          <div className="flex flex-col">
            <span className="my-2">
              Receive Event Emails <Switch className="mx-2" defaultChecked />
            </span>

            <span className="my-2">
              Receive Group Notifications
              <Switch className="mx-2" defaultChecked />
            </span>

            <span className="my-2">
              Receive Promotional Emails
              <Switch className="mx-2" defaultChecked />
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-xl my-4">Settings & Privacy</h1>

          <Button className="cpbutton mr-2" onClick={() => void signOut()}>Logout</Button>
          <Button ghost danger>
            Delete Account
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default Settings;
