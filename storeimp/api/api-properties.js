export const rowsPerPageItems = [20, 100]

let doMock = false
let url = 'https://c2sms.xyz/public/index.php'
// if (process.env.NODE_ENV === 'development') {
if (window.location.host === 'localhost:3000') {
}

export const baseURL = url
export const wwwUrl = 'https://c2sms.xyz'
export const uploadUrl = wwwUrl + '/uploads'

export const mockApp = doMock
