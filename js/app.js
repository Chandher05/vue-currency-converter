new Vue({
  el: '#app',
  mounted() {
    this.getCurrencies()
  },
  data: {
    currencies: {}
  }, 
  methods: {
    getCurrencies() {
      axios.get('https://free.currencyconverterapi.com/api/v5/currencies')
        .then(response => {
          this.currencies = response.data.results
        })
    }
  }
})