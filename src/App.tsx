import { Card, Col, Divider, Row, Space, Typography } from "antd";
import { AppContainer } from "./Components/AppContainer";
import { SmileTwoTone } from "@ant-design/icons";

export const App = () => {
  return (
    <AppContainer>
      <Space direction="vertical">
        <Typography.Title>
          <SmileTwoTone />
          你好
        </Typography.Title>
        <Typography.Text>Vite + React + TS + AntD BoilerPlate</Typography.Text>
        <Divider>Grid布局</Divider>
        <Row gutter={8}>
          <Col span={8}>
            <Card title="卡片 1">Hello</Card>
          </Col>
          <Col span={8}>
            <Card title="卡片 2">Bonjour</Card>
          </Col>
          <Col span={8}>
            <Card title="卡片 3">Ciao</Card>
          </Col>
        </Row>
      </Space>
    </AppContainer>
  );
};
