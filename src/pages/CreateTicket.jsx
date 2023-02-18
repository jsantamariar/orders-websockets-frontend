import React, { useState } from "react";
import { Button, Col, Row, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useSocket } from "../hooks/useSocket";

const { Title, Text } = Typography;

const CreateTicket = () => {
  const { socket } = useSocket(process.env.URL);

  const [ticket, setTicket] = useState(null);

  const createNewTicket = () => {
    socket.emit("request-new-ticket", null, ticket => {
      setTicket(ticket);
    });
  };

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Press the button to create a new order</Title>

          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={createNewTicket}
          >
            New Order
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>Your order</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            {" "}
            {ticket && ticket.number}
          </Text>
        </Col>
      </Row>
    </>
  );
};

export default CreateTicket;
