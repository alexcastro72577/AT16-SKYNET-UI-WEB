import ResourceModalUpdate from './ResourceModalUpdate';
import ResourceModalDelete from './ResourceModalDelete';
import { Space, Table} from 'antd';
const { Column } = Table;


const ResourceTable = (props) => (
  <Table dataSource={props.envio.listPosts.posts}>    
    <Column title="Name" dataIndex="resource_name" key="name" />
    <Column title="Type" dataIndex="resource_type" key="type" />
    <Column title="Model" dataIndex="resource_model" key="model" />
    <Column title="State" dataIndex="resource_state" key="state" />
    <Column
      title="Actions"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <ResourceModalUpdate resource_name={props.envio.listPosts.posts.resource_name}/>
          <ResourceModalDelete/>
        </Space>
      )}
    />
  </Table>
);

export default ResourceTable;