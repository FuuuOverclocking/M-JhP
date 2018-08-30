import { appInstance } from '@/main';
import { nn, raw } from 'eventnet';

export const ndResourceLoader = nn({}, {
  data: {
    imgList: [
      'img/meeting.png',
      'img/backward.png',
      'img/exit.png',
      'img/logo-big.png',
      'img/volume.png',
      'img/muted.png',
      'img/arrow.png',
      'img/money.png',
    ],
    bgmList: [
      'bgm/opening.mp3',
      'bgm/processing.mp3',
    ],
  },
},
  (ups, dws, { state: { data } }) => {
    appInstance.$data.resourceTotalNum = data.imgList.length + data.bgmList.length;
    function onload() {
      ++appInstance.$data.resourceLoadedNum;
      if (appInstance.$data.resourceTotalNum <= appInstance.$data.resourceLoadedNum) {
        dws[2]!('startscreen');
      }
    }
    dws[0]!({
      list: data.imgList,
      onload,
    });
    dws[1]!({
      list: data.bgmList,
      onload,
    });
  });

export const ndImgLoader = raw(({ data }, dws) => {
  const totalNum = data.list.length;
  let loadedNum = 0;

  function fn() {
    ++loadedNum;
    data.onload();
    if (loadedNum < totalNum) { return; }

    dws.all();
  }

  data.list.forEach((src: string) => {
    const img = new Image();
    img.onload = () => fn();
    img.src = src;
  });
});

export const ndBgmLoader = raw(({ data }, dws) => {
  dws[1]!((data.list as string[]).map((src, index) => {
    const a = new Audio(src);
    let loaded = false;
    const fn = () => {
      if (!loaded && a.readyState >= 1) {
        loaded = true;
        data.onload();
      }
    };
    a.addEventListener('progress', fn);
    a.addEventListener('loadeddata', fn);
    return a;
  }));
  dws[0]!();
});
