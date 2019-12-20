import React from 'react';

const styles = {
    h1: {
        fontFamily: 'fantasy',
        marginTop: '5%',
    }
}
const Skills = () => {

    return (

        <>
            <div className='portfoliocontainer'>
                <div className="skillsportfolio">
                    <center>
                    <center><h1 style={styles.h1}><b>Skills</b></h1></center>
                        <main><h2>Languages: </h2> <h4>JavaScript, HTML/CSS</h4></main>
                        <main><h2>Technologies: </h2> <h4>React, jQuery, Express, Node, ES6, </h4></main>
                        <main><h2>DataBases: </h2> <h4>MongoDB, MySQL, Sequelize</h4></main>
                        <main><h2>Soft-Skills: </h2> <h4>Communication, Dedication, Problem-Solving, Leadership</h4></main>
                    </center>
                </div>
            </div>
        </>
    )
}
export default Skills