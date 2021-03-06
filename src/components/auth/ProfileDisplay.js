import React from 'react'
import { Divider, Col, Row } from 'antd';
import logo from '../../logo.svg'
import logod from '../../logo.png'

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content, user }) => (

  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
      </p>
    {content}
    {user}
  </div>
);

class ProfileDisplay extends React.Component {
  state = {
    visible: false,
    user: 'username',
    ciudad: 'CDMX',
    pais: 'Mexico',
    lema: 'DDeeli is the best app',
    telefono: 5591992055,
    photoURL: logod,
    nombre: 'Jose',
    apellido: 'Hernandez',

  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };


  render() {
    const { user } = this.props

    const { ciudad, pais, telefono, nombre, apellido } = this.state

    return (
      <div>
        <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
        <p style={pStyle}>{user.username}</p>
        <img style={{ borderRadius: '50%' }} src={user.photoURL || logo} width="200" alt="user" />

        <Row>
          <Col span={12}>
            <DescriptionItem title="Username" content={user.username} />{' '}
          </Col>
          <Col span={12}>
            <DescriptionItem title="Nombre" content={nombre} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Pais" content={pais} />
          </Col>

          <Col span={12}>
            <DescriptionItem title="Apellido" content={apellido} />
          </Col>

          <Col span={12}>
            <DescriptionItem title="Ciudad" content={ciudad} />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Lema"
              content="La cocina es mi vida"
            />
          </Col>
        </Row>

        <Divider />
        <p style={pStyle}>Contacto</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Email" content={user.email} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Telefono" content={telefono} />
          </Col>
        </Row>

      </div>
    )
  }
}

export default ProfileDisplay