<template>
  <div class="flex items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-3xl p-6 bg-transparent overflow-auto h-full pl-20">
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="establishmentName">
            Establishment Name
          </label>
          <input
            v-model="form.establishmentName"
            type="text"
            id="establishmentName"
            placeholder="Enter Establishment Name"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="phoneNo">
            Phone Number
          </label>
          <input
            v-model="form.phoneNo"
            type="text"
            id="phoneNo"
            placeholder="Enter Phone Number"
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
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="dailyPetLimit">
            Daily Pet Limit
          </label>
          <input
            v-model="form.dailyPetLimit"
            type="number"
            id="dailyPetLimit"
            placeholder="Enter Daily Pet Limit"
            min="0"         
            max="50"         
            step="1"       
            required
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
            @input="validateDailyPetLimit"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="openingTime">
            Opening Time
          </label>
          <input
            v-model="form.openingTime"
            type="time"
            id="openingTime"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="closingTime">
            Closing Time
          </label>
          <input
            v-model="form.closingTime"
            type="time"
            id="closingTime"
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

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left">
            Select Location on Map
          </label>
          <div id="map" style="height: 300px;"></div>
        </div>

        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="bg-custom-red hover:bg-[#872F05] text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Add New Establishment
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
  name: 'AddSP',
  data() {
    return {
      form: {
        establishmentName: "",
        phoneNo: "",
        email: "",
        username: "",
        password: "",
        dailyPetLimit: 1,
        openingTime: "",
        closingTime: "",
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
  setCustomMarkerIcon() {
    return L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: null,
      iconSize: [30, 40],
      iconAnchor: [20, 60],
    });
  },

  initializeMap() {
    const defaultLat = this.form.latitude || 8.4321;
    const defaultLng = this.form.longitude || 124.6476;

    this.map = L.map('map').setView([defaultLat, defaultLng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    this.map.on('click', this.onMapClick);
    this.marker = L.marker([defaultLat, defaultLng], {
      draggable: true,
      icon: this.setCustomMarkerIcon(),
    }).addTo(this.map);

    this.marker.on('dragend', (event) => {
      const latLng = event.target.getLatLng();
      this.form.latitude = latLng.lat.toFixed(6);
      this.form.longitude = latLng.lng.toFixed(6);
      this.reverseGeocode(latLng.lat, latLng.lng);
    });

    this.reverseGeocode(defaultLat, defaultLng);
  },

  onMapClick(event) {
    const { lat, lng } = event.latlng;
    this.form.latitude = lat.toFixed(6);
    this.form.longitude = lng.toFixed(6);
    this.marker.setLatLng([lat, lng]);
    this.reverseGeocode(lat, lng); 
  },

  reverseGeocode(lat, lng) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1&accept-language=en`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.address) {
          const address = data.address;
          this.form.street = address.road || 'Street not found';
          this.form.barangay = address.suburb || 'Barangay not found';
          this.form.city = address.city || address.town || address.village || 'City not found';
        }
      })
      .catch(error => {
        console.error("Error fetching geocode data:", error);
      });
  },

  handleSubmit() {
    console.log("Service Provider Added", this.form);
  },

  validateDailyPetLimit() {
    let value = parseInt(this.form.dailyPetLimit, 10);
    if (isNaN(value) || value < 1) {
      this.form.dailyPetLimit = 1;
    } else if (value > 50) {
      this.form.dailyPetLimit = 50;
    }
  }
}
};

</script>

<style></style>
