import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'
import { NOTIFICATION_KEY } from './constants'

export function slugify (text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

function createNotification () {
  return {
    title: 'Today is practice day!',
    body: 'Enjoy the morning to memorize your notes.',
    android: {
      sound: true,
      sticky: false,
      vibrate: true
    }
  }
}

export async function clearLocalNotification () {
  await AsyncStorage.removeItem(NOTIFICATION_KEY)
  await Notifications.cancelAllScheduledNotificationsAsync()
}

export async function registerNotification () {
  const data = await AsyncStorage.getItem(NOTIFICATION_KEY)
  const parsed = JSON.parse(data)
  if (parsed === null) {
    const status = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    if (status === 'granted') {
      await Notifications.cancelAllScheduledNotificationsAsync()
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(10)
      tomorrow.setMintutes(0)
      const notification = createNotification()
      const settings = { time: tomorrow, repeat: 'day' }
      await Notifications.scheduleLocalNotificationAsync(notification, settings)
      await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
    }
  }
}
