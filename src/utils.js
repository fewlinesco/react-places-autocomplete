export const geocodeByAddress = (address, callback, options) => {
  const geocoder = new google.maps.Geocoder()
  const OK = google.maps.GeocoderStatus.OK
  const { region } = options
  console.log(region)
  geocoder.geocode({ address, region }, (results, status) => {
    if (status !== OK) {
      callback({ status }, null, results)
      return
    }

    const latLng = {
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng(),
    }

    callback(null, latLng, results)
  })
}

export const geocodeByPlaceId = (placeId, callback, options) => {
  const geocoder = new google.maps.Geocoder()
  const OK = google.maps.GeocoderStatus.OK
  const { region } = options

  geocoder.geocode({ placeId, region }, (results, status) => {
    if (status !== OK) {
      callback({ status }, null, null)
      return
    }

    const latLng = {
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng(),
    }

    callback(null, latLng, results)
  })
}
