import React from 'react';

function FilterBox({ filterHeading, filterobj, handleFilterClick, filters }) {
    const category = filterHeading.toLowerCase();
    const obj = filters[category].split("|");
    return (
        <div className="filter-box">
            <h3>{filterHeading}</h3>
            <ul>
                {filterobj.map(({ label, id, grpclass }, index) => (
                    <li>
                        <input type="checkbox" className={grpclass} onChange={(event) => handleFilterClick(event, id, filterHeading, grpclass)} id={id} checked={obj && obj.indexOf(id) !== -1}/>
                        <label htmlFor={id}>{label}</label>
                    </li>
                )
                )}
            </ul>
        </div>
    );
}

export default FilterBox;
