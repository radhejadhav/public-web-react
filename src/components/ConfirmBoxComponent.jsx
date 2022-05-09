import React from 'react'
import { Button, Card, CardText, CardTitle, Col, Row } from 'reactstrap';

export default function ConfirmBoxComponent({onClose,onConfirm}) {
    return (
        <Card
            inverse
            body
            style={{
                backgroundColor: '#556B2F',
                borderColor: '#333',
                width: '300px'
                
            }}>
            <CardTitle>Please Confirm..!</CardTitle>
            <CardText>Are you sure, want to logout ?</CardText>
            <Row>
                <Col xs='6'>
                    <Button onClick={onClose}>No</Button>
                </Col>
                <Col xs='1'>
                    <Button  onClick={() => { onConfirm(); onClose(); }}>Yes</Button>
                </Col>
            </Row>
        </Card>
    )
}
