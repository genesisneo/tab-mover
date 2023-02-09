chrome.commands.onCommand.addListener(async (command) => {
  const tabs = await chrome.tabs.query({ currentWindow: true });
  const activeTab = tabs.find((tab) => tab.active);
  let activeIndex = activeTab.index;
  
  switch (command) {
    case 'move-tab-end':
      activeIndex = -1;
      break;
    case 'move-tab-left':
      activeIndex = Math.max(0, activeIndex - 1);
      break;
    case 'move-tab-right':
      activeIndex += 1;
      break;
    case 'move-tab-start':
      activeIndex = 0;
      break;
  }

  chrome.tabs.move(activeTab.id, { index: activeIndex });
});
