
import React from 'react'
import './Elements.css'
function Elements() {
    return (
        <div className="elements">
            <div className="elem__heading">
                SECTION ELEMENTS
            </div>
            <div className="elem__content">
                <div className="elem__section">
                    <span className="elem__title">Selected Elements will appear here</span>
                    <div className="elem__items">
                        <div className="elem__item">
                            Item 1
                        </div>
                        <div className="elem__item">
                            Item 2
                        </div>
                    </div>
                </div>
                <div className="elem__section">
                    <span className="elem__title">Click on Elements to add to your page</span>
                    <div className="elem__items">
                        <div className="elem__item">
                            Item 1
                        </div>
                        <div className="elem__item">
                            Item 2
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Elements
