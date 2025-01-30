import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { categoriesData } from '../../utils/data'

const CategoriesList = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Categories
                </Dropdown.Toggle>

                <Dropdown.Menu align='start'>
                    {categoriesData.map((val, index) => {
                        return (
                            <Dropdown.Item href="#/action-1" key={index}>
                                {val.title}
                            </Dropdown.Item>
                        )
                    })}


                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default CategoriesList