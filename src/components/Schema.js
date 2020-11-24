import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from "./PreviewCompatibleImage";



const SchemaGrid = ({ gridItems }) => (
    <div className="columns">
        <h3>Schema</h3>
        {console.log(gridItems)}
        {gridItems.map((item) => (
            <div key={item.heading} className="column">
                <section className="section">
                    <h4 className="has-text-centered has-text-weight-semibold">
                        {item.heading}
                    </h4>
                    <hr/>
                    <ul style={{ 'list-style-type': 'none' }}>
                        {console.log(item.oefening)}
                        {item.oefening.map((oefeningen, k) => (
                            <li key={k} style={{ 'margin-bottom': '50%', 'margin-left': '-30px' }}>
                                <h2>{oefeningen.title}</h2>
                                <p>{oefeningen.description}</p>

                                <PreviewCompatibleImage imageInfo={oefeningen.oefeningimage} />
                            </li>
                        ))}
                    </ul>

                </section>
            </div>


        ))}


    </div>
);


SchemaGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            oefeningimage: PropTypes.object,

        })
    ),
}

export default SchemaGrid;