import { Link } from 'react-router-dom'
import Resources from '../components/Resources'
import Persons from '../components/Persons'
import BookingTabs from '../components/BookingComponents/BookingTabs'
import { Tabs } from 'antd';
const { TabPane } = Tabs;


const BookingPage = () => {
    return (
      <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Booking" key="1">
      Booking
      </TabPane>
      <TabPane tab="Person" key="2">
      <Persons/>
      </TabPane>
      <TabPane tab="Resource" key="3">
      <Resources/>
      </TabPane>
    </Tabs>
        
    )
}

export default BookingPage
