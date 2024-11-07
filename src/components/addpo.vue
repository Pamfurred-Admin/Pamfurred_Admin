<template>
  <div class="flex items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-3xl p-6 bg-transparent overflow-auto h-full pl-20">
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="firstName">
            First Name
          </label>
          <input
            v-model="form.firstName"
            type="text"
            id="firstName"
            placeholder="Enter First Name"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"  
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="lastName">
            Last Name
          </label>
          <input
            v-model="form.lastName"
            type="text"
            id="lastName"
            placeholder="Enter Last Name"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="email">
            Email Address
          </label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            placeholder="Enter Email Address"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="username">
            Username
          </label>
          <input
            v-model="form.username"
            type="text"
            id="username"
            placeholder="Enter Username"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="password">
            Password
          </label>
          <input
            v-model="form.password"
            type="password"
            id="password"
            placeholder="Enter Password"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="doorNo">
            Door No.
          </label>
          <input
            v-model="form.doorNo"
            type="text"
            id="doorNo"
            placeholder="Enter Door No."
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="street">
            Street
          </label>
          <input
            v-model="form.street"
            type="text"
            id="street"
            placeholder="Street will be set by map"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
            readonly
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="barangay">
            Barangay
          </label>
          <input
            v-model="form.barangay"
            type="text"
            id="barangay"
            placeholder="Barangay will be set by map"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
            readonly
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="city">
            City
          </label>
          <input
            v-model="form.city"
            type="text"
            id="city"
            placeholder="City will be set by map"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
            readonly
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="latitude">
            Latitude
          </label>
          <input
            v-model="form.latitude"
            type="text"
            id="latitude"
            placeholder="Latitude will be set by map"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
            readonly
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="longitude">
            Longitude
          </label>
          <input
            v-model="form.longitude"
            type="text"
            id="longitude"
            placeholder="Longitude will be set by map"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
            readonly
          />
        </div>

        <!-- Leaflet Map Container -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left">
            Select Location on Map
          </label>
          <div id="map" style="height: 300px;"></div> <!-- Map container -->
        </div>

        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="bg-custom-red hover:bg-[#872F05] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add New User
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'AddPO',
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        doorNo: "",
        street: "",
        barangay: "",
        city: "",
        latitude: "",
        longitude: "",
      },
      map: null,
      marker: null,
    };
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
      initializeMap() {
    const defaultLat = 8.4321;
    const defaultLng = 124.6476;

    this.map = L.map('map').setView([defaultLat, defaultLng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    this.map.on('click', this.onMapClick);

    this.marker = L.marker([defaultLat, defaultLng], { draggable: true }).addTo(this.map);
    this.setCustomMarkerIcon();

    this.marker.on('dragend', (event) => {
      const latLng = event.target.getLatLng();
      this.form.latitude = latLng.lat.toFixed(6);
      this.form.longitude = latLng.lng.toFixed(6);
    });
  },

    // Set custom Font Awesome icon for the marker
setCustomMarkerIcon() {
  const icon = L.divIcon({
    className: 'leaflet-div-icon',
    html: `<i class="fa fa-location-dot" style="font-size: 30px; color: #A03E06; margin: 0; padding: 0; display: block; outline: none; box-shadow: none;"></i>`, // Using Font Awesome icon directly in HTML
    iconSize: [30, 30],
    iconAnchor: [15, 30], // Center the icon at the bottom of the marker
  });

  // Set the marker's icon to the custom Font Awesome icon
  if (this.marker) {
    this.marker.setIcon(icon);
  }
},


    // Handle map click and place marker
    onMapClick(event) {
      const { lat, lng } = event.latlng;

      // Update form fields with new latitude and longitude
      this.form.latitude = lat.toFixed(6);
      this.form.longitude = lng.toFixed(6);

      // Place or update the marker on the map
      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
      } else {
        this.marker = L.marker([lat, lng], { draggable: true }).addTo(this.map);
        this.setCustomMarkerIcon(); // Apply Font Awesome icon to new marker
      }

      // Reverse geocode to get Barangay, City, and Street
      this.reverseGeocode(lat, lng);
    },

    // Reverse geocoding using OpenStreetMap Nominatim API to get location details
    reverseGeocode(lat, lng) {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data && data.address) {
            const address = data.address;

            // Update barangay, city, and street in form based on the geocoded data
            this.form.barangay = address.neighbourhood || address.suburb || 'Not available';
            this.form.city = address.city || address.town || address.village || 'Not available';
            this.form.street = address.road || address.suburb || 'Not available';
          }
        })
        .catch(error => console.error('Error fetching geolocation data:', error));
    },

    // Handle form submission
    handleSubmit() {
      console.log("Pet Owner Added", this.form);
      // You can submit the form data to your backend here
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 300px;
}
</style>
