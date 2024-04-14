export const today = new Date()
export const tomorrow = new Date()
export const getYear = today.getFullYear()
tomorrow.setDate(tomorrow.getDate() + 1)

export const yesterday = new Date()
yesterday.setDate(tomorrow.getDate() - 1)

export const future5yearDate = new Date(today)
future5yearDate.setFullYear(today.getFullYear() + 5)

export const future20yearDate = new Date(today)
future20yearDate.setFullYear(today.getFullYear() + 20)

export const pastDate = new Date(2000, 0, 1)
