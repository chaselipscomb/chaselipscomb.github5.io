import React from 'react';

const styles={
    box:{
        position: 'fixed',
        top: '0',
        left: '0',
        height: '1000px',
        minWidth: '75px',
        width: '9%',
        backgroundColor: 'white',
        marginLeft: '1%',
        marginRight: '10%'
    }
}

const Hiddenbox = () => {


    return(
        <>
        <div style={styles.box}>hide</div>
        </>
    )
}
export default Hiddenbox