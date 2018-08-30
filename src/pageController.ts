import { nn } from 'eventnet';
import { appInstance } from '@/main';

interface PageEvents {
  [id: string]: {
    in?: () => void,
    out?: () => void,
  };
}

const events: PageEvents = {
  page1: {
    in() {
      setTimeout(() => {
        document.getElementById('page1')!.style.background = '#CFC';
      }, 0);
    },
  },
};
let stack = ['loading', 'startscreen'];
export const ndPageController = nn({}, {
  currentPageId: '',
},
  ({ data }, dws, { state }) => {
    if (events[state.currentPageId] && events[state.currentPageId].out) {
      events[state.currentPageId].out!();
    }
    if (data === 'backward') {
      stack.pop();
      state.currentPageId = appInstance.$data.currentPageId = stack[stack.length - 1];
    } else if (data === 'homepage') {
      stack = ['loading', 'startscreen'];
      state.currentPageId = appInstance.$data.currentPageId = 'startscreen';
    } else {
      if (data !== 'loading' && data !== 'startscreen') {
        stack.push(data);
      }
      state.currentPageId = appInstance.$data.currentPageId = data;
    }

    if (events[state.currentPageId] && events[state.currentPageId].in) {
      events[state.currentPageId].in!();
    }

  });
