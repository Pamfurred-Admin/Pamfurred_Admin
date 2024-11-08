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

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left">
            Select Location on Map
          </label>
          <div id="map" style="height: 300px;"></div>
        </div>

        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="bg-custom-red hover:bg-[#872F05] text-white font-bold py-2 px-4 rounded focus:shadow-outline"
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
import { supabase } from '@/supabase/supabase';

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
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: ' ',
      iconUrl: ' ',
      shadowUrl: ' '
    });

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

    setCustomMarkerIcon() {
      const icon = L.divIcon({
        className: 'leaflet-div-icon',
        html: `<i class="fa fa-location-dot"></i>`,
        iconSize: [30, 30], 
        iconAnchor: [15, 30],
      });

      if (this.marker) {
        this.marker.setIcon(icon);
      }
    },

    onMapClick(event) {
      const { lat, lng } = event.latlng;
      this.form.latitude = lat.toFixed(6);
      this.form.longitude = lng.toFixed(6);

      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
      } else {
        this.marker = L.marker([lat, lng], { draggable: true }).addTo(this.map);
        this.setCustomMarkerIcon();
      }
      this.reverseGeocode(lat, lng);
    },

    reverseGeocode(lat, lng) {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data && data.address) {
            const address = data.address;
            this.form.barangay = address.neighbourhood || address.suburb || 'Not available';
            this.form.city = address.city || address.town || address.village || 'Not available';
            this.form.street = address.road || address.suburb || 'Not available';
          }
        })
        .catch(error => console.error('Error fetching geolocation data:', error));
    },

    async handleSubmit() {
  console.log("Pet Owner Added", this.form);
  try {
  const { error } = await supabase.rpc('add_petowner_details', {
    p_first_name: this.form.firstName,
    p_last_name: this.form.lastName,
    p_password: this.form.password,
    p_username: this.form.username,
    p_email: this.form.email,
    p_user_type: 'pet_owner',
    p_floor_unit_room: this.form.doorNo,
    p_street: this.form.street,
    p_barangay: this.form.barangay,
    p_city: this.form.city,
    p_latitude: parseFloat(this.form.latitude),
    p_longitude: parseFloat(this.form.longitude),
  });

  if (error) {
    console.error('Error adding user:', error);
    alert(`Error adding user: ${error.message}`);
  } else {
    alert('User added successfully!');
    this.resetForm();
  }
} catch (err) {
  console.error('Unexpected error:', err);
  alert('An unexpected error occurred. Please try again later.');
}
    },

    resetForm() {
      this.form = {
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
      };
      this.marker.setLatLng([8.4321, 124.6476]); 
    },
  },
};
</script>

<style></style>
