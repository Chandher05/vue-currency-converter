new Vue({
  el: '#app',
  mounted() {
    this.getCurrencies()
  },
  data: {
    currencies: {},
    to: 'EUR',
    from: 'USD',
    amount: 0 
  }, 
  computed: {
    formattedCurrencies() {
      return Object.values(this.currencies)
    }
  },
  methods: {
    getCurrencies() {
      const currencies = localStorage.getItem('currencies')

      if (currencies) {
        this.currencies = JSON.parse(currencies)

        return
      }
      axios.get('https://free.currencyconverterapi.com/api/v5/currencies')
        .then(response => {
          const { results } = response.data
          localStorage.setItem('currencies', JSON.stringify(results))
          this.currencies = results
        })
    }
  }
})