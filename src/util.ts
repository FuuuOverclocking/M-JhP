import { nn, getElementProducer } from 'eventnet';

export const ndCollector = getElementProducer(() => {
   return nn({},
  {
    data: {
      upsCounter: [] as boolean[],
      upsNum: 0,
      upsData: [] as any[],
      used: false,
    },
  },
  ({ data, caller }, dws, { state: { data: cond }, origin }) => {
    const upstream = origin.upstream.get();
    cond.upsCounter.length = cond.upsData.length = upstream.length;

    const i = upstream.indexOf(caller);
    // tslint:disable-next-line:no-bitwise
    if (!~i) { return; }

    cond.upsData[i] = data;
    if (!cond.upsCounter[i]) {
      cond.upsNum++;
    }
    cond.upsCounter[i] = true;

    if (cond.upsNum >= cond.upsCounter.length && !cond.used) {
      cond.used = true;
      dws.all(cond.upsData);
    }
  });
}, 'Collector Node');
