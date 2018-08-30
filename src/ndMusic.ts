import { nn } from 'eventnet';

export const ndMusic = nn({},
  {
    playstate: false,
    audioId: -1,
    audiostate: [],
    data: {},
  },
  ({ data }, dws, { state }) => {
    if (Array.isArray(data)) {
      state.data.audios = data;
      data.forEach((a, index) => {
        const fn = () => {
          if (a.readyState >= 1 &&
            state.audioId === index &&
            !state.audiostate[index]) {
            a.play();
          }
        };
        a.addEventListener('progress', fn);
        a.addEventListener('loadeddata', fn);
        a.loop = true;
      });
      return;
    }
    const {playstate = true, audioId = state.audioId} = data;

    if (audioId === -1) { return; }
    if (!playstate || (state.audioId !== -1 && audioId !== state.audioId)) {
      // tslint:disable-next-line:no-unused-expression
      state.data.audios[state.audioId] &&
        state.data.audios[state.audioId].pause();

      state.audiostate[state.audioId] = false;
    }

    if (playstate) {
      const id = state.audioId = audioId;
      if (state.data.audios[id].readyState >= 1 &&
        !state.audiostate[id]) {
        state.data.audios[id].play();
      }
    }
  });

