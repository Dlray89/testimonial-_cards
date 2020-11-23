import React from 'react'
import './App.css';
import { Avatar, Card, CardContent, CardHeader, makeStyles } from '@material-ui/core'
import danial_pic from './images/image-daniel.jpg'
import Jeanette_pic from './images/image-jeanette.jpg'
import Jonathan_pic from './images/image-jonathan.jpg'
import kira_pic from './images/image-kira.jpg'
import patrick_pic from './images/image-patrick.jpg'
import quotes from './images/bg-pattern-quotation.svg'

const useStyle = makeStyles((theme) => ({
  box_one:{
  width:'60%',
  
  marginRight: '2%',
  background: 'hsl(263, 55%, 52%)',
  backgroundImage:'url('+ quotes +')',
  
  color:'hsl(0, 0%, 100%)',
  borderRadius:'10px',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'right',
  backgroundPositionY:'5%',
  backgroundPositionX:'75%',
  boxShadow:'4px 5px 10px black',
  [theme.breakpoints.down('xs')]:{
    
    width:'97%',
    marginBottom:'2%'
  }

    
  },
  box_two:{
    width: '22%',
    borderRadius:'10px',

    background:'hsl(217, 19%, 35%)',
    color:'hsl(0, 0%, 100%)',
    boxShadow:'4px 5px 10px black',
    [theme.breakpoints.down('xs')]:{
      
      width:'97%',
      marginBottom:'2%'
    }

  },
  box_three:{
  width: '22%',
  borderRadius:'10px',

  margin: '0% 2%',
  background:'hsl(0, 0%, 100%)',
  boxShadow:'4px 5px 10px black',
  [theme.breakpoints.down('xs')]:{
    
    width:'98%',
    marginBottom: '3%',

   

  }
  },
  box_four:{
    borderRadius:'10px',

    width: '60%',
    background:'hsl(219, 29%, 14%)',
    color:'hsl(0, 0%, 100%)',
    boxShadow:'4px 5px 10px black',
    [theme.breakpoints.down('xs')]:{
      width:'99%',
    
    }
  },
  box_five:{
    borderRadius:'10px',

  width: '100%',
  marginTop: '4%',
  background:'hsl(0, 0%, 100%)',
  boxShadow:'4px 5px 10px black',
  [theme.breakpoints.down('xs')]:{
    
    boxSizing:'border-box'
  }
  }

}))

function App() {

  const classes = useStyle()
  return (
    <div className='mainContainer'>
    <div className='firstContainer'>

      <div className='container1'>
      <Card className={classes.box_one}>
      <CardHeader style={{}}  
    avatar={
      <Avatar aria-aria-label='name' className='avatar'>
        <img  src={danial_pic} />
      </Avatar>
    }
    title='Daniel Clifford '
    subheader='Verified Graduate'
    subheaderTypographyProps={{color:'hsl(0, 0%, 100%)'}}
    />

    <CardContent style={{marginTop:'0%', padding:'2%', boxSizing:'border-box'}}>
        <p className='box_one_text'>
        I recieved a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I Honestly feel I got every penny's worth.</p>
        <p className='box_one_text2'>
        'I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing exoeriences here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most gueling time - of my life. Since completing the course. I've successfully switched careers, working as a Software Engineer at a VR startup.'</p>
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
    <CardContent style={{marginTop:'0%', padding:'2%', boxSizing:'border-box'}}>
      <p className='box_two_text'>
      The team was very supportive and lept me motivated
      </p>

      <p className='box_two_text2'>
      '
      I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself.'</p>
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
    <CardContent style={{marginTop:'0%', padding:'2%', boxSizing:'border-box'}}>
      <p className='box_three_text'>
        An overall wonderful and rewarding experience
      </p>
      <p className='box_three_text2'>
      'Thank you for the wonderful experience! I now habe a job I really enjoy and make a good living while doing something I love.'</p>
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
    <CardContent style={{marginTop:'0%', padding:'2%', boxSizing:'border-box'}}>
     
      <p className='box_four_text'>Awesome teaching support from TAs who did bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</p>
       <p className='box_four_text2'>'The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.'</p>
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
        <CardContent style={{marginTop:'0%', padding:'2%', boxSizing:'border-box'}}>
          <p className='box_five_text'>Such a life-changing experience. Highly recommended!</p>
          <p className='box_five_text2'>'Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!'</p>
        </CardContent>
       
      </Card>

    </div>
    </div>
  );
}

export default App;
