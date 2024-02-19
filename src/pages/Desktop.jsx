import React, { useState } from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import { ArrowRightOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { getUserStorage } from "../helpers/getUserStorage";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../hooks/useSocket";

const { Title, Text } = Typography;

const Desktop = () => {
  const navigation = useNavigate();
  const { socket } = useSocket("http://localhost:8080");
  const [user] = useState(getUserStorage());
  const [ticket, setTicket] = useState(null);

  const nextTicket = () => {
    socket.emit("next-ticket-to-work", user, (ticket) => {
      setTicket(ticket);
    });
  };

  const exit = () => {
    localStorage.clear();
    navigation("/login");
  };

  if (!user.agent || !user.desktop) {
    return navigation("/login");
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agent}</Title>
          <Text>You are working at desktop: </Text>
          <Text type="success">{user.desktop}</Text>
        </Col>

        <Col span={4} align="right">
          <Button shape="rounded" type="danger" onClick={exit}>
            <CloseCircleOutlined />
            Exit
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>You are working on order number: </Text>
          <Text style={{ fontSize: 14 }} type="danger">
            {ticket?.number ? ticket.number : "There is no more orders"}
          </Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} align="right">
          <Button shape="rounded" type="primary" onClick={nextTicket}>
            <ArrowRightOutlined />
            Next order
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Desktop;
