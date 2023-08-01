import { Breadcrumb, Card, Col, Row } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';
import { useMatches } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

const Index = (props: Props) => {
  const { children: Component } = props;

  const matches = useMatches();
  document.title = matches
    .map((item) => (item?.handle as { crumb: () => string }).crumb())
    .join('-');

  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <Card bodyStyle={{ padding: 12 }}>
          <Breadcrumb
            items={matches.map((item) => ({
              href: item.pathname,
              title: (
                <b>
                  {item.pathname === '/' ? (
                    <HomeOutlined />
                  ) : (
                    (item?.handle as { crumb: () => string }).crumb()
                  )}
                </b>
              )
            }))}
          />
        </Card>
      </Col>

      <Col span={24}>{Component}</Col>
    </Row>
  );
};

export default Index;
