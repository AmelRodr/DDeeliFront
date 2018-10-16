
import React from 'react';
import { Button, Modal, DatePicker, Upload, Icon, Form, Input, Radio } from 'antd';
import toastr from 'toastr'
import axios from 'axios'

const FormItem = Form.Item;

const url = 'http://localhost:3000/signup'
//const url = 'https://integration1.herokuapp.com/signup'

const CollectionCreateForm = Form.create()(
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form,onComida,onChange,comida,loading } = this.props;
            const { getFieldDecorator } = form;

            const formItemLayout = {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 8 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 },
                },
            };
            const config = {
                rules: [{ type: 'object', required: true, message: 'Please select time!' }],
            };
            return (
                <Modal
                    
                    visible={visible}
                    title="Crea un nuevo Platillo"
                    okText="Crear"
                    onCancel={onCancel}
                    onOk={onComida}
                >
                    <Form layout="vertical">
                        <FormItem label="Titulo">
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: 'Por favor ingresa el titulo de tu comida!' }],
                            })(
                                <Input onChange={onChange} 
                                       name='title' 
                                       value={comida.titulo} 
                                       type='text' />
                            )}
                        </FormItem>
                        <FormItem label="Precio">
                            {getFieldDecorator('price', {
                                rules: [{ required: true, message: 'Por favor ingresa el precio de tu comida!' }],
                            })(
                                <Input onChange={onChange} 
                                        name='price' 
                                        value={comida.price} 
                                        type='text' />
                            )}
                        </FormItem>
                        <FormItem label="Descripcion">
                            {getFieldDecorator('description')(<Input onChange={onChange} 
                                                                    name='description' 
                                                                    value={comida.description} 
                                                                    type="textarea" />)}
                        </FormItem>


                        <FormItem label="Horario">
                            {getFieldDecorator('price', {
                                rules: [{ required: false, message: 'Por favor ingresa tu horario de trabajo!' }],
                            })(
                                <Input onChange={onChange} 
                                        name='horario' 
                                        value={comida.horario} 
                                
                                        type='text'
                                        placeholder='Ejemplo: 10:00 - 18:00' />
                            )}
                        </FormItem>

                        {/* // <FormItem 
                        //     {...formItemLayout}
                        //     label="Fotos"
                        //     extra="Sube varias fotos de tu platillo"
                        // >
                        //     {getFieldDecorator('upload', {
                        //         valuePropName: 'fileList',
                        //         getValueFromEvent: this.normFile,
                        //     })(
                        //         <Upload name="logo" action="/upload.do" listType="picture">
                        //             <Button>
                        //                 <Icon type="upload" /> Click to upload
                        //             </Button>
                        //         </Upload>
                        //     )}
                        // </FormItem>*/}





                        <FormItem className="collection-create-form_last-form-item">
                            {getFieldDecorator('modifier', {
                                initialValue: 'public',
                            })(
                                <Radio.Group>
                                    <Radio value="llevar">Para llevar</Radio>
                                    <Radio value="reservacion">Reservacion</Radio>
                                </Radio.Group>
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="Fecha"
                        >
                            {getFieldDecorator('date-picker', config)(
                                <DatePicker />
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);

class CollectionsPage extends React.Component {
    state = {
        visible: false,
        comida: {},
        loading: false,
    };
    onChange = (e) =>{
        console.log(e.target.name)
        console.log(e.target.value)
        const field = e.target.name
        const value = e.target.value
        const {comida} = this.state
        comida[field] = value
        this.setState({comida})
    }

    createComida = (e) => {
        e.preventDefault()
        console.log('dentro de on comida')
        const {comida} = this.state
        console.log(comida)
        axios.post(url,comida)
        .then(comida =>{
            console.log(comida)
            toastr.success('Creado')
        }).catch(e=>{
            toastr.error('Intenta de nuevo')
        })
    }

    showModal = () => {
        this.setState({ visible: true });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    render() {
        const {comida,loading} = this.state
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Nuevo Platillo</Button>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    onChange= {this.onChange}
                    onComida={this.createComida}
                    comida={comida}
               
                />
            </div>
        );
    }
}
const Comida = CollectionsPage

export default Comida