export interface Customer{
    _id: String,
    name: String,
    specialPrices: [
      {
        brand_id:  String
      }
    ]
}