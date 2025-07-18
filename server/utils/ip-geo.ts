export async function getIpGeoInfo(ip: string) {
  try {
    const IP_GEO_API_URL = 'https://ip.zller.cc/json/'
    return $fetch(IP_GEO_API_URL + ip, {
      method: 'GET',
      retry: 1,
      retryDelay: 100, // ms
    })
  }
  catch (error) {
    console.error('Error fetching IP geo info:', error)
    return null
  }
}
