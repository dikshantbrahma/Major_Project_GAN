import React, {Component} from 'react';
import {Dropdown, Button, Image, TabPane, Grid} from 'semantic-ui-react'

var ImageData=require('./json/img.json');

class TestSamplePage extends Component{

  constructor(props){
    super(props);
    this.state={currentValue: '', image:''};
    this.updateImg=this.updateImg.bind(this);
  }

  handleChange = (e, data) => (
    this.setState({currentValue:data.value})
  )
  
  updateImg(){
    var ImgValue=this.state.currentValue;
    if(ImgValue){
      var pos = parseInt(ImgValue.slice(6));
      var src= process.env.PUBLIC_URL+'/images/';
      src=src.concat(ImageData[pos-1].imgsrc);
      this.setState({image:src});
    }
  }

  render(){
    return(
      <div>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={13}>
              <Dropdown 
                placeholder='Select Epoch Number'
                name="Image"
                onChange={this.handleChange }
                selection
                search
                fluid
                options={ImageData}
                wrapSelection
              />
            </Grid.Column>
            <Grid.Column width={3}>
              <Button onClick={this.updateImg}  primary fluid>
                Load Image
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        <br />
        <TabPane><Image src={this.state.image} fluid/></TabPane>
      </div>
    )
  }
}
export default TestSamplePage;
