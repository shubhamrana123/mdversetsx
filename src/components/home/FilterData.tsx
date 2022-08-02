import React from 'react'
import SearchBar from '../layout/SearchBar'

function FilterData() {
    return (
        <>

            <div className="filter-wrapper">
                <div className="filter-title">
                    <span className="filter-title-icon"></span>
                    <span className="filter-title-text">Filter</span>
                </div>
                <SearchBar></SearchBar>

            </div>
        </>
    )
}

export default FilterData