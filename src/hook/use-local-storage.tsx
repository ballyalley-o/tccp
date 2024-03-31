import { useState, useEffect } from 'react'
import localStorageSpace from 'util/local-storage-space'

interface UseLocalStorage {
  (key: string, defaultValue: any): [any, (newValue: any) => void]
}

function useLocalStorage(key: string, defaultValue: any) {
  const storageAvailable = localStorageSpace()

  const [value, setValue] = useState(() => {
    const storedValue = storageAvailable ? localStorage.getItem(key) : null

    return storedValue === null ? defaultValue : JSON.parse(storedValue)
  })

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue)
      }
    }
    window.addEventListener('storage', listener)

    return () => {
      window.removeEventListener('storage', listener)
    }
  }, [key, defaultValue])

  const setValueInLocalStorage = (newValue: any) => {
    setValue((currentValue: any) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue

      if (storageAvailable) {
        localStorage.setItem(key, JSON.stringify(result))
      }

      return result
    })
  }

  return [value, setValueInLocalStorage]
}

export default useLocalStorage
