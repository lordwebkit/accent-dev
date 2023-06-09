import { defineStore } from "pinia"

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    filterBrands: []
  }),
  getters: {
    getFilterBrands: (state) => state.filterBrands
  },
  actions: {
    // imitation of sending a request to the server
    async filterBrandsReq() {
      try {
        this.filterBrands = await filterBrands.map(brand => ({ ...brand, checked: false }))
      } catch (err) {
        console.error(err)
      }
    },
    setCheckedBrandFilter(e) {
      const index = this.filterBrands.findIndex(brand => brand.code === e.target.dataset.code)
      this.filterBrands[index] = { ...this.filterBrands[index], checked: !this.filterBrands[index].checked}
    },
    clearFilterBrands() {
      this.filterBrands.forEach(brand => brand.checked = false)
    }
  }
})

const filterBrands = [
  {
    "id": 1,
    "title": "Brand 1",
    "sort": "100",
    "code": "brand_1"
  },
  {
    "id": 2,
    "title": "Brand 2",
    "sort": "200",
    "code": "brand_2"
  },
  {
    "id": 3,
    "title": "Brand 3",
    "sort": "300",
    "code": "brand_3"
  },
  {
    "id": 4,
    "title": "Brand 4",
    "sort": "400",
    "code": "brand_4"
  },
  {
    "id": 5,
    "title": "Brand 5",
    "sort": "500",
    "code": "brand_5"
  },
  {
    "id": 6,
    "title": "Brand 6",
    "sort": "600",
    "code": "brand_6"
  },
  {
    "id": 7,
    "title": "Brand 7",
    "sort": "700",
    "code": "brand_7"
  },
  {
    "id": 8,
    "title": "Brand 8",
    "sort": "700",
    "code": "brand_8"
  },
  {
    "id": 9,
    "title": "Brand 9",
    "sort": "900",
    "code": "brand_9"
  }
]
