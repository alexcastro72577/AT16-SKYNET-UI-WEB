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

const ResourceForm = (props) => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
    
      <Form.Item
        subject={['details', 'full_name']}
        label="Name"
      >
        <Input />

      </Form.Item>
      <Form.Item
        subject={['details', 'type']}
        label="Type"
      >
        <Input />
      </Form.Item>

      <Form.Item
        subject={['details', 'model']}
        label="Model"
      >
        <Input />
      </Form.Item>

      <Form.Item
        subject={['details', 'state']}
        label="State"
      >
        
        <Input />
      </Form.Item>
    </Form>
  );
};

export default ResourceForm;