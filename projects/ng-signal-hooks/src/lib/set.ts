export function onSet<T>(
  signal: WritableSignal<T>,
  callback: ((value: T) => void) | (() => void),
  callbackBeforeSet = true
) {
  const original = signal.set;
  signal.set = (value: T) => {
    if (callbackBeforeSet) {
      callback(value);
      original(value);
    } else {
      original(value);
      callback(value);
    }
  };
}
