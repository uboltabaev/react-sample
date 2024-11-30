import React, { useCallback } from "react";
import PropTypes from 'prop-types';
import style from './carousel.module.css'
import PaginationDot from "./pagination-dot";

const Pagination = React.memo(({ index, dots, onChangeIndex }) => {
    const handleClick = useCallback((event, index) => {
        onChangeIndex(index);
    }, [index])
    
    const children = [];

    for (let i = 0; i < dots; i += 1) {
        children.push(
            <PaginationDot key={i} index={i} active={i === index} onClick={handleClick} />
        )
    }

    return (
        <div className={style['pagination-root']}>{children}</div>
    )
})

Pagination.propTypes = {
    dots: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    onChangeIndex: PropTypes.func.isRequired
};

export default Pagination