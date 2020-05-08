import React, {Component} from 'react';
import {Dropdown, Button, Image, TabPane, Grid, Header} from 'semantic-ui-react'

var AttImageData = require('./json/attImg.json');

class AttributePage extends Component{

  constructor(props){
    super(props);
    this.state={currentAttribute: '', image:''};
    this.updateImg=this.updateImg.bind(this);
  }

  handleChange = (e, data) => (
    this.setState({currentAttribute:data.value})
  )
  
  updateImg(){
    var AttValue=this.state.currentAttribute;
    if(AttValue){
      var pos;
      for(var i=0; i<AttImageData.length; i++){
        if(AttImageData[i].value===AttValue){
          pos=i;
          break;
        }
      }
      var src= process.env.PUBLIC_URL+'/attributed_images/';
      src=src.concat(AttImageData[pos].imgsrc);
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
                placeholder='Select Attribute'
                name="Image"
                onChange={this.handleChange }
                selection
                search
                fluid
                options={AttImageData}
                wrapSelection
              />
            </Grid.Column>
            <Grid.Column width={3}>
              <Button onClick={this.updateImg}  primary fluid>
                Load Current Attribute
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        <br />
        <Grid >
          <Grid.Row columns={4}>
          <Grid.Column>
              <TabPane><Header as='h2'>Original:</Header></TabPane>
            </Grid.Column>
            <Grid.Column>
              <Image src={require('./../original.jpg')}/>
            </Grid.Column>
            <Grid.Column>
              <TabPane><Header as='h2'>Modified:</Header></TabPane>
            </Grid.Column>
            <Grid.Column>
              <TabPane><Image src={this.state.image}/></TabPane>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
export default AttributePage;