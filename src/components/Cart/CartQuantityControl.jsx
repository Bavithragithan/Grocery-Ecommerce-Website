import React, { useState } from 'react'
import { Button, InputGroup, Form } from 'react-bootstrap'

const CartQuantityControl = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = ()=>{
        setCount((prev)=> prev+1)
    }

    const handleDecrease = ()=>{
        setCount((prev)=> (prev > 0 ? prev - 1 : 0))
    }

  return (
    <>
        <InputGroup size='sm'>
        <Button size='sm' variant='light' onClick={handleDecrease}>
            <i className='bi bi-dash-lg'></i>
        </Button>

        <Form.Control
            type='text'
            readOnly
            value={count}
            className='text-center'
            style={{width:"2.5rem", border:"2px solid #f8f9fa"}}
        >

        </Form.Control>

        <Button size='sm' variant='light' onClick={handleIncrease}>
            <i className='bi bi-plus-lg'></i>
        </Button>

        </InputGroup>
    </>
  )
}

export default CartQuantityControl