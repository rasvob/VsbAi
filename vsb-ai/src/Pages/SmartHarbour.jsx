import React, { useState } from 'react'
// eslint-disable-next-line 
import { PageHero } from "../Common/PageHero";
import Section from '../Common/Section';
import { Accordion, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const SmartHarbour = (props) => {
    const [tags] = useState(['Computer vision', 'Deep learning', 'Object tracking', 'Text detection', 'Optical character recognition', 'Video processing', 'Multimedial data']);
    return (
        <div>
            <PageHero title='Smart harbour' lead='Digitalization of water transport in recreational harbours of the Czech Republic' tags={tags} cssYPadding='py-6' cssClasses='bg-primary' />

            <main className='container'>
                <Section heading="What is it all about?">
                    <p>Are you drowning in a sea of video footage without a boat in sight? Let our object detection and text detection algorithms rescue you! With our expert technology, we can quickly and easily detect and track those elusive boats, even in the choppiest of waters. And once we've spotted those boats, our OCR technology kicks in to extract the all-important licence plate numbers. No more manual searching, no more squinting at the screen - just efficient, automated boat-spotting. So why wait? Join our team and help us make this project a reality. And remember, a smart harbour is a happy harbour - so don't be a boat-dummy, use our technology!</p>
                </Section>

                <Section heading="Who are we looking for?">
                    <p>We're working on a cool project that uses technology to automate the operation of a recreational harbour in the Czech Republic. We're looking for talented students who are interested in computer vision, machine learning, or related fields to help us with the tasks involved in this project. If you're looking for a cool project to work on for your thesis or just want to get some hands-on experience, we'd love to hear from you.</p>
                </Section>

                <Section heading="What are the tasks?">
                    <p>
                    The project involves several tasks related to the automation of the operation of a recreational harbour. These tasks include:
                    </p>

                    <ul>
                        <li>Scene change detection: Using existing or developed approaches to identify whether a boat is present in an image.</li>
                        <li>Object detection and tracking: Using computer vision algorithms to identify and track the movements of boats in the harbour.</li>
                        <li>Text detection and OCR: Using machine learning algorithms to extract the licence plate numbers of boats in the harbour.</li>
                    </ul>

                    <p>
                    As a student, you could work on any of these tasks and contribute to the development of a comprehensive solution for the automation of the recreational harbour.
                    </p>
                </Section>

                <Section heading="A detailed description of the project">
                    <p>The project “Smart harbour” aims to leverage technology to automate the operation of a recreational harbour in the Czech Republic. The main goals of the project are to monitor the harbour occupancy and to evaluate and register vessels entering the harbour. To achieve these goals, the project is divided into three main parts. The first part focuses on scene change detection, using existing or developed approaches to identify whether a boat is present in an image. The second part focuses on object detection and tracking, using computer vision algorithms to identify and track the movements of boats in the harbour. The final part focuses on text detection and OCR, using machine learning algorithms to extract the “licence plate numbers” of boats in the harbour. </p>
                </Section>

                <div className='py-6'>
                <Accordion defaultActiveKey="-1">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Scene change detection
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body><p>The task of scene change detection (SCD) involves identifying changes between two scenes captured at different times in the same location. In this case, the goal is to use SCD to distinguish between images with and without boats and extract the sequences with boats to reduce the amount of data that needs to be processed. This may involve using existing SCD approaches or developing a new approach to identify the visual differences between the two types of scenes. The result of this task will be a reduced dataset of video sequences containing only those with boats present.</p></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Object detection and tracking
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <p>
                        The other task involves object detection and tracking algorithms to identify and track the movements of boats in a video dataset. The goal is to use a known or developed approach to detect the presence of boats in the images and mark them with rectangular bounding boxes. Because the dataset consists of video sequences, it is important to extend the object tracking capabilities to track the boat across multiple frames. The approach must be able to overcome occlusion caused by poles, people, and other objects in the video. The result of this task will be a bounding box position of the boat for each input video sequence, providing information about the location and movements of boats in the harbour.
                        </p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Text detection and OCR
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <p>
                        The last task aims to use text detection and optical character recognition (OCR) algorithms to extract licence plate numbers from images of boats. The input of this task is a video sequence with a bounding box around the detected boat. The goal is to use text detection algorithms to identify the location of the licence plate number in the bounding box. Then, use OCR to extract the number and convert it from an image into text. The extracted licence plate numbers will be used for tracking the movements of sailing boats in and out of the harbour, along with timestamps of these events. This will provide additional information about the operation of the harbour, allowing improved monitoring and management.
                        </p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                </div>

                <Section heading="Ha! I bet we've got your attention!">
                <p>Are you ready to embark on a wild adventure with the machine learning and computer vision algorithms on the market? If so, give us a shout! We're always looking for new ports to explore and new ships to add to our fleet. </p>

                {/* <a href="mailto:jan.platos@vsb.cz"></a> */}
                {/* <a href="mailto:jan.platos@vsb.cz">Jan Platoš</a>, <a href="mailto:radek.svoboda@vsb.cz">Radek Svoboda</a> or <a href="mailto:petr.prokop@vsb.cz@vsb.cz">Petr Prokop</a> */}
                <p>
                If you want to get more information or want to start a collaboration, do not hesitate to <Link to="/contact">contact us </Link>.
                </p>

                <p>Together, we can make waves in the world of automation and set sail towards a brighter future!</p>
                </Section>
            </main>
        </div>
    );

    
}


export default SmartHarbour;