import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default ({ data, color }) => {
  function calculateAverages (data) {
    return Math.round( _.sum(data) / data.length);
  }

  return (
    <div>
     <Sparklines height={120} width={180} data={data} >
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
        <div>{calculateAverages(data)}</div>
    </div>
  );
}
