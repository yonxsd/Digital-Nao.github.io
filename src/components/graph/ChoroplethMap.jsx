import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';

const ChoroplethMap = ({ data }) => (
  <div style={{ height: '600px' }}>
    <ResponsiveChoropleth
      data={data}
      features={data.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="YlOrRd"
      domain={[0, 100]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'column',
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: 'left-to-right',
          itemTextColor: '#444444',
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000000',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  </div>
);

export default ChoroplethMap;
