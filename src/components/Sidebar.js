import React from 'react';

const styles = {
    bar: {
        position: 'fixed',
        top: '0',
        left: '0',
        height: '1000px',
        minWidth: '75px',
        width: '8%',
        backgroundColor: 'rgb(24,24,24',
        textAlign: 'center',
        float: 'left'
    },
    black: {
        backgroundColor: 'black',
        marginBottom: "20vh"

    },
    secondtier: {
        marginBottom: '15vh'
    },
    seconditem: {
        display: 'block'
    },
    icons: {
        width: '70%',
        color: 'slategrey',
    },
    icon: {
        display: 'block',
        marginBottom: '25%',
        color: 'slategrey',
    },
    white: {
        color: 'white'
    }
}

const Sidebar = () => {

    return(

        <React.Fragment>
            <div style={styles.bar}>
                <div style={styles.black}>
                <div className="w3-padding w3-xxxlarge w3-text-white">
                <a href='/'><i className="fa fa-home"  style={styles.white} onMouseOut={({target})=>target.style.color='grey'}
                    onMouseOver={({target})=>target.style.color='Cornflowerblue'}></i></a>
                </div>
                </div>
                <div style={styles.secondtier}>
                <div className="w3-padding w3-xxlarge w3-text-grey">
                <a href='/About'><i className="icon" className="fa fa-user-circle" style={styles.icons} 
                    onMouseOut={({target})=>target.style.color='grey'}
                    onMouseOver={({target})=>target.style.color='Cornflowerblue'} ></i></a>
                <a href='/Skills'><i className="fas fa-cog" style={styles.icons} onMouseOut={({target})=>target.style.color='grey'}
                    onMouseOver={({target})=>target.style.color='Cornflowerblue'} ></i></a>
                <a href='/Portfolio'><i className="far fa-eye" style={styles.icons} onMouseOut={({target})=>target.style.color='grey'}
                    onMouseOver={({target})=>target.style.color='Cornflowerblue'} ></i></a>
                {/* <a href='/Contact'><i className="far fa-envelope" style={styles.icons} onMouseOut={({target})=>target.style.color='grey'}
                    onMouseOver={({target})=>target.style.color='Cornflowerblue'} ></i></a> */}
                </div>
                </div>
                <div className="w3-padding w3-xlarge w3-text-grey">
                <a href='https://www.linkedin.com/in/chase-lipscomb-982b50148/' onMouseOut={({target})=>target.style.color='grey'}
                    onMouseOver={({target})=>target.style.color='Cornflowerblue'}><i className="fab fa-linkedin" style={styles.icon}></i></a>
                <a href='https://github.com/chaselipscomb' onMouseOut={({target})=>target.style.color='grey'}
                    onMouseOver={({target})=>target.style.color='Cornflowerblue'}><i className="fab fa-github" style={styles.icon}></i></a>
                <a href='https://www.instagram.com/_chasel/' onMouseOut={({target})=>target.style.color='grey'}
                    onMouseOver={({target})=>target.style.color='Cornflowerblue'}><i className="fab fa-instagram" style={styles.icon}></i></a>
                <a href='https://www.facebook.com/ChaseLipscomb97' onMouseOut={({target})=>target.style.color='grey'}
                    onMouseOver={({target})=>target.style.color='Cornflowerblue'}><i className="fab fa-facebook" style={styles.icon}></i></a>


                </div>
                
                </div>
            
        </React.Fragment>
    )
}
export default Sidebar