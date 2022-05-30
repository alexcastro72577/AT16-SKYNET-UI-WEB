import ResourceModalUpdate from "./ResourceModalUpdate"
import ResourceModalDelete from "./ResourceModalDelete"
import { Space, Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'resource_name',
    key: 'name',
    
  },
  {
    title: 'Type',
    dataIndex: 'resource_type',
    key: 'type',
  },
  {
    title: 'Model',
    dataIndex: 'resource_model',
    key: 'model',
  },
  {
    title: 'State',
    dataIndex: 'resource_state',
    key: 'state',
  },
  
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <ResourceModalUpdate id={record._id} name={record.resource_name} type={record.resource_type} model={record.resource_model} state={record.resource_state} />
        <ResourceModalDelete id={record._id}/>
      </Space>
    ),
  },
];

const ResourceTable = (props) => <Table columns={columns} dataSource={props.returnData.listPosts.posts} />;

export default ResourceTable;