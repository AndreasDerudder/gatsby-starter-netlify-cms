import React from 'react'
import PropTypes from 'prop-types'
import { LidmaatschapPageTemplate } from '../../templates/lidmaatschap-page'

const LidmaatschapPagePreview = ({ entry, getAsset }) => {
    const entryTestimonials = entry.getIn(['data', 'testimonials']);
    const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

    const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans']);
    const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];

    return (
        <LidmaatschapPageTemplate
            image={getAsset(entry.getIn(['data', 'image']))}
            title={entry.getIn(['data', 'title'])}
            heading={entry.getIn(['data', 'heading'])}
            description={entry.getIn(['data', 'description'])}
            testimonials={testimonials}
            pricing={{
                heading: entry.getIn(['data', 'pricing', 'heading']),
                description: entry.getIn(['data', 'pricing', 'description']),
                plans: pricingPlans,
            }}
        />
    )
};

LidmaatschapPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default LidmaatschapPagePreview