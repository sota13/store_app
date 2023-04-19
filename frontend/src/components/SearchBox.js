import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} className='d-sm-flex'>
            <Form.Control
                type='text'
                name='q'
                placeholder="Search"
                onChange={(e) => setKeyword(e.target.value)}
                className='mt-2 mt-sm-0 me-sm-2'
            ></Form.Control>

            <Button
                type='submit'
                variant='outline-secondary'
                className='my-1 my-sm-0'
            >
                Search
            </Button>
        </Form>
    )
}

export default SearchBox
