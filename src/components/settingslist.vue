<template>
      <div class="flex-1 h-full bg-gray-100 overflow-y-auto">
        <div class="p-6">
          <div
            class="bg-white rounded-lg shadow-md mx-auto w-full max-w-4xl overflow-y-auto">
            <div class="flex border-b">
              <button
                class="px-6 py-3 text-orange-500 border-b-2 border-orange-500 font-semibold"
              >
                Edit Profile
              </button>
              <button class="px-6 py-3 text-gray-500 hover:text-orange-500">
                Preferences
              </button>
              <button class="px-6 py-3 text-gray-500 hover:text-orange-500">
                Security
              </button>
            </div>

            <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="flex flex-col items-center">
                <div class="relative">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Profile Picture"
                    class="w-24 h-24 rounded-full object-cover"
                  />
                  <button
                    class="absolute bottom-0 right-0 bg-orange-500 text-white w-6 h-6 flex items-center justify-center rounded-full">
                  </button>
                </div>
              </div>
              <div class="md:col-span-2 grid grid-cols-2 gap-6">
                <div>
                  <label
                    for="your-name"
                    class="block text-sm font-medium text-gray-700 text-left mb-1">
                    Your Name
                  </label>
                  <input
                    id="your-name"
                    type="text"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    value="Charlene Reed"
                  />
                </div>
                <div>
                  <label
                    for="user-name"
                    class="block text-sm font-medium text-gray-700 text-left mb-1">
                    User Name
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    value="Charlene Reed"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 text-left mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    value="charlenereed@gmail.com"
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700 text-left mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    value="**********"
                  />
                </div>
                <div>
                  <label
                    for="dob"
                    class="block text-sm font-medium text-gray-700 text-left mb-1"
                  >
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    type="date"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    value="1990-01-25"
                  />
                </div>
                <div>
                  <label
                    for="present-address"
                    class="block text-sm font-medium text-gray-700 text-left mb-1"
                  >
                    Present Address
                  </label>
                  <input
                    id="present-address"
                    type="text"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    value="San Jose, California, USA"
                  />
                </div>
                <div>
                  <label
                    for="permanent-address"
                    class="block text-sm font-medium text-gray-700 text-left mb-1"
                  >
                    Permanent Address
                  </label>
                  <input
                    id="permanent-address"
                    type="text"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    value="San Jose, California, USA"
                  />
                </div>
                <div>
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-700 text-left mb-1"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    value="San Jose"
                  />
                </div>
                <div>
                  <label
                    for="postal-code"
                    class="block text-sm font-medium text-gray-700 text-left mb-1"
                  >
                    Postal Code
                  </label>
                  <input
                    id="postal-code"
                    type="text"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    value="45962"
                  />
                </div>
                <div>
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700 text-left mb-1"
                  >
                    Country
                  </label>
                  <input
                    id="country"
                    type="text"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    value="USA"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-end p-6">
              <button
                class="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
  </template>  
  <script>  
  export default {
    name: "SettingList"
  };
  </script>
  