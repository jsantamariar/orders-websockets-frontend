import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";
import { SocketContext } from "../hooks/SocketContext";
import { getLastsTickets } from "../helpers/getLastTickets";

const { Title, Text } = Typography;

const Line = () => {
  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    socket.on("ticket-assigned", assigned => {
      setTickets(assigned);
    });

    return () => {
      socket.off("ticket-assigned");
    };
  }, [socket]);

  useEffect(() => {
    getLastsTickets().then(res => setTickets(res));
  }, []);

  return (
    <>
      <Title level={1}>Line of orders</Title>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col span={12}>
          <List
            style={{ overflowY: "scroll" }}
            itemLayout="horizontal"
            dataSource={tickets.slice(0, 3)}
            renderItem={ticket => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <>
                      <div
                        style={{
                          display: "block",
                          backgroundColor: "whitesmoke",
                          padding: 20,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 25,
                            display: "block",
                            textAlign: "center",
                          }}
                        >
                          {ticket.number}
                        </Text>
                        <p
                          style={{
                            display: "block",
                            margin: 0,
                            textAlign: "center",
                          }}
                        >
                          Desktop No. {ticket.desktop}
                        </p>
                      </div>
                    </>
                  }
                />
              </List.Item>
            )}
          ></List>
        </Col>

        <Col span={12}>
          <Divider>History</Divider>
          <List
            grid={{
              gutter: 16,
              column: 1,
            }}
            style={{ overflowY: "scroll", height: "60vh" }}
            dataSource={tickets}
            renderItem={ticket => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <div style={{ overflowY: "scroll" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          height: 10,
                        }}
                      >
                        <Text style={{ marginRight: 4 }} type="secondary">
                          Order No.
                        </Text>
                        <p>{ticket.number}</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ marginRight: 4 }} type="secondary">
                          Agent:
                        </Text>
                        <p>{ticket.agent}</p>
                      </div>
                    </div>
                  }
                ></List.Item.Meta>
              </List.Item>
            )}
          ></List>
        </Col>
      </Row>
    </>
  );
};

export default Line;
