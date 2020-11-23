import React from 'react'
import PropTypes from 'prop-types'
import { TrainingPostTemplate } from '../../templates/training-post'

const TrainingPostPreview = ({ entry, widgetFor, getAsset }) => {
    const tags = entry.getIn(['data', 'tags']);
    return (
        <TrainingPostTemplate
            content={widgetFor('body')}
            description={entry.getIn(['data', 'description'])}
            tags={tags && tags.toJS()}
            title={entry.getIn(['data', 'title'])}
            image={getAsset(entry.getIn(['data', 'image']))}
        />
    )
}

TrainingPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default TrainingPostPreview
