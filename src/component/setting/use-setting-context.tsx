import { createContext, useContext, useMemo, useCallback, ChangeEvent, ReactNode } from 'react'
import { useLocalStorage } from 'hook'
import { themePreset } from 'theme'
import localStorageSpace from 'util/local-storage-space'
import { KEY } from 'constant'

const initialState = {
  ...themePreset,
  // mode
  onToggleMode: () => {},
  onChangeMode: () => {},
  // direction
  onToggleDirection: () => {},
  onChangeDirection: () => {},
  onChangeDirectionByLang: () => {},
  // layout
  onToggleLayout: () => {},
  onChangeLayout: () => {},
  // contrast
  onToggleContrast: () => {},
  onChangeContrast: () => {},
  presetOption: [],
  // reset
  onResetSetting: () => {}
}

export const SettingContext = createContext(initialState)

export const useSettingContext = () => {
  const context = useContext(SettingContext)

  if (!context) throw new Error('useSettingContext must be use inside SettingProvider')

  return context
}

interface SettingProviderProps {
  children: ReactNode
}

export function SettingProvider({ children }: SettingProviderProps) {
  const [settings, setSettings] = useLocalStorage('settings', themePreset)
  const storageAvailable = localStorageSpace()
  const langStorage = storageAvailable ? localStorage.getItem('i18nextLng') : ''

  const onToggleMode = useCallback(() => {
    const themeMode = settings.themeMode === KEY.LIGHT ? KEY.DARK : KEY.LIGHT
    setSettings({ ...settings, themeMode })
  }, [setSettings, settings])

  const onChangeMode = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const themeMode = event.target.value
      setSettings({ ...settings, themeMode })
    },
    [setSettings, settings]
  )

  const onToggleContrast = useCallback(() => {
    const themeContrast = settings.themeContrast === 'default' ? 'bold' : 'default'
    setSettings({ ...settings, themeContrast })
  }, [setSettings, settings])

  const onChangeContrast = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const themeContrast = event.target.value
      setSettings({ ...settings, themeContrast })
    },
    [setSettings, settings]
  )

  const onResetSetting = useCallback(() => {
    setSettings(themePreset)
  }, [setSettings])

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      onToggleMode,
      onChangeMode,
      onChangeContrast,
      onToggleContrast,
      onResetSetting
    }),
    [settings, onToggleMode, onChangeMode, onToggleContrast, onResetSetting]
  )

  return <SettingContext.Provider value={memoizedValue}>{children}</SettingContext.Provider>
}
