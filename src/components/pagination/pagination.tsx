import {usePagination} from "../../hooks/usePagination";

import classnames from 'classnames';
import React from "react";

const Pagination = (props: any) => {
    const {
        onChange,
        total,
        siblingCount = 1,
        current,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        current,
        total,
        siblingCount,
        pageSize
    });
    // If there are less than 2 times in pagination range we shall not render the component
    if (current === 0 || !paginationRange || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onChange(current + 1);
    };

    const onPrevious = () => {
        onChange(current - 1);
    };

    // @ts-ignore
    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={classnames('pagination-container justify-center items-center my-6 rtl', {[className]: className})}
        >
            {/* Left navigation arrow */}
            <li
                key={'prevoious'}
                className={classnames('pagination-item', {
                    disabled: current === 1
                })}
                onClick={onPrevious}
            >
                <div className="arrow right"/>
            </li>
            {paginationRange?.map(pageNumber => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === "DOTS") {
                    return <li key={'dots'} className="pagination-item dots">&#8230;</li>;
                }
                // Render our Page Pills
                return (
                    <li
                        key={pageNumber}
                        className={classnames('pagination-item', {
                            selected: pageNumber === current
                        })}
                        onClick={() => onChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                key={'next'}
                className={classnames('pagination-item', {
                    disabled: current === lastPage
                })}
                onClick={onNext}
            >
                <div className="arrow left"/>
            </li>
        </ul>
    );
};

export default Pagination;
