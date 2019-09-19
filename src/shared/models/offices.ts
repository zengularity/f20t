export type Offices = {
  name: string
  description: string
  employees_count: number
  open_date: Date
  location: Location
  remote_available: boolean
  image_url: string
}

export type Location = {
  city: string
  number: string
  address: string
  postal_code: string
  country: string
  language: string[]
}