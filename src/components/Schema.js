import React from 'react'
import PropTypes from 'prop-types'



const SchemaGrid = ({ gridItems }) => (
    <div className="columns">
        <h3>Schema</h3>
        {gridItems.map((item) => (
            <div key={item.heading} className="column">
                <section className="section">
                    <h4 className="has-text-centered has-text-weight-semibold">
                        {item.heading}
                    </h4>
                    <hr/>
                    <ul style={{
                        listStyleType: 'none',
                    }}>
                        {console.log(item.oefening)}
                        {item.oefening.map((oefeningen, k) => (
                            <li key={k}
                                style={{
                                    marginBottom: '10%',
                                    marginLeft: '-30px',
                                }}>
                                <h2>{oefeningen.title}</h2>
                                <p>{oefeningen.description}</p>


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