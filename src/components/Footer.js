import React from 'react'
import {Col} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'


export default function Footer() {
    let year=new Date().getFullYear();
  return (
    <div>
        <Navbar fixed="bottom" bg="dark" variant='dark'>
            <div className="text-center text-muted">
                <Col lg={12} className="text-center text-light">
                    {year}-All Right Are Reserved!!!
                </Col>
            </div>
        </Navbar>
    </div>
  )
}
