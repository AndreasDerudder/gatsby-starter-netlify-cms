import React from 'react'

import Layout from '../components/Layout'
import TrainingRoll from '../components/TrainingRoll'

export default class TrainingIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div
                    className="full-width-image-container"
                    style={{
                        backgroundImage: `url('/img/sport.jpg')`,
                    }}
                >
                    <h1
                        className="has-text-weight-bold is-size-1"
                        style={{
                            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                            backgroundColor: '#f40',
                            color: 'white',
                            padding: '1rem',
                        }}
                    >
                        Sport Schema's
                    </h1>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <TrainingRoll />
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
