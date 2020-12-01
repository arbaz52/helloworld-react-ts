import React from "react";
import { Container, Section } from "../../elements/Container";

import { DatePicker, Form, Input, TimePicker, Typography } from "antd";

const AppointmentForm = () => {
  return (
    <Section>
      <Typography.Title level={2}>Set an appointment</Typography.Title>
      <Form style={{maxWidth: "400px"}}>
        <Form.Item label="Your Good Name" required>
          <Input />
        </Form.Item>
        <Form.Item label="Email" required>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Appointment Date" required>
          <DatePicker />
        </Form.Item>
        <Form.Item label="Time" required>
          <TimePicker.RangePicker
          />
        </Form.Item>
      </Form>
    </Section>
  );
};

const AntDesign = () => {
  return (
    <Container>
      <h1>Hello to Ant Design Champs...</h1>
      <AppointmentForm />
    </Container>
  );
};

export default AntDesign;
