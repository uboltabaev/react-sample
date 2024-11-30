import React from "react";
import PropTypes from 'prop-types';
import styles from './curved-text.module.css';

function CurvedText({ text, arc, radius, style }) {
    const characters = text.split('');
    const degree = arc / characters.length;

    return (
        <h3 className={`${styles.curved}`} style={style}>
            {characters.map((char, i) => (
                <span key={`heading-span-${i}`}
                    style={{
                        height: `${radius}px`,
                        transform: `rotate(${degree * i - arc / 2}deg)`,
                        transformOrigin: `0 ${radius}px 0`,
                    }}
                >
                    {char}
                </span>
            ))}
        </h3>
    )
}

CurvedText.propTypes = {
    text: PropTypes.string.isRequired,
    arc: PropTypes.number,
    radius: PropTypes.number,
    style: PropTypes.object
}

CurvedText.defaultProps = {
    arc: 360,
    radius: 120
}

export default CurvedText