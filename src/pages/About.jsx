import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

function About() {
  return (
    <main className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-4">

      <Card className='w-full max-w-3xl sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-auto rounded-lg relative mt-8  bg-linear-to-b from-gray-500 to-gray-300 '      sx={{ color: 'text.primary',    background: 'linear-gradient(to bottom, #ef4444, #ffffff)', // gray-500 → gray-300
}}>

        <CardActionArea className='flex flex-col'>
          
          <CardContent>
            <Typography 
              gutterBottom 
              variant="h5" 
              component="div" 
              className='text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-4'
            >
              NIKE History
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary',}} className='text-sm sm:text-base md:text-lg'>
              Nike’s journey from a small distributor to the world's most valuable sports brand began in 1964, when University of Oregon track athlete Phil Knight and his coach Bill Bowerman founded Blue Ribbon Sports. Initially operating as a distributor for the Japanese shoemaker Onitsuka Tiger, the duo famously sold shoes out of the trunk of Knight's car at track meets. In 1971, the company rebranded as Nike, taking its name from the Greek goddess of victory, and introduced the iconic Swoosh logo designed by student Carolyn Davidson for just $35. That same year, Bowerman revolutionized athletic footwear by using his wife's waffle iron to create a high-traction rubber sole, leading to the breakthrough Waffle Trainer. Over the following decades, Nike cemented its cultural dominance through innovative "Air" technology, the 1984 signing of Michael Jordan, and the globally recognized "Just Do It" slogan launched in 1988. Today, Nike remains a global leader in sports and fashion, constantly evolving through digital expansion and high-profile athlete partnerships.In the 1990s and 2000s, Nike evolved from a footwear company into a global cultural powerhouse by mastering the art of brand storytelling. They moved beyond simple product features to sell an "athlete’s mindset," personified by superstars like Tiger Woods, Serena Williams, and LeBron James. This era also saw the company navigate significant challenges, including a massive public overhaul of its labor practices and supply chain in the late 90s, which ultimately led Nike to become a leader in corporate sustainability and transparency.
              The digital era sparked a second major evolution, shifting Nike from a traditional wholesaler to a tech-driven retailer. The launch of the Nike+ ecosystem in 2006 (originally a partnership with Apple) signaled a move toward tracking data and building direct relationships with customers. Today, Nike’s evolution is defined by digital scarcity—using the SNKRS app to turn shoe releases into high-stakes events—and a commitment to "Direct-to-Consumer" (DTC) sales. By integrating 3D-printed materials and sustainable "Move to Zero" initiatives, the brand has transformed into a high-tech fashion house that dictates global trends as much as it supports elite performance.
            </Typography>
          </CardContent>

        </CardActionArea>

        <CardActions className="justify-center  sm:justify-end p-4 ">
          <Button 
            variant='contained'  
            className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'
            onClick={()=>{window.open("https://about.nike.com/en/","_blank");}}
          >
            More
          </Button>
        </CardActions>

      </Card>

    </main>
  )
}

export default About;