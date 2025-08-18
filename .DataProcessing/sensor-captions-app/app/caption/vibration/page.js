// ROUTE: DOMAIN/caption/vibration
// This is an implementation prototype of a Vibration Component
// When triggered, the vibration component will vibrate the device (if supported) and display a message
// If not supported, it will display a message. 
// This will also expose different vibration patterns available on the device to explore differnet expressions. 

'use client';

import React, { useState, useEffect } from 'react';
import { Button, Container, Header, Message, Segment } from 'semantic-ui-react';
import { Remote } from '../../websocket/Remote';
import { VIBRATION_PATTERNS } from '@/AppConfig';
import VibrationPlayer from './VibrationPlayer';



const VibrationComponent = () => {
    const [vibrationSupported, setVibrationSupported] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (navigator.vibrate) {
            setVibrationSupported(true);
        } else {
            setMessage('Vibration is not supported on this device.');
        }
    }, []);

    const handleVibrate = (pattern) => {
        if (vibrationSupported) {
            console.log('Vibrating with pattern:', pattern);
            navigator.vibrate(pattern);
            // setTimeout(()=> navigator.vibrate(pattern), 1000);
            setMessage(`Vibrating with pattern: ${JSON.stringify(pattern)}`);
        } else {
            setMessage('Vibration is not supported on this device.');
        }
    };

    return (
        <Container style={{ marginTop: '20px' }}>
            <Header as='h2' textAlign='center'>
                Vibration Component
            </Header>
            <VibrationPlayer/>         
        </Container>
    );
};

export default VibrationComponent;

