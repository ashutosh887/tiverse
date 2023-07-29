import { Button, Tag } from 'antd';
import Layout from '~/components/common/Layout';
import { demoEvents } from '~/config/data';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Events() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [errorOccured, setErrorOccured] = useState<boolean>(true);

  const getStatus = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  let content;
  if (errorOccured) {
    content = demoEvents.map((event, index) => (
      <div
        key={index}
        className="flex flex-col ctransition border border-gray-500 hover:border-blue-400 rounded-lg w-full p-4 space-y-2"
      >
        <h1 className="text-lg">{event.name}</h1>
        <div className="flex justify-between items-center">
          <span className="">By: {event.organizer}</span>
          <Tag color={event.status === 'upcoming' ? 'green' : 'red'}>
            {getStatus(event.status)}
          </Tag>
        </div>

        <span className="text-base text-gray-400">{event.description}</span>

        <Button
          className="cpbutton w-max mt-4"
          size="small"
        //   onClick={() => handleJoinEvent(event.id, event.maxLimit)}
        >
          Join event
        </Button>
      </div>
    ));
  } else if (loading) {
    content = <p>Loading...</p>;
  } else {
    content = demoEvents.map((event, index) => (
        <div
          key={index}
          className="flex flex-col ctransition border border-gray-500 hover:border-blue-400 rounded-lg w-full p-4 space-y-2"
        >
          <h1 className="text-lg">{event.name}</h1>
          <div className="flex justify-between items-center">
            <span className="">By: {event.organizer}</span>
            <Tag color={event.status === 'upcoming' ? 'green' : 'red'}>
              {getStatus(event.status)}
            </Tag>
          </div>
  
          <span className="text-base text-gray-400">{event.description}</span>
  
          <Button
            className="cpbutton w-max mt-4"
            size="small"
          //   onClick={() => handleJoinEvent(event.id, event.maxLimit)}
          >
            Join event
          </Button>
        </div>
      ));
  }

  return (
    <Layout page="Events">
      <div className="flex flex-col h-full overflow-y-auto cscrollbar">
        <div className="flex justify-end w-full p-4 space-x-2">
          <Button
            className="cpbutton"
            onClick={() => void router.push('/event/new')}
          >
            Create Event
          </Button>
        </div>

        <div className="flex flex-col w-full space-y-4 p-4">{content}</div>
      </div>
    </Layout>
  );
}

export default Events;
