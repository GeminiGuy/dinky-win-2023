import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ClusterTableList from './Cluster';
import ClusterConfigurationTableList from './ClusterConfiguration';
import {l} from "@/utils/intl";

const items: TabsProps['items'] = [
  {
    key: '1',
    label: l('menu.registration.cluster.clusterInstance'),
    children: <ClusterTableList />,
  },
  {
    key: '2',
    label: l('menu.registration.cluster.clusterConfiguration'),
    children: <ClusterConfigurationTableList />,
  },
];

const ClusterManage: React.FC = () => <Tabs style={{marginTop: '-24px'}} defaultActiveKey="1" items={items} />;

export default ClusterManage;