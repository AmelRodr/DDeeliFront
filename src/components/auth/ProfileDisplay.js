import React from 'react'
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import logo from '../../logo.svg'

const pStyle = {
    fontSize: 16,
    color: 'rgba(0,0,0,0.85)',
    lineHeight: '24px',
    display: 'block',
    marginBottom: 16,
  };

const DescriptionItem = ({ title, content,user }) => (
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
         visible: false ,
         user:'amel'
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
    const {user} = this.props
    console.log(user.username)

         
    return(
        <div>
        <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
          <p style={pStyle}>Personal</p>
          <Avatar src={user.photoURL}   />
          <img style={{ borderRadius: '50%' }} src={user.photoURL || logo} width="200" alt="user" />
                {/* <h1>{user.username}</h1>
                <p>{user.email}</p>
                <button onClick={this.getPrivateInfo} >Bajate mi pack privado ;)</button>
                <input accept="image/*" onChange={this.onChangeFile} ref="input" hidden type="file" />
                <br />
                <img style={{ cursor: "pointer" }} width="100" onClick={this.uploadPhoto} src="https://cdn.onlinewebfonts.com/svg/img_212908.png" /> */}

          <Row>
            <Col span={12}>
              <DescriptionItem title="Full Name" content={user.username} />{' '}
            </Col>
            <Col span={12}>
              <DescriptionItem title="Account" content="AntDesign@example.com" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="City" content="HangZhou" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="China🇨🇳" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Birthday" content="February 2,1900" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Website" content="-" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Message"
                content="Make things as simple as possible but no simpler."
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Company</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Position" content="Programmer" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Responsibilities" content="Coding" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Department" content="AFX" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Skills"
                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content="AntDesign@example.com" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Github"
                content={(
                  <a href="http://github.com/ant-design/ant-design/">
                    github.com/ant-design/ant-design/
                  </a>
                )}
              />
            </Col>
          </Row>
          </div>
    )
 }
}

export default ProfileDisplay