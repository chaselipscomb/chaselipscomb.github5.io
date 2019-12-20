import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const styles= {
    container:{
        height: '100vh'
    },
    htmlstart: {
        position: 'relative',
        top: '0vh',
        left: '0vh',
        color: 'grey',
        fontFamily: "cursive",
        marginLeft: '10%',
    },
    bodystart: {
        position: 'relative',
        top: '0vh',
        left: '0vh',
        color: 'grey',
        fontFamily: "cursive",
        marginLeft: '15%',
        // marginTop: '1%'
    },
    h1start: {
        position: 'relative',
        top: '0vh',
        left: '0vh',
        color: 'grey',
        fontFamily: "cursive",
        marginLeft: '20%',
        // marginTop: '13%'

    },
    textstart: {
        position: 'relative',
        top: '0vh',
        left: '0vh',
        color: 'white',
        fontFamily: "cursive",
        marginLeft: '25%',
    },
    textend: {
        position: 'relative',
        top: '0vh',
        left: '0vh',
        color: 'white',
        fontFamily: "cursive",
        marginLeft: '25%',
    },
    h1end: {
        position: 'relative',
        top: '0vh',
        left: '0vh',
        color: 'grey',
        fontFamily: "cursive",
        marginLeft: '20%',
    },
    bodyend: {
        position: 'relative',
        top: '15vh',
        left: '0vh',
        color: 'grey',
        fontFamily: "cursive",
        marginLeft: '15%',
        // marginTop: '13%'
    },
    htmlend: {
        position: 'relative',
        top: '0vh',
        left: '0vh',
        color: 'grey',
        fontFamily: "cursive",
        marginLeft: '10%',
        // marginTop: '1%'
    },
    tags: {
        color: 'grey',
        fontFamily: "cursive"
    },
    htmlrow: {
        height: `2vh`
    },
    bodyrow: {
        height: `17vh`,
    },
    h1row: {
        height: `35vh`
    }
}
const tags = {
    htmlstart: "<html>",
    bodystart: "<body>",
    h1start: "<h1>",
    htmlend: "</html>",
    bodyend: "</body>",
    h1end: "</h1>",
}
const Landing = () => {

    return(

        <>
        <Container style={styles.container}>
        <br></br>    
        <Row style={styles.htmlrow}><p style={styles.htmlstart}>{tags.htmlstart}</p></Row>
        <Row style={styles.bodyrow}><p style={styles.bodystart}>{tags.bodystart}</p></Row>
        <Row style={styles.h1row}><p style={styles.h1start}>{tags.h1start}</p>
        <h1>Hi,</h1>
        <h1>I'm Chase,</h1>
        <h1>web developer</h1>
        <p>Front End Developer / Freelancer</p>
        </Row>
        <Row><p style={styles.h1end}>{tags.h1end}</p></Row>
        <Row style={styles.bodyrow}><p style={styles.bodyend}>{tags.bodyend}</p></Row>
        <Row style={styles.htmlrow}><p style={styles.htmlend}>{tags.htmlend}</p></Row>
        </Container>
        {/* <Container style={styles.container}>
        <br></br>    
        <p style={styles.htmlstart}>{tags.htmlstart}</p>
        <p style={styles.bodystart}>{tags.bodystart}</p>
        <p style={styles.h1start}>{tags.h1start}</p>
        <h1 style={styles.textstart}>Chase Lipscomb,</h1>
        <h1 style={styles.textend}>Web Developer</h1>
        <p style={styles.h1end}>{tags.h1end}</p>
        <p style={styles.bodyend}>{tags.bodyend}</p>
        <p style={styles.htmlend}>{tags.htmlend}</p>
    </Container >*/ }
        </> 
    )
}
export default Landing