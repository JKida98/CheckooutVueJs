<script>
async function save(credentials) {
  console.log(credentials);
}
</script>

<template>
  <main>
    <div class="px-6">
      <FormKit
        type="form"
        id="registration-example"
        submit-label="Sign In"
        @submit="save"
        :actions="false"
        :value="{
          firstName: 'Andrzej',
          lastName: 'Malka',
          city: 'Polkowice',
        }"
      >
        <FormKit
          input-class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          outer-class="pt-12"
          label-class="block text-yellow-700 text-sm font-bold mb-2"
          validation="required"
          label="First name"
          name="firstName"
        />
        <FormKit
          input-class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          outer-class="pt-4"
          label-class="block text-yellow-700 text-sm font-bold mb-2"
          validation="required"
          label="Last name"
          name="lastName"
        />
        <FormKit
          input-class="bg-white-700 font-bold mt-2 py-2 rounded"
          type="submit"
          label="Register"
        />
      </FormKit>
    </div>
  </main>
</template>
