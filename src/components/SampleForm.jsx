import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'

const SampleForm = () => {
    const [componentSize, setComponentSize] = useState('default')

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size)
    }

    return (
        <div className='form'>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout='horizontal'
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item label='Name'>
                    <Input id='username' />
                </Form.Item>
                <Form.Item label='Password'>
                    <Input id='password' />
                </Form.Item>

                <Form.Item label='Button'>
                    <Button data-testid='submit'>Button</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SampleForm
