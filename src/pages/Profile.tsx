import Layout from 'components/common/Layout';
import { demoUser } from 'config/data';
import { useState } from 'react';

function Profile() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // const events = data?.viewer?.eventList?.edges || [];
  // console.log('events: ', events);
  const user = demoUser;

  return (
    <Layout page="Profile">
      <div className="flex justify-center items-center h-full">
        <div>
          <p>{`Hey ${user.name}`}</p>
          <p>{`Email: ${user.email}`}</p>
        </div>
        <div className="flex justify-center items-center h-full">
          {/* @ts-ignore eslint-disable-next-line */}
          {/* TODO: load events */}
          {/* {events.map(({ node: event }, index: number) => {
            return (
              <div key={index}>
                <div>{event.name}</div>
                <div>{event.description}</div>
              </div>
            );
          })} */}
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
