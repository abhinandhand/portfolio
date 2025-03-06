export default function useLocalStorage() {
  const getLocalStorageItem = (item: string) => {
    if (import.meta.client) {
      console.log('Hello. I am from client');
      return localStorage.getItem(item);
    }
    console.log('Hello. I am from server');
    return undefined;
  };

  const setLocalStorageItem = (item: string, value: string) => {
    if (import.meta.client) {
      return localStorage.setItem(item, value);
    }
  };

  return {
    getLocalStorageItem,
    setLocalStorageItem,
  };
}
