import React, { useState } from 'react'
import {Badge, Button, OverlayTrigger, Tooltip} from 'react-bootstrap'
import Section from './Common/Section';
// eslint-disable-next-line 
import { Link } from 'react-router-dom';

const BadgeList = ({tags}) => {
    return (
        tags.map(t => {
        return (<Badge key={t} variant="light" className="mr-2">{t}</Badge>);
        })
    );
};

export const NaturalGasForecasting = (props) => {
        const [tags] = useState(['Time series','Forecasting', 'Machine learning', 'Big data', 'Natural gas consumption']);
        return (
            <div>
                <div className="jumbotron jumbotron-fluid forecast-hero text-left py-6 vertical-center">
                    <div className="container">
                        <h1 className="display-4 text-white">Natural gas forecasting</h1>
                        <p className="lead">Short-term natural gas consumption forecasting from long-term data collection</p>
                        <div>
                            <BadgeList tags={tags} />                            
                        </div>
                    </div>
                </div>

                <main className="container">
                    <div>
                    
                    </div>

                    <Section heading="Our research">
                        <p>The development of natural gas consumption forecasting tools is an interesting application of forecasting models. Complicated and expensive logistics of this commodity makes increasing precision of the developed tools absolutely crucial task. Plenty of research efforts were already performed in this area. However, datasets used in these works often could not be published and made accessible to other researchers. This complicates further research and comparison of forecasting methods. We have addressed this issue in our work, and we have prepared a new dataset. We have taken into account state of the art research works and included many data features that were previously proven to have a significant impact on the model precision. We have also conducted a baseline evaluation of machine learning algorithms used in the time series forecasting domain to validate the provided data's high usability. Results are included in our work. Moreover, we made this dataset publicly available for everyone to use for their research purposes.</p>
                    </Section>

                    <Section heading="Dataset overview">
                        <p>
                        Dataset covers six whole years from January 1, 2013 to December 31, 2018. All data features are available at an hourly frequency. The whole dataset is composed of 52,584 data points. These data points were assembled from three main components.
                        </p>

                        <p>
                        The first component was created from consumption data. Prague is the capital city of the Czech Republic and its distribution network consisted of 422,926 customers in 2018. Total consumption was 3.82 billion m<sup>3</sup>. Residential sector included 381,914 households (33.3% of consumption). Industrial sector consisted from 177 big (24.8% of consumption), 39,175 medium (18.9% of consumption) and 1,652 small customers (21.9% of consumption). Missing remainder to 100% were operational losses that occurred during distribution, e.g., pipeline leak. The heating season in the Czech Republic is from September 1 to May 31. Usually, it is required for the heating season to begin that the temperature drops below +13 °C for two consecutive days, and no warming is forecasted for the following days. The heating season usually represents about 70% - 75% of the whole year's consumption.
                        </p>

                        <p>
                        The second component includes weather variables. We have used data from the Prague LKPR airport weather station. Airports are required to periodically issue METAR (aerodrome routine meteorological report) information. Those reports are archived and preserved for a long time. 
                        </p>

                        <p>
                        The third component representing economic features are natural gas price data. We have obtained price data from the Czech energy regulation office and included them in the dataset.
                        </p>
                        
                        <h3>Natural gas consumption in July and September 2018</h3>
                        <p>aaa</p>

                        <h3>Raw data example</h3>
                        <p>aaa</p>

                        <OverlayTrigger placement="top" delay={{ show: 50, hide: 400 }} overlay={<Tooltip>Dataset will be publicly available immediately after successful publication of our paper</Tooltip>}>
                            <Button variant="primary disabled" style={{cursor: "pointer"}} size="md">
                                Download
                            </Button>
                        </OverlayTrigger>    
                    </Section>
                    
                    <Section heading="Publications">
                        <p>Coming soon... or at least we hope so <span role="img" aria-label="Smile emoji">&#128521;</span></p>
                    </Section>
                </main>
            </div>
        )
}
export default NaturalGasForecasting;
