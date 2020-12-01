import React from 'react';
import './About.css';
import help from './images/help.png';
import test from './images/home1.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const values = [
    {
        "title": "01. User are Family",
        description: "We put family first and from the very beginning our only focus is to provide the best user experience possible and make sure that everything we build makes our user’s lives easier.",
        src: "./images/values/value1.png"
    },
    {
        "title": "02. Gratitude makes Happiness",
        description: "Gratitude is at the heart of our life philosophy. We thank for everything we experience and we believe that’s what makes us optimistic and feeling good.",
        src: "./images/values/value2.png"
    },
    {
        "title": "03. Simpler is Happier",
        description: "We believe that simplicity makes lives happier, not complexity.",
        src: "./images/values/value3.png"
    },
    {
        "title": "04. Respect, Inclusion and Diversity are no-brainers",
        description: "Our founders together represent 4 different nationalities. Respect, Inclusion and Diversity is just in our blood.",
        src: "./images/values/value4.png"
    },
    {
        "title": "05. Work hard until you’re lucky enough to succeed",
        description: "We believe success is the result of tremendous efforts and tireless determination.",
        src: "./images/values/value4.png"
    },
    {
        "title": "06. Serenity and calm are your best allies",
        description: "We believe that we are more likely to make right decisions when we stay calm. Especially during tough times.",
        src: "./images/values/value4.png"
    },
    {
        "title": "07. You can reach ambitious targets without doing evil",
        description: "We set aggressive targets and we’re driven to reach them while holding true to our beliefs.",
        src: "/.images/values/value4.png"
    },
    {
        "title": "08. Loyalty and Reliability build meaningful relationships",
        description: "We’re loyal and reliable and you can hold us on that.",
        src: "/.images/values/value4.png"
    },
    {
        "title": "09. Have Fun!",
        description: "Work is challenging but we believe that the challenge should be fun. We believe that great, creative things are more likely to happen when people are happy and serene.",
        src: "/.images/values/value4.png"
    }
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


class About extends React.Component {


    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed:500,
            slidesToShow:1,
            arrows:false,
            slidesToScroll:1,
            className: "slides",
        //prevArrow: <SliderArrowPrev/>,
        //nextArrow: <SliderArrowNext/>,
        }
        return (
        	<div className="About">
                <div className="mission">
                    <h4>Our Mission</h4>
                    <h1>Simplify anyone’s life and deliver happiness and serenity to all lives</h1>
                    <p>It’s an enormously ambitious and incredibly rewarding mission that we are obsessed with achieving.</p>
                    <p>Our purpose is to make our user’s lives easier, empowering them to discover all about what’s next doors and connect them to their local places. We aim to deliver happiness by offering people time and taking the burden of shopping out of them while ensuring that their desire of convenience won’t hurt any life at any level.</p>
                    <p>This mission is our guardrails to ensure everything that is done by us and our community is true to our purpose, differentiates us from others and helps us meet all our challenges.</p>
                </div>
                <div className="Things">
                    <h4>10 things we believe in</h4>
                    <p>We wrote this list of '9 things we believe in' to share our life philosophy and hopefully inspire incredible people to join us. We hope it does – and you can hold us that this list stays true.</p>
                </div>
                <Slider {...settings}>
                    {values.map(v => <Value key={v.id} {...v} />)}
                </Slider>
        	</div>
       	);
    }
}

class SliderArrowNext extends React.Component {
    render(){
        return(
            <div className="SliderArrowNext">
            {this.props.to}
            </div>
        );
    }
}

class SliderArrowPrev extends React.Component {
    render(){
        return(
            <div className="SliderArrowPrev">
            {this.props.to}
            </div>
        );
    }
}


class Value extends React.Component {

    render() {

        const value = this.props;

        return (
            <div className="Value">
                <div>
                    <h1>{value.title}</h1>
                    <p>{value.description}</p>
                </div>
                <img src={value.src}/>
            </div>

        );
    }
}



export default About;