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
            Phone No.
          </label>
          <input
            v-model="form.phoneNo"
            type="text"
            id="phoneNo"
            placeholder="Enter Phone No."
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
            placeholder="Enter Street"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
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
            placeholder="Enter Barangay"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
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
            placeholder="Enter City"
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
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="latitude">
            Latitude
          </label>
          <input
            v-model="form.latitude"
            type="text"
            id="latitude"
            placeholder="Enter Latitude"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
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
            placeholder="Enter Longitude"
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

        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="bg-custom-red hover:bg-[#872F05] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Service Provider
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddSP',
  data() {
    return {
      form: {
        establishmentName: "",
        phoneNo: "",
        doorNo: "",
        street: "",
        barangay: "",
        city: "",
        email: "",
        username: "",
        password: "",
        openingTime: "",
        closingTime: "",
        latitude: "",
        longitude: "",
        dailyPetLimit: "",
      },
    };
  },
  methods: {
    handleSubmit() {
    console.log("Service Provider Added", this.form);
  },
  validateDailyPetLimit() {
    let value = parseInt(this.form.dailyPetLimit, 50);
    if (value < 1) {
      this.form.dailyPetLimit = 50;
    }
  }
}
};
</script>

<style>
</style>
