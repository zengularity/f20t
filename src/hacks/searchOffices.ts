import {OfficeSearch} from '../shared/models/offices';

function searchOffices(offices: OfficeSearch, query: string): OfficeSearch {
  if (offices.data.length <= 0) {
    return {
      count: 0,
      data: []
    }
  } else {
    const data = offices.data.filter(office => {
      const searchParams = [
        office.location.city,
        office.location.address,
        office.description
      ]

      return searchParams.some(param => param.toLowerCase().includes(query))
    })

    return {
      count: data.length,
      data
    }
  }
}

export default searchOffices
