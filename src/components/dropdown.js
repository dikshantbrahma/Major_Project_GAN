import React from 'react'
import { Dropdown, Button } from 'semantic-ui-react'

let ImageData = require('./../images/img.json');

const DropdownImgSelection = () => (
  <div>
  <Dropdown
    placeholder='Select Image'
    selection
    options={ImageData}
    value={ImageData.value}
  />
  <Button onClick={loadImageTabPane(ImageData[0].value)}>Click Here</Button>
  </div>
)



const loadImageTabPane = (props) =>{
  console.log(props);
}

export default DropdownImgSelection
