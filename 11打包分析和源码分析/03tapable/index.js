const { SyncHook } = require("tapable");
class HYLearnTapable {
  constructor() {
    this.hooks = {
      syncHook: new SyncHook(["name", "age"]),
    };
    this.hooks.syncHook.tap("event1", (name, age) => {
      console.log("event1", name, age);
    });
    this.hooks.syncHook.tap("event2", (name, age) => {
      console.log("event2", name, age);
    });
  }
  emit() {
    this.hooks.syncHook.call("chan", "20");
    this.hooks.syncHook.call("chans", "26");
  }
}
const lt = new HYLearnTapable();

lt.emit();
