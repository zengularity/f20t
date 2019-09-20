import {OfficeSearch} from '../shared/models/offices';

function searchOffices(offices: OfficeSearch, query: string): OfficeSearch {
  if (offices.data.length <= 0) {
    return {
      count: 0,
      data: []
    }
  } else {
    const data = offices.data.filter(office => {
      return office.location.city.includes(query) || office.location.address.includes(query) || office.description.includes(query)
    })

    return {
      count: data.length,
      data
    }
  }
}

export default searchOffices
