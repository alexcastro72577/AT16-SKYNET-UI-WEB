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

const PersonForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
    
      <Form.Item
        subject={['details', 'full_name']}
        label="Full name"
      >
        <Input />

      </Form.Item>
      <Form.Item
        subject={['details', 'age']}
        label="Age"
      >
        <Input />
      </Form.Item>

      <Form.Item
        subject={['details', 'country']}
        label="Country"
      >
        <Input />
      </Form.Item>

      <Form.Item
        subject={['details', 'city']}
        label="City"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['booking', 'gender']}
        label="Gender"
      >
        <Select>
          <Option>M</Option>
          <Option>F</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default PersonForm;