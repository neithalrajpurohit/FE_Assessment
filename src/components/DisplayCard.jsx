import React from "react";
import {
    HeartOutlined,
    EditOutlined,
    DeleteFilled,
    HeartFilled,
    MailOutlined,
    PhoneOutlined,
    GlobalOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Space } from "antd";

const DisplayCard = (props) => {
    const {
        email,
        name,
        username,
        id,
        phone,
        website,
        openEditModal,
        handleDeleteUser,
        handleLikeUser,
        like,
    } = props;

    return (
        <Card
            bordered
            style={{
                width: "100%",
                border: "1px solid #ebebeb",
                overflow: "hidden",
                borderRadius: "4px",
            }}
            cover={
                <div
                    style={{
                        backgroundColor: "#f0f0f0",
                        overflow: "hidden",
                    }}
                >
                    <img
                        style={{
                            height: "200px",
                            margin: "0 auto",
                            display: "block",
                        }}
                        alt="example"
                        src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
                    />
                </div>
            }
            actions={[
                like ? (
                    <HeartFilled
                        onClick={() => handleLikeUser(id)}
                        style={{ fontSize: "20px", color: "crimson" }}
                        key="unlike"
                    />
                ) : (
                    <HeartOutlined
                        onClick={() => handleLikeUser(id)}
                        style={{ fontSize: "20px", color: "crimson" }}
                        key="like"
                    />
                ),
                <EditOutlined
                    onClick={() =>
                        openEditModal({ id, name, email, phone, website })
                    }
                    style={{ fontSize: "20px" }}
                    key="edit"
                />,
                <DeleteFilled
                    onClick={() => handleDeleteUser(id)}
                    style={{ fontSize: "20px" }}
                    key="delete"
                />,
            ]}
        >
            <h3>{name}</h3>
            <Space direction="vertical" size={5}>
                <Row>
                    <Col
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <span>
                            <MailOutlined
                                style={{ fontSize: "18px", color: "#646464" }}
                            />
                        </span>
                        <span style={{ fontSize: "15px", color: "#646464" }}>
                            {email}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <span>
                            <PhoneOutlined
                                style={{ fontSize: "18px", color: "#646464" }}
                            />
                        </span>
                        <span style={{ fontSize: "15px", color: "#646464" }}>
                            {phone}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <span>
                            <GlobalOutlined
                                style={{ fontSize: "18px", color: "#646464" }}
                            />
                        </span>
                        <span style={{ fontSize: "15px", color: "#646464" }}>
                            http://{website}
                        </span>
                    </Col>
                </Row>
            </Space>
        </Card>
    );
};

export default DisplayCard;
