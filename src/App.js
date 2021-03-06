import React from "react";
import "antd/dist/antd.css";
import { AddButton } from "./components/AddButton";
import { WatchList } from "./components/WatchList";
import { WatchedList } from "./components/WatchedList";
import { Row, Space } from "antd";

const App = () => {
  return (
    <div style={{ margin: "10%" }}>
      <AddButton />
      <Row>
        <Space>
          <WatchList />
          <WatchedList />
        </Space>
      </Row>
    </div>
  );
};
export default App;
