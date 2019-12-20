import React, { useState, useRef, useEffect } from 'react';

const Name = () => {
    const message = ["C", "h", "a", "s", "e", " ", "L", "i", "p", "s", "c", "o", "m", "b", " ", "W", "e", "b", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"];
    const [txt, setTxt] = useState('');
    const intervalRef = useRef();

        useEffect(() => {
            let index = 0; // init the index

            clearInterval(intervalRef.current); // clear the interval if message changes

            if (!message.length) return; // do nothing if message is empty

            intervalRef.current = setInterval(() => {
                setTxt(t => t + message[index]);

                index += 1;

                if (index === message.length) clearInterval(intervalRef.current); // clear interval when message ends
            }, 1000);


            return () => clearInterval(intervalRef.current); // clear interval if component is unmounted
        }, [message, intervalRef, setTxt]);




        return (
            <>
                <center><h1 className="Name">Chase Lipscomb Web Developer</h1></center>
                <center><h1 className="Name">{txt}</h1></center>
            </>
        )
    }
    export default Name