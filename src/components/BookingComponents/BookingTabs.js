import BookingTable from './BookingTable';
import BookingModalCreate from './BookingModalCreate';
import PersonTable from './PersonTable';
import PersonModalCreate from './PersonModalCreate';
import ResourceTable from './ResourceTable';
import ResourceModalCreate from './ResourceModalCreate';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const BookingTabs = () => (
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Booking" key="1">
      <BookingModalCreate/>
      <BookingTable/>
    </TabPane>
    <TabPane tab="Person" key="2">
        <PersonModalCreate/>
        <PersonTable/>
    </TabPane>
    <TabPane tab="Resource" key="3">
        <ResourceModalCreate/>
        <ResourceTable/>
    </TabPane>
  </Tabs>
);

export default BookingTabs;