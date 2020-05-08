import React from 'react'
import { Tab, Image } from 'semantic-ui-react';
import AttributePage from './Attribute';
import TestSamplePage from './TestSamples';

const panes = [
  { menuItem: 'Introduction', render: () => <Tab.Pane><Image src={require('./../our_result.jpg')} fluid/></Tab.Pane> },
  { menuItem: 'Test Samples', render: () =>  <TestSamplePage />},
  { menuItem: 'Attribute', render: () => <AttributePage />},
]

const TabVerticle = () => (
  <Tab
    menu={{ fluid: true, vertical: true }}
    menuPosition='left'
    panes={panes}
  />
)

export default TabVerticle