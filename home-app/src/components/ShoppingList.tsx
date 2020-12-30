import { render } from "@testing-library/react";
import React, { Component, MouseEvent } from "react";
import { Form, Button } from "tabler-react"

export const ShoppingList: React.FC = () => {
    return (
        <Form onSubmit={(event: any) => console.log(event.target.name + 'clicked')}>
        <Form.Input label='Username' placeholder='Enter Username' />
        <Button>submit</Button>
        </Form>
    )
}