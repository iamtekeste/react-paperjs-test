//ts中引入的写法
import * as React from "react";
//react中引入的写法
import { Layout } from 'antd';
import SplitPane from 'react-split-pane';
import MyCanvas from "./MyCanvas/MyCanvas";
import SiderBar from "./UI/SiderBar"
import HeaderBar from "./UI/HeaderBar"
import Layer from "./UI/Layers"
import Overview from "./UI/Overview";
import './App.css';
import {createFromIconfontCN} from '@ant-design/icons';
import Config from "./Common/Config";
createFromIconfontCN({
    scriptUrl: Config.IconUrl,
});
const { Content } = Layout;
const App=()=>{
  return (
    <Layout className="me-layout">
        <HeaderBar/>
      <Layout>
        <SiderBar/>
        <MyCanvas/>
        <Content className="me-right-bar">
            <SplitPane
              defaultSize="60%"
              split="horizontal"
              style={{ position: 'static' }}
              resizerStyle={{ padding: '5px' }}
              paneStyle={{ background: '#eee' }}
              pane2Style={{ background: '#aaa4ba' }}
            >
              <div style={{
                  flex: '1 1 1%'
              }}>
                  <Overview/>
              </div>
              <div>
                <Layer/>
              </div>
            </SplitPane>
          </Content>
      </Layout>
    </Layout>

  );
}

export default App;
