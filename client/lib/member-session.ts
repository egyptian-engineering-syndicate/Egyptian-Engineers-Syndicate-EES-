const SESSION_KEY = "ees-signed-in"

export function signInMember() {
  if (typeof window === "undefined") return
  window.localStorage.setItem(SESSION_KEY, "1")
}

export function signOutMember() {
  if (typeof window === "undefined") return
  window.localStorage.removeItem(SESSION_KEY)
}

export function isMemberSignedIn() {
  if (typeof window === "undefined") return false
  return window.localStorage.getItem(SESSION_KEY) === "1"
}
