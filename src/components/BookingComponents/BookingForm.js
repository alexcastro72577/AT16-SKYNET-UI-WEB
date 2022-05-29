import { Button, Form, Input, InputNumber, Divider } from 'antd';
import { TimePicker, DatePicker, Select } from 'antd';

import moment from 'moment';

const { Option } = Select; 




const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const BookingForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      
      {/*-----------Datails-----------*/}
      <Divider orientation="Center">Details</Divider>
      <Form.Item
        subject={['details', 'subject']}
        label="Subject"
        rules={[
          {
            required: false,
          },
        ]}
        
      >
        <Input />
      </Form.Item>
      <Form.Item
        subject={['details', 'description']}
        label="Description"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/*-----------Schedule-----------*/}
      <Divider orientation="center">Schedule</Divider>
      <Form.Item
        name={['schedule', 'date']}
        label="Date"
      >
        <DatePicker/>
      </Form.Item>

      <Form.Item
        name={['schedule', 'start_time']}
        label="Start time"
      >
        <TimePicker defaultValue={moment('00:00:00', 'HH:mm:ss')}/>
      </Form.Item>
      
      <Form.Item
        name={['schedule', 'end_time']}
        label="End time"
      >
        <TimePicker defaultValue={moment('00:00:00', 'HH:mm:ss')}/>
      </Form.Item>

      {/*-----------State, type, resource, person-----------*/}
      <Divider orientation="center"></Divider>
      <Form.Item
        name={['booking', 'state']}
        label="State"
      >
        <Select>
          <Option>Booked</Option>
          <Option>Free</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name={['booking', 'type']}
        label="Type"
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name={['booking', 'resource']}
        label="Resource"
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name={['booking', 'person']}
        label="Person"
      >
        <Input/>
      </Form.Item>
    </Form>
  );
};

export default BookingForm;