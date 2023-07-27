import { Button, Form, Input } from 'antd';
import routes from 'config/routes';
import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type FormData = {
  name: string;
  email: string;
};
function CreateProfile() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<FormData>({
    name: '',
    email: '',
  });

  const handleFormChanges = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    // TODO: handle form submit
  };

  return (
    <div className="flex flex-col items-center p-2 overflow-y-auto cscrollbar">
      <span className="m-2">Enter details to create your profile</span>

      <Form className=" w-[60%] bg-[#252334] p-4 rounded-lg" layout="vertical">
        <Form.Item
          label={<span className="text-white">Event Name</span>}
          className="my-4"
          required
          name="name"
        >
          <Input
            placeholder="name"
            name="name"
            required
            onChange={handleFormChanges}
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-white">City</span>}
          required
          className="my-4"
        >
          <div className="flex w-full space-x-2">
            <Input
              placeholder="City"
              name="city"
              required
              onChange={handleFormChanges}
            />
          </div>
        </Form.Item>

        <div className="flex space-x-4">
          <Button
            className="cpbutton"
            htmlType="submit"
            onClick={() => handleSubmit}
          >
            Submit
          </Button>
          <Button ghost>Cancel</Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateProfile;
