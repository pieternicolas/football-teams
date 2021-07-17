import { HTMLAttributes, memo, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';

import Text from 'atoms/Text';
import Div from 'atoms/Div';

import { GEO_URL } from 'config/constants';

export type WorldMapProps = HTMLAttributes<HTMLDivElement> & {
  onRegionClick?: (geoData: any) => void;
};

const WorldMap = ({ onRegionClick, ...props }: WorldMapProps) => {
  const [tooltipContent, setTooltipContent] = useState<string>('');

  return (
    <Div {...props}>
      <ComposableMap data-tip="">
        <ZoomableGroup>
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
        </ZoomableGroup>
      </ComposableMap>

      <ReactTooltip>
        <Text>{tooltipContent}</Text>
      </ReactTooltip>
    </Div>
  );
};

export default memo(WorldMap);
