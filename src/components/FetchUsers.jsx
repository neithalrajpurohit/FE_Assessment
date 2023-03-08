import React, { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";
import axios from "axios";
import { Col, Row } from "antd";
import EditModal from "./EditModal";

const FetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [editUserInfo, setEditUserInfo] = useState(null);

    const getUsers = async () => {
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users`
            );
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleEditUserInfo = (values) => {
        let updatedUserInfo = users.map((user) => {
            if (user.id === editUserInfo.id) {
                return {
                    ...user,
                    ...values,
                };
            } else {
                return user;
            }
        });
        setUsers(updatedUserInfo);
        setEditUserInfo(null);
    };
    const handleDeleteUser = (userId) => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
    };

    const handleLikeUser = (userId) => {
        const updatedUsers = users.map((user) => {
            if (user.id === userId) {
                // handle like / unlike
                // if like prop is present the make it false if not add and make it true
                if (user?.like) {
                    return {
                        ...user,
                        like: false,
                    };
                } else {
                    return {
                        ...user,
                        like: true,
                    };
                }
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    const openEditModal = (userInfo) => {
        setEditUserInfo(userInfo);
    };
    const closeEditModal = () => {
        setEditUserInfo(null);
    };

    return (
        <div style={{ padding: "14px" }}>
            {/* {User Info Edit Modal} */}
            <EditModal
                showEditModal={editUserInfo}
                handleEditUserInfo={handleEditUserInfo}
                closeEditModal={closeEditModal}
                editUserInfo={editUserInfo}
            />

            {/* {User Card} */}
            <Row justify="start" gutter={[28, 28]}>
                {users.map((user) => {
                    return (
                        <Col xs={24} md={8} lg={6} key={user.id}>
                            <DisplayCard
                                openEditModal={openEditModal}
                                handleDeleteUser={handleDeleteUser}
                                handleLikeUser={handleLikeUser}
                                {...user}
                            />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default FetchUsers;
