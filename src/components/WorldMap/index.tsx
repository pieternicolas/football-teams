import { memo, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';

import Text from 'atoms/Text';

import { GEO_URL } from 'config/constants';

export type WorldMapProps = {
  onRegionClick?: (geoData: any) => void;
};

const WorldMap = ({ onRegionClick }: WorldMapProps) => {
  const [tooltipContent, setTooltipContent] = useState<string>('');

  return (
    <>
      <ComposableMap data-tip="">
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => {
                  onRegionClick?.(geo.properties);
                }}
                onMouseEnter={() => {
                  const { NAME } = geo.properties;
                  setTooltipContent(`${NAME}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent('');
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>

      <ReactTooltip>
        <Text>{tooltipContent}</Text>
      </ReactTooltip>
    </>
  );
};

export default memo(WorldMap);
