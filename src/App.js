import React from 'react'
import './App.css';
import { Avatar, Card, CardContent, CardHeader, makeStyles } from '@material-ui/core'
import danial_pic from './images/image-daniel.jpg'
import Jeanette_pic from './images/image-jeanette.jpg'
import Jonathan_pic from './images/image-jonathan.jpg'
import kira_pic from './images/image-kira.jpg'
import patrick_pic from './images/image-patrick.jpg'

const useStyle = makeStyles((theme) => ({
  box_one:{
  border: 'solid 2px blue',
  width:'60%',
  height: '40vh',
  marginRight: '2%',
  background: 'hsl(263, 55%, 52%)',
  color:'hsl(0, 0%, 100%)'
    
  },
  box_two:{
    width: '22%',
    height: '40vh',
    border: 'solid 2px blue',
    background:'hsl(217, 19%, 35%)',
    color:'hsl(0, 0%, 100%)'

  },
  box_three:{
  width: '22%',
  height: '40vh',
  border: 'solid 2px blue',
  margin: '0% 2%',
  background:'hsl(0, 0%, 100%)'
  },
  box_four:{
    border: 'solid 2px blue',
    width: '60%',
    height: '40vh',
    background:'hsl(219, 29%, 14%)',
    color:'hsl(0, 0%, 100%)'
  },
  box_five:{
  border: 'solid 2px blue',
  width: '100%',
  height: '83.5vh',
  marginTop: '4%',
  background:'hsl(0, 0%, 100%)'
  }

}))

function App() {

  const classes = useStyle()
  return (
    <div className='mainContainer'>
    <div className='firstContainer'>

      <div className='container1'>
      <Card className={classes.box_one}>
      <CardHeader  
    avatar={
      <Avatar aria-aria-label='name' className='avatar'>
        <img  src={danial_pic} />
      </Avatar>
    }
    title='Daniel Clifford '
    subheader='Verified Graduate'
    subheaderTypographyProps={{color:'hsl(0, 0%, 100%)'}}
    />
    <CardContent>
        <p className='box_one_text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </p>
        <p className='box_one_text2'>
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        </p>
    </CardContent>
        


     
</Card>

<Card className={classes.box_two}>
<CardHeader  
    avatar={
      <Avatar aria-aria-label='name' className='avatar'>
        <img src={Jeanette_pic} />
      </Avatar>
    }
    title='Jeanette Harrison '
    subheader='Verified Graduate'
    subheaderTypographyProps={{color:'white'}}
    />
    <CardContent>
      <p className='box_two_text'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      </p>

      <p className='box_two_text2'>
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.''
      </p>
    </CardContent>

</Card>
</div>

<div className='container2'>
  <Card className={classes.box_three}>
  <CardHeader  
    avatar={
      <Avatar aria-aria-label='name' className='avatar'>
        <img src={patrick_pic} />
      </Avatar>
    }
    title='Patrick Abrams '
    subheader='Verified Graduate'
    />
    <CardContent>
      <p className='box_three_text'>
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className='box_three_text2'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </CardContent>
    

  </Card>

  <Card className={classes.box_four}>
  <CardHeader  
    avatar={
      <Avatar aria-aria-label='name' className='avatar'>
        <img src={Jonathan_pic} />
      </Avatar>
    }
    title='Jonathn walters '
    subheader='Verified Graduate'
    subheaderTypographyProps={{color:'white'}}
    />
    <CardContent>
     
      <p className='box_four_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pharetra diam sit amet nisl suscipit. In hendrerit gravida rutrum quisque non tellus orci ac auctor</p>
      <p className='box_four_text2'>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis aliquam ut porttitor leo. Facilisi nullam vehicula ipsum a arcu cursus vitae. A arcu cursus vitae congue. Feugiat in ante metus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'</p>
    </CardContent>

  </Card>

</div>

    
    </div>
    <div className='secondary_container'>
      
      <Card className={classes.box_five}>
        <CardHeader  
        avatar={<Avatar>
          <img src={kira_pic} />
        </Avatar>} 
        title='Kira Whittle'
        subheader='Verified Gradute' 
        
        />
        <CardContent>
          <p className='box_five_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          <p className='box_five_text2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit amet. Diam volutpat commodo sed egestas egestas fringilla. Vitae turpis massa sed elementum tempus. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Lorem donec massa sapien faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Tristique senectus et netus et malesuada fames ac turpis.
          </p>
        </CardContent>
       
      </Card>

    </div>
    </div>
  );
}

export default App;
