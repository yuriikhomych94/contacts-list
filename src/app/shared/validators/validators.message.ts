export const ValidationMessages = {
  username: [
    { type: 'required', message: 'Username is required' },
    { type: 'startWithSpace', message: 'Username cannot start with whitespace' }
  ],
  lastname: [
    { type: 'required', message: 'Lastname is required' },
    { type: 'startWithSpace', message: 'Lastname cannot start with whitespace' }
  ],
  phone: [
    { type: 'required', message: 'Phone is required' },
    { type: 'invalidPhone', message: 'Invalid phone number' }
  ],
  emailAddress: [
    { type: 'required', message: 'Email is required' },
    { type: 'email', message: 'Wrong email address' }
  ],
  birthday: {
    day: [
      { type: 'required', message: 'Day is required' },
      { type: 'futureDate', message: 'Invalid date' }
    ],
    month: [
      { type: 'required', message: 'Month is required' },
      { type: 'futureDate', message: 'Invalid date' }
    ],
    year: [
      { type: 'required', message: 'Year is required' },
      { type: 'futureDate', message: 'Invalid date' }
    ]
  },
  address: {
    city: [
      { type: 'required', message: 'City is required' },
      { type: 'startWithSpace', message: 'City cannot start with whitespace' }
    ],
    region: [
      { type: 'required', message: 'Region is required' },
      { type: 'startWithSpace', message: 'Region cannot start with whitespace' }
    ],
    state: [
      { type: 'required', message: 'Country is required' },
      { type: 'startWithSpace', message: 'Country cannot start with whitespace' }
    ],
    street: [
      { type: 'required', message: 'Street is required' },
      { type: 'startWithSpace', message: 'Street cannot start with whitespace' }
    ],
  }
}
