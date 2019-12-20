import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const styles={
    h1: {
        // marginTop: '25vh',
        color: 'lightgrey',
        display: 'inline-block',
        fontSize: '30px'
    },
    button: {
        // color: 'grey',
        // padding: '1%',
        backgroundColor: 'inherit',
        // borderColor: 'grey'
         display:"block",
         padding:"0.35em 1.2em",
         border:"0.1em solid black",
         margin:"0 0.3em 0.3em 0",
         borderRadius:"0.12em",
         boxSizing: "border-box",
         textDecoration:"none",
         fontWeight:"300",
         color:"black",
         textAlign:"center",
         transition: "all 0.2s",
         fontFamily: 'fantasy',
         fontWeight: 'bold'
    },
    htmlstart: {
        color: 'CornflowerBlue',
        fontFamily: "cursive"

    },
    bodystart: {
        color: 'CornflowerBlue',
        fontFamily: "cursive",
        marginLeft: "13%"
    },
    h1start: {
        color: 'CornflowerBlue',
        marginTop: '20vh',
        fontFamily: "cursive",
        marginLeft: '20%'
    },
    h1end: {
        color: 'CornflowerBlue',
        fontFamily: "cursive",
        marginLeft: '20%'
    },
    buttonstart: {
        marginTop: '5%',
        color: 'CornflowerBlue',
        fontFamily: "cursive",
        marginLeft: '20%'
    },
    bodyend: {
        marginTop: '20vh',
        color: 'CornflowerBlue',
        fontFamily: "cursive",
        marginLeft: "13%"
    },
    container: {
        marginLeft: '10%'
    }
}
const tags = {
    htmlstart: "<html>",
    bodystart: "<body>",
    h1start: "<h1>",
    htmlend: "</html>",
    bodyend: "</body>",
    h1end: "</h1>",
    buttonstart: "<button>",
    buttonend: "</button>",
}
const Newlanding = () => {

    return(

        <>
        
        <br></br> 
        <div className="container">
        {/* <p className="htmlstart">{tags.htmlstart}</p>
        <p className="bodystart">{tags.bodystart}</p>       
            <p className="h1start">{tags.h1start}</p> */}
            <center> 
            {/* <p className="nameh1">Chase Lipscomb Web Developer</p> */}
            <div class="typewriter">
  <h1>Chase Lipscomb Web Developer</h1>
</div>
            </center>
            {/* <p className="h1end">{tags.h1end}</p>
            <p className="buttonstart">{tags.buttonstart}</p> */}
            <center> 
            <a href='/Portfolio'><button style={styles.button}
href='/Portfolio'                onMouseOut={({target})=>{
                    target.style.color='darkslategrey'
                    target.style.borderColor='darkslategrey'
                }}
                onMouseOver={({target})=>{
                    target.style.color='white'
                    target.style.borderColor='white'
                    }}>View Work</button></a>
            </center>
            {/* <p className="h1end">{tags.buttonend}</p>
            <br></br>
            <p className="bodyend">{tags.bodyend}</p>
            <p className="htmlstart">{tags.htmlend}</p> */}
            </div>

        </>

    )
}
export default Newlanding