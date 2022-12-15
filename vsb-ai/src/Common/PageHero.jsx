import React from 'react';
import {Badge} from 'react-bootstrap'

const BadgeList = ({tags}) => {
    return (
        tags.map(t => {
            return (<Badge key={t} variant="light" className="mr-2">{t}</Badge>);
            })
    );
};

export const PageHero = ({title, lead, tags, cssClasses='', cssYPadding='py-6'}) => {
    return (
        <div className={`jumbotron vertical-center jumbotron-fluid text-left base-hero ${cssYPadding} ${cssClasses}`}>
                <div className="container">
                    <h1 className="display-4 text-white">{title}</h1>
                    <p className="lead text-white">{lead}</p>
                    <div>
                        {tags && <BadgeList tags={tags} />  }                           
                    </div>
                </div>
            </div>
    )
}

export default PageHero;