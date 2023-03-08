import React, { useEffect } from "react";
import { Form, Input, Modal, Typography } from "antd";

const { Title } = Typography;
const EditModal = ({
    showEditModal,
    handleEditUserInfo,
    editUserInfo,
    closeEditModal,
}) => {
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 24 },
    };

    useEffect(() => {
        form.setFieldsValue(editUserInfo);
    }, [editUserInfo]);

    return (
        <Modal
            open={showEditModal}
            onOk={() => {
                handleEditUserInfo(form.getFieldsValue());
                form.resetFields();
            }}
            onCancel={closeEditModal}
        >
            <Title level={5} style={{ marginBottom: "30px" }}>
                Basic Modal
            </Title>

            <Form
                {...layout}
                form={form}
                name="control-hooks"
                style={{ maxWidth: 600 }}
                initialValues={editUserInfo}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    style={{ marginBottom: "30px" }}
                    rules={[{ required: true }]}
                >
                    <Input
                        onChange={(e) =>
                            form.setFieldValue({ name: e.target.value })
                        }
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true }]}
                    style={{ marginBottom: "30px" }}
                >
                    <Input
                        onChange={(e) =>
                            form.setFieldValue({ email: e.target.value })
                        }
                    />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone"
                    rules={[{ required: true }]}
                    style={{ marginBottom: "30px" }}
                >
                    <Input
                        onChange={(e) =>
                            form.setFieldValue({ phone: e.target.value })
                        }
                    />
                </Form.Item>
                <Form.Item
                    name="website"
                    label="Website"
                    rules={[{ required: true }]}
                    style={{ marginBottom: "30px" }}
                >
                    <Input
                        onChange={(e) =>
                            form.setFieldValue({ website: e.target.value })
                        }
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditModal;
