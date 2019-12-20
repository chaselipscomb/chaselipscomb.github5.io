import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const styles = {
    info: {
        height: '50px',
        padding: '10px',
        marginTop: '3%'
    },
    infos:  {   
        fontFamily: 'fantasy'
    },
    h1: {
        marginTop: '2%',
        fontFamily: 'fantasy'
    }

    
}
const work = [
    {
        link: "https://herofinder.herokuapp.com/",
        image: "https://chaselipscomb.github.io/assets/Herofinder.PNG",
        name: "Hero Finder"
    },
    {
        link: "https://chaselipscomb.github.io/state/",
        image: "https://chaselipscomb.github.io/assets/State.PNG",
        name: "State Store"
    },
    {
        link: "https://chaselipscomb.github.io/#",
        image: "https://chaselipscomb.github.io/assets/react.PNG",
        name: "Employee Directory"
    },
    {
        link: "https://burgeruci.herokuapp.com/",
        image: "https://chaselipscomb.github.io/assets/burgerapp.PNG",
        name: "Devour Burger"
    },
    {
        link: "https://note-taker-uci.herokuapp.com/",
        image: "https://chaselipscomb.github.io/assets/notetaker.PNG",
        name: "Note Taker"
    },
    {
        image: "https://chaselipscomb.github.io/assets/bookReviewSnippet.PNG",
        link: "https://chaselipscomb.github.io/Project-1/",
        name: "Book Reviewer"
    },
    {
        link: "https://chaselipscomb.github.io/Planner/",
        image: "https://chaselipscomb.github.io/assets/plannerSnippet.PNG",
        name: "Work Day Scheduler"
    },
    {
        link: "https://chaselipscomb.github.io/codequiz/",
        image: "https://chaselipscomb.github.io/assets/codequizSnippet.PNG",
        name: "Code Quiz"
    },
]
const Portfolio = () => {
    const [info1, setInfo1] = useState('')
    const [info2, setInfo2] = useState('')
    

    return(
        <>
        <div className='portfoliocontainer'>
        <center><h1 style={styles.h1}>Portfolio</h1></center>
            <a href={work[0].link} ><img className='img1' src={work[0].image} alt={work[0].name} onMouseOver={(event)=>setInfo1(event.target.alt)} /></a>
            <a href={work[1].link}><img className='img1' src={work[1].image} alt={work[1].name} onMouseOver={(event)=>setInfo1(event.target.alt)} /></a>
            {/* <a href={work[2].link}><img src={work[2].image} alt={work[2].name} onMouseOver={(event)=>setInfo1(event.target.alt)} /></a> */}
            <div style={styles.info}><center><h3 style={styles.infos} ><b>{info1}</b></h3></center></div>
            {/* <a href={work[3].link}><img src={work[3].image} alt={work[3].name} onMouseOver={(event)=>setInfo2(event.target.alt)}  /></a>
            <a href={work[4].link}><img src={work[4].image} alt={work[4].name} onMouseOver={(event)=>setInfo2(event.target.alt)}  /></a>
            <a href={work[5].link}><img src={work[5].image} alt={work[5].name} onMouseOver={(event)=>setInfo2(event.target.alt)}  /></a> */}
            {/* <a href={work[6].link}><img src={work[6].image} alt={work[6].name} onMouseOver={(event)=>setInfo2(event.target.alt)}  /></a> */}
            {/* <div style={styles.info}><center><h3 style={styles.infos}>{info2}</h3></center></div> */}
            {/* <img src={work[7].image} alt="picture" />
            <img src={work[7].image} alt="picture" />
            <img src={work[0].image} alt="picture" />
            <div style={styles.info}><center><h3>information</h3></center></div>  */}
        </div>
        </>
    )
}
export default Portfolio