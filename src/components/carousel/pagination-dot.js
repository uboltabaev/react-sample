import React, { useCallback, useMemo } from "react";
import PropTypes from 'prop-types';
import style from './carousel.module.css'

const PaginationDot = React.memo(({ active, index, onClick }) => {
    const handleClick = useCallback(() => {
        onClick(event, index);
    }, [index])

    const styleDot = useMemo(() => {
        return active ? `${style.dot} ${style['active-dot']}` : style.dot        
    }, [active])

    return (
        <button type="button" className={style['dot-root']} onClick={handleClick}>
            <div className={styleDot} />
        </button>
    );
})

PaginationDot.propTypes = {
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default PaginationDot