import React from 'react';
import { SectionHeader } from './SectionHeader';

const Section = (props) => {
    return (
        <div>
            <SectionHeader heading={props.heading} />
            {props.children}
        </div>
    )
}

export default Section;